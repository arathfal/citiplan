jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 600) {
      $(".navbar").removeClass("fadeIn");
      $(".navbar").addClass("animated fadeInDown");
    } else {
      $(".navbar").removeClass("fadeInDown");
      $(".navbar").addClass("animated fadeIn");
    }
  });
});
