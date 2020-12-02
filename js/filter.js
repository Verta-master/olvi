$('.filter__title').click(function() {
  $(this).next().slideToggle();
})

// Range sliders
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 2000,
    values: [ 560, 1620 ],
    slide: function( event, ui ) {
      $( "#amount-min" ).val( ui.values[ 0 ] + " грн" );
      $( "#amount-max" ).val( ui.values[ 1 ] + " грн" );
    }
  });
  $( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) + " грн" );
  $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " грн" );
});

$( function() {
  $( "#slider" ).slider({
    value: 24,
    min: 10,
    max: 32,
    step: 2,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value + " см" );
    }
  });
  $( "#amount" ).val( $( "#slider" ).slider( "value" ) + " см" );
});
