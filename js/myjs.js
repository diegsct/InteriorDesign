$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });

  $('.toggle-btn').click(function(){
    $('.nav-menu').toggle(500);
  });

});