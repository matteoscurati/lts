$(function() {
 $(document).ready(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $('.header__image').hide();
      $('.header__search').hide();
    } else {
      $('.header__search--center').hide();
    }
  });
});
$(window).scroll(function() {
  var distance = $('.header').offset().top;
  if (distance >= 10) {
    $('.header__image').fadeOut(function(e) {
      $('.header__search--center').fadeIn('fast');
    });
    $('.header__search').fadeOut('fast');
  } else {
    $('.header__search--center').fadeOut(function() {
      $('.header__image').fadeIn(function() {
        var offset = $('.header').offset();
        if (offset.top < 10) {
            $('.header__search--center').hide();
        };
      });
      $('.header__search').fadeIn('fast');
    });
  };
  if (distance >= 36) {
    $('.menu').css({'position': 'fixed', 'margin-top': '5.75rem'});
  } else {
    $('.menu').css({'position': 'absolute', 'margin-top': '8.25rem'});
  };
});
