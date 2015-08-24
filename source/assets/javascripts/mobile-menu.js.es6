$(function() {
  $(document).ready(function() {
    $('.header-mobile__menu').hide();
  });
  $('.header-mobile__bottom--left').click(function() {
    $('.header-mobile__menu').fadeToggle();
  ($(".header-mobile__bottom--left__plus").text() === "+") ? $(".header-mobile__bottom--left__plus").text("-") : $(".header-mobile__bottom--left__plus").text("+");
  });
});
