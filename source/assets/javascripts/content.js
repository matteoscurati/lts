$(document).ready( function() {
  $('.content__wrapper').isotope({
    itemSelector: '.content__item',
    percentPosition: true,
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.content__sizer',
      gutter: '.content__gutter'
    }
  });
});
