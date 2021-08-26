$(document).ready(function() {
    scrollFunction();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        $(".header p").slideUp(250);
        $(".use_cases").css("margin-top", "95px");
    } else {
        $(".header p").slideDown(250);
        $(".use_cases").css("margin-top", "250px");
    }
}