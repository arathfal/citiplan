jQuery(document).ready(() => {
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

  $(".slick-slide").on("click", () => {
    $(this).css("cursor", "grabbing");
  });

  $(".client-slider").slick({
    // dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-2x fas fa-caret-left arrow-prev"></i>',
    nextArrow: '<i class="fa-2x fas fa-caret-right arrow-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
