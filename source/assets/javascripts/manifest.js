$(document).ready( function() {
  $('.manifesto__stripe').isotope({
    layoutMode: 'fitRows',
    itemSelector: '.manifesto__stripe__item',
    percentPosition: true,
    fitRows: {
      gutter: '.manifesto__stripe__sizer'
    }
  })
});
