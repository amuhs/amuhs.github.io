$(document).ready(function(){
  $('.menu-btn').click(function(){
    var prop = $('.menu').css('display');
    if(prop === 'none'){ $('.menu').fadeIn('slow'); }
  });
  $('.menu-close').click(function(){ $('.menu').fadeOut('slow'); });
});
