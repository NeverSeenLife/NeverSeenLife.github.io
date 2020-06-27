// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
$(function() {
  $(window).on("scroll", function() {
      if ($(window).scrollTop() > 50) {
          $(".main_nav").addClass("active_menu");
      } else {
          $(".main_nav").removeClass("active_menu");
      }
  });
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 300) {
      $('.page_up').fadeIn();
  } else {
      $('.page_up').fadeOut();
  }

});

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
  var src = $(this).attr('src');
  var modal;
  function removeModal(){ modal.remove(); $('body').off('keyup.modal-close'); }
  modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
      backgroundSize: 'contain',
      width:'100%', height:'100%',
      position:'fixed',
      zIndex:'10000',
      top:'0', left:'0',
      cursor: 'pointer'
  }).click(function(){
      removeModal();
  }).appendTo('body');
  $('body').on('keyup.modal-close', function(e){
    if(e.key==='Escape'){ removeModal(); } 
  });
});