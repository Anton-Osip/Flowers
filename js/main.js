$(function () {
  $(".slider").slick({
    autoplay: 2000,
    dots: true,
  });
  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });
});
new WOW().init();
