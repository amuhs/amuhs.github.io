$(document).ready(function(){
  var curr, elem;
  var img1 = "<img src='img/cross-orng.png'/>";
  var img2 = "<img src='img/circle-grn.png'/>";
  var check1 = "<img src=\"img/cross-orng.png\">";
  var check2 = "<img src=\"img/circle-grn.png\">";

  $('.bin').click(function(){
    curr = $(this).html();
    elem = '#' + $(this).attr('id');
    if (curr === check1){
      $(elem).html(img2);
    } else if (curr === check2) {
      $(elem).empty();
    } else {
      $(elem).html(img1);
    }
  });

  $('.bin').click(function(){
    curr = $(this).html();
    elem = '#' + $(this).attr('id');
    if (curr === check1){
      $(elem).html(img2);
    } else if (curr === check2) {
      $(elem).empty();
    } else {
      $(elem).html(img1);
    }
  });

  /******** Reset *********/
  $('#reset').click(function(){
    $('.bin').empty();
  });
});
