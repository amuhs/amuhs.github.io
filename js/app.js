$(document).ready(function(){
  // Switch Verse Cards based on the week selected in the dropdown
  // "<a href=\"verse-cards/Week-3.png\"><img class=\"card\" src=\"verse-cards/Week-3.png\" /></a>"
  var ptOne, ptTwo, ptThree, weekNum
  ptOne = "<a href=\"verse-cards/Week-";
  ptTwo = ".png\"><img class=\"card\" src=\"verse-cards/Week-";
  ptThree = ".png\" /></a>";

  $('.dropdown-menu li').click(function(){
    weekNum = $(this).attr('value');
    $('.verse-card').html(ptOne + weekNum + ptTwo + weekNum + ptThree);
  });


});
