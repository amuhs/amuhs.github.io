$(document).ready(function(){
  var curr;
  var img1 = "<img src='img/cross-orng.png'/>";
  var img2 = "<img src='img/circle-grn.png'/>";
  var check1 = "<img src=\"img/cross-orng.png\">";
  var check2 = "<img src=\"img/circle-grn.png\">";

  $('#one').click(function(){
    curr = $('#one').html();
    if (curr === check1){
      $('#one').html(img2);
    } else if (curr === check2) {
      $('#one').empty();
    } else {
      $('#one').html(img1);
    }
  });
  $('#two').click(function(){
    curr = $('#two').html();
    if (curr === check1){
      $('#two').html(img2);
    } else if (curr === check2) {
      $('#two').empty();
    } else {
      $('#two').html(img1);
    }
  });
  $('#three').click(function(){
    curr = $('#three').html();
    if (curr === check1){
      $('#three').html(img2);
    } else if (curr === check2) {
      $('#three').empty();
    } else {
      $('#three').html(img1);
    }
  });
  $('#four').click(function(){
    curr = $('#four').html();
    if (curr === check1){
      $('#four').html(img2);
    } else if (curr === check2) {
      $('#four').empty();
    } else {
      $('#four').html(img1);
    }
  });
  $('#five').click(function(){
    curr = $('#five').html();
    if (curr === check1){
      $('#five').html(img2);
    } else if (curr === check2) {
      $('#five').empty();
    } else {
      $('#five').html(img1);
    }
  });
  $('#six').click(function(){
    curr = $('#six').html();
    if (curr === check1){
      $('#six').html(img2);
    } else if (curr === check2) {
      $('#six').empty();
    } else {
      $('#six').html(img1);
    }
  });
  $('#seven').click(function(){
    curr = $('#seven').html();
    if (curr === check1){
      $('#seven').html(img2);
    } else if (curr === check2) {
      $('#seven').empty();
    } else {
      $('#seven').html(img1);
    }
  });
  $('#eight').click(function(){
    curr = $('#eight').html();
    if (curr === check1){
      $('#eight').html(img2);
    } else if (curr === check2) {
      $('#eight').empty();
    } else {
      $('#eight').html(img1);
    }
  });
  $('#nine').click(function(){
    curr = $('#nine').html();
    if (curr === check1){
      $('#nine').html(img2);
    } else if (curr === check2) {
      $('#nine').empty();
    } else {
      $('#nine').html(img1);
    }
  });

  /******** Reset *********/
  $('#reset').click(function(){
    $('#one').empty();
    $('#two').empty();
    $('#three').empty();
    $('#four').empty();
    $('#five').empty();
    $('#six').empty();
    $('#seven').empty();
    $('#eight').empty();
    $('#nine').empty();
  });
});
