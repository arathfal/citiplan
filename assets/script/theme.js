$(document).ready(function () {
  $(window).scroll(() => {
    if ($(document).scrollTop() > 100) {
      $(".navbar").removeClass("fadeIn");
      $("body").addClass("shrink");
      $(".navbar").addClass("animated fadeInDown");
    } else {
      $(".navbar").removeClass("fadeInDown");
      $("body").removeClass("shrink");
      $(".navbar").addClass("animated fadeIn");
    }
  });
});
