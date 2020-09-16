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
    ],
  });

  //Table Home
  const rowsPerPage = 5;
  const rows = $("#table tbody tr");
  const rowsCount = rows.length;
  const pageCount = Math.ceil(rowsCount / rowsPerPage);
  const numbers = $(".page-number");

  for (var i = 0; i < pageCount; i++) {
    numbers.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }

  $(".page-number li:first-child a").addClass("active");

  displayRows(1);

  $(".page-number li a").click(function (e) {
    var $this = $(this);
    e.preventDefault();
    $(".page-number li a").removeClass("active");
    $this.addClass("active");
    displayRows($this.text());
  });

  function displayRows(index) {
    var start = (index - 1) * rowsPerPage;
    var end = start + rowsPerPage;
    rows.hide();
    rows.slice(start, end).show();
  }

  //Table konstruksi
  const rowsPage = 15;
  const data = $("#tablePortfolioKonstruksi tbody tr");
  const dataCount = data.length;
  const dataPageCount = Math.ceil(dataCount / rowsPage);
  const numbPage = $(".page-number");

  for (var i = 0; i < dataPageCount; i++) {
    numbPage.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }

  $(".page-number li:first-child a").addClass("active");

  displayRowsPage(1);

  $(".page-number li a").click(function (e) {
    var $thisData = $(this);
    e.preventDefault();
    $(".page-number li a").removeClass("active");
    $thisData.addClass("active");
    displayRowsPage($thisData.text());
  });

  function displayRowsPage(index) {
    var startPage = (index - 1) * rowsPage;
    var endPage = startPage + rowsPage;
    data.hide();
    data.slice(startPage, endPage).show();
  }

  //Table Aplikasi
  const rowsPageAplikasi = 5;
  const dataAplikasi = $("#tablePortfolioAplikasi tbody tr");
  const dataCountAplikasi = dataAplikasi.length;
  const dataPageCountAplikasi = Math.ceil(dataCountAplikasi / rowsPageAplikasi);
  const numbPageAplikasi = $(".page-number-aplikasi");

  for (var i = 0; i < dataPageCountAplikasi; i++) {
    numbPageAplikasi.append('<li><a href="#">' + (i + 1) + "</a></li>");
  }

  $(".page-number-aplikasi li:first-child a").addClass("active");

  displayRowsPageAplikasi(1);

  $(".page-number-aplikasi li a").click(function (e) {
    var $thisData = $(this);
    e.preventDefault();
    $(".page-number-aplikasi li a").removeClass("active");
    $thisData.addClass("active");
    displayRowsPageAplikasi($thisData.text());
  });

  function displayRowsPageAplikasi(index) {
    var startPageAplikasi = (index - 1) * rowsPageAplikasi;
    var endPageAplikasi = startPageAplikasi + rowsPagePlikasi;
    data.hide();
    data.slice(startPageAplikasi, endPageAplikasi).show();
  }
});
