---
layout: default
title:  "Escaping Strings in Batch"
date:   2019-02-22 20:20:00 -0600
categories: [code]
tags:   [batch, Windows]
---
Over the past year, I have developed a few custom tools for the software engineers at work to utilize within [P4V](https://www.perforce.com/downloads/helix-visual-client-p4v), the desktop client for interacting with [Helix Core (Perforce)](https://www.perforce.com/products/helix-core). These tools add some functionality to P4V that would otherwise be more difficult, or all together not possible. When new tools are added, or an argument changes, the SEs can edit the tool manually, or delete the tool and re-import via XML document.
<!--more-->

As a part of a much larger batch script for new installs, there is a section that will add the custom tools by deleting the old custom tools file in the user space (`%HOMEPATH%\.p4qt\customTools.xml`), and creating the new file for P4V to pick up. To do this, the XML is echo'd to the new file.

Here is a small example:

```batch
:CUSTOM_TOOL_FILE
ECHO Importing custom tools into P4V...

(
    ECHO <customTool>
    ECHO    <program>python</program>
    ECHO    <arguments>C:\custom_tool.py --changelist %c</arguments>
    ECHO    <promptText>Enter a revision number (e.g. 38): </promptText>
    ECHO </customTool>
) >> %custom_tool_file%

IF NOT EXISTS %custom_tool_file% (
    EXIT /B 1
)
ECHO Import complete.
EXIT /B 0
```

This is looks fine, but if you have used batch at all, you will know echoing strings can be problematic when there are any special characters involved. For instance, all of the `<` and `>` symbols need to be escaped with the `^` symbol for this echo to work at all. That will look like this:

```batch
:CUSTOM_TOOL_FILE
ECHO Importing custom tools into P4V...

(
    ECHO ^<customTool^>
    ECHO    ^<program^>python^</program^>
    ECHO    ^<arguments^>C:\custom_tool.py --changelist %c^</arguments^>
    ECHO    ^<promptText^>Enter a revision number (e.g. 38): ^</promptText^>
    ECHO ^</customTool^>
) >> %custom_tool_file%

IF NOT EXISTS %custom_tool_file% (
    EXIT /B 1
)
ECHO Import complete.
EXIT /B 0
```

If you call this in your batch script it will run, but you will see an error that looks similar to this `: </promptText> was unexpected at this time`. You would think that is a simple fix. Just escape the `:` and move along, but it's not. After a few google searches, I got lucky and found a [stackoverflow post](https://stackoverflow.com/a/26686415) from someone who also had parentheses in right before the colon. Batch was not having a problem with the colon. It was the parentheses! So I went from `(e.g. 38)^: ^</promptText^>` to  `^(e.g. 38^): ^</promptText^>` and the error was taken care of. There is still one more problem with the code snippet above. The `%` still needs to be escaped or it won't be in the resultant file. To escape a percent in batch, you don't use the caret symbol, you actually just double up the percent to `%%`. So the end result with everything escaped looks like the below:

```batch
:CUSTOM_TOOL_FILE
ECHO Importing custom tools into P4V...

(
    ECHO ^<customTool^>
    ECHO    ^<program^>python^</program^>
    ECHO    ^<arguments^>C:\custom_tool.py --changelist %%c^</arguments^>
    ECHO    ^<promptText^>Enter a revision number ^(e.g. 38^): ^</promptText^>
    ECHO ^</customTool^>
) >> %custom_tool_file%

IF NOT EXISTS %custom_tool_file% (
    EXIT /B 1
)
ECHO Import complete.
EXIT /B 0
```

Using the final code snippet will result in a usable XML file with the below text inside.
```xml
<customTool>
    <program>python</program>
    <arguments>C:\custom_tool.py --changelist %c</arguments>
    <promptText>Enter a revision number (e.g. 38): </promptText>
</customTool>
```