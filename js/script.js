$(function ()
{

    /*
    *
    * This section creates the dropdown menu when the page loads.
    *
    */
    var dropDown, CURR_WEEK;
    dropDown = $("#versesDropDown");
    CURR_WEEK = 12;

    for (var i = 1; i < 53; i++)
    {
        if (i <= CURR_WEEK)
        {
            dropDown.append('<li value="' + i + '"><a href="#">Week ' + i + '</a></li>');
        }
        else
        {
            dropDown.append('<li class="disabled" value="' + i + '"><a href="#">Week ' + i + '</a></li>');
        }
    }

    /*
    *
    * This section changes the verse card based on what the user
    * selects from the dropdown menu.
    *
    */
    var ptOne, ptTwo, ptThree, weekNum
    ptOne = "<a href=\"verse-cards/Week-";
    ptTwo = ".png\"><img class=\"card\" src=\"verse-cards/Week-";
    ptThree = ".png\" /></a>";

    $('.dropdown-menu li').click(function()
    {
      weekNum = $(this).attr('value');
      if (weekNum > CURR_WEEK)
      {
          $('.verse-card').html(ptOne + weekNum + ptTwo + 1 + ptThree);
      }
      else
      {
          $('.verse-card').html(ptOne + weekNum + ptTwo + weekNum + ptThree);
      }
    });

});
