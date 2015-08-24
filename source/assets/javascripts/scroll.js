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
      //var effect_in = function() {
        //$('.header__search--center').fadeIn();
      //};
      $('.header__search--center').fadeIn();
    });
    $('.header__search').fadeOut();
  } else {
    $('.header__search--center').fadeOut(function() {
      $('.header__image').fadeIn(function() {
        var offset = $('.header').offset();
        if (offset.top < 10) {
            $('.header__search--center').hide();
        };
      });
      $('.header__search').fadeIn();
    });
  };
});
