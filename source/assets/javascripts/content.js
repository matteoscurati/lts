$(document).ready( function() {
  $('.content__wrapper').isotope({
    itemSelector: '.content__item',
    percentPosition: true,
    masonry: {
      columnWidth: '.content__sizer'
    }
  });
});
