$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1200) {
        $('.page_up').fadeIn();
    } else {
        $('.page_up').fadeOut();
    }

});

$('.loader').counterUp({
    delay: 15,
    time: 600
});

$(window).on("load", function() {
    $(".loading").fadeOut("slow");
});

$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 50) {
            $(".menu").addClass("active_menu");
        } else {
            $(".menu").removeClass("active_menu");
        }
    });
});

$('html, body').animate({
    scrollTop: $("#target-element").offset().top
}, 1000);
