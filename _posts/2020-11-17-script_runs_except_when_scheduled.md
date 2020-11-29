---
layout: post
title: "Script Succesfully Runs Except When Executed By Task Scheduler"
author: Andrew Muhs
date: 2020-11-17 00:00:00 -6000
tags: [windows, code, batch, vbs]
---

We have a process at work performing a number of tasks, one of which converts an Excel document into a CSV file. That particular task is done with a VB script that is called from a Batch file. Basically, the batch script does some stuff, calls the vb script to convert the Excel doc, and then does some more stuff.

Running the script manually on the server results in a successful execution. However, running the script from within Task Scheduler, even as myself, causes the script to hang.

The first thing I did was add more logging to the scripts and rerun them. Once I was able to see the error I was able to start tracking the problem down. Here is part of the error text:

```
- The file name or path does not exist.
- The file is being used by another program.
- The workbook you are trying to save has the same name as a currently open workbook.
```

In my next test run, I changed the paths to use the UNC paths. No luck. I also made sure the paths were quoted correctly since there was a space in one of the directory names. Still no luck.

For my next test, I actually wrote a python script, compiled it into an exe, and then used that exe to replace the vb script. Running that particular configuration worked. I still didn't know why though.

Because we were trying not to introduce any additional dependencies, I took what I did in python and figured out how to do the same thing in PowerShell. (I am faster with python so it made more sense to test with it first.) The powershell version resulted in a failure.

I wasn't sure where to go from here. I knew I could get it to work with the exe, but I didn't know why it was working. I didn't want to just get it to work and then move on. If I did that this same problem would pop up again and I wouldn't know what to do. So I tabled this for the weekend.

Over the weekend it occured to me that the python script was actually opening the Excel archive and reading the XML files (Yes, Excel files are just archives of XML documents.) where the vb script and powershell were using the COM object to do the conversion. With that, I was able to do some more targeted Googling and I found [this personal blog post](https://www.jonashendrickx.com/2016/04/07/when-run-as-scheduled-task-excel-wont-save-with-powershell/) which led to my next test.

The first thing I did was to make sure these two directories existed:

```
C:\Windows\System32\config\systemprofile\Desktop
C:\Windows\SysWOW64\config\systemprofile\Desktop
```

The first directory existed, the second did not, so I created it and reran the script. It worked. Not only did it work with the powershell, it worked with the python and the vb script as well. From what I can gather from [this superuser post](https://superuser.com/questions/598601/what-is-system32-config-systemprofile) (the post is talking about IIS, but I am willing to bet it applies) the user, even though it was supposed to be me, uses a system profile to do the work. Why both of those directories need to exist, I am still not sure. I wish I did, but I have enough information now to know what to look for if something like this ever happens again.
