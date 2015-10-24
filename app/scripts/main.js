/*jshint unused:false*/
/*jshint -W117 */

$(document).ready(function(){
  'use strict';

  // Initialize slider
  $('.slider').slick({
    dots: true,
    fade: true,
    speed: 800,
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon-slider-next.svg" /></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon-slider-prev.svg" /></button>'
  });

  // toggle mobile menu
  $('.icon-menu, .icon-close, .nav-item a').click(function() {
    $('.global.fixed').toggleClass('active');
    $('body').toggleClass('locked');
  });

  // initialize waypoints
  var triggerSimplicity = new Waypoint.Inview({
    element: $('#simplicity'),
    entered: function(direction) {
      var videoSimplicity = document.getElementById('video-simplicity');
      videoSimplicity.play();
    }
  });
  var triggerOrganized = new Waypoint.Inview({
    element: $('#organized'),
    entered: function(direction) {
      var videoOrganized = document.getElementById('video-organized');
      videoOrganized.play();
    }
  });
});
