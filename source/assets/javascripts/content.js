$(document).ready( function() {
  $('.content__wrapper').isotope({
    itemSelector: '.content__item',
    percentPosition: true,
    layoutMode: 'packery',
    packery: {
      gutter: '.content__gutter'
    }
  });
  $('.content__wrapper').imagesLoaded().progress( function() {
    $('.content__wrapper').isotole('layout');
  });
});
