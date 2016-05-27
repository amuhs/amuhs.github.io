$(document).ready(function(){
  var width, dropDown
  width = screen.width;
  dropDown = $('.games');

  if(width <= 900){
    dropDown.css('display', 'none');
  }

});
