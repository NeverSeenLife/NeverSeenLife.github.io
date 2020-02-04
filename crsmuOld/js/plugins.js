$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header-top").addClass("activeHeader");
      } else {
         $(".header-top").removeClass("activeHeader");
      }
  });
});

$(document).ready(function () {
  $('#button').click(function() {
  $('html, body').animate({
    scrollTop: $("body").offset().top
  }, 100)
})
})