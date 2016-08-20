$(function(){
    var dropDown, week;
    dropDown = $("#versesDropDown");
    week = 8;

    for(var i = 1; i < 53; i++)
    {
        if(i <= week)
        {
            dropDown.append('<li value="' + i + '"><a href="#">Week ' + i + '</a></li>');
        }
        else
        {
            dropDown.append('<li class="disabled" value="' + i + '"><a href="#">Week ' + i + '</a></li>');
        }
    }

});



/*
<li value="8"><a href="#">Week 8</a></li>
<li class="disabled" value="' + i + '"><a href="#">Week ' + i + '</a></li>
*/
