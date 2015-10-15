$(document).ready(function(){
  'use strict';
  $('.slider').slick({
    dots: true,
    fade: true,
    speed: 800,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon-slider-next.svg" /></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-slider-prev.svg" /></button>'
  });
});