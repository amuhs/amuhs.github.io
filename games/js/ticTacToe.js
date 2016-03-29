$(document).ready(function(){
  var curr, elem, img1, img2, check1, check2, count;
  img1 = "<img src='img/cross-orng.png'/>";
  img2 = "<img src='img/circle-grn.png'/>";
  check1 = "<img src=\"img/cross-orng.png\">";
  check2 = "<img src=\"img/circle-grn.png\">";
  count = 1;

  $('.bin').click(function(){
    curr = $(this).html();
    elem = '#' + $(this).attr('id');
    if(isOdd(count) && curr == ""){
      $(elem).html(img1);
    } else if(!isOdd(count) && curr == ""){
      $(elem).html(img2);
    } else {
      $(elem).empty();
    }
    count++;
  });

  function isOdd(n){
    if(n % 2 !== 0){return true;}
  }

  /******** Reset *********/
  $('#reset').click(function(){
    $('.bin').empty();
    count = 1;
  });
});
