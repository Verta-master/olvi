$('.filter__title').click(function() {
  $(this).next().slideToggle();
  $(this).toggleClass('filter__title--top');
  $('.filter__title').not(this).next().stop(true,true).slideUp();
});

if (window.innerWidth < 1170) {
  $('.filter__btn').click(function() {
    event.preventDefault();
    $('.filter__drop').addClass('filter__drop--open');
    $('.overlay').addClass('overlay--show');
    $('.filter__wrap').scroll(function(){
      $('.filter__wrap').getNiceScroll().resize();
    });
  })
  
  $('.filter__close').click(function() {
    $('.filter__drop').removeClass('filter__drop--open');
    $('.overlay').removeClass('overlay--show');
  })
  
  $('.filter__closebtn').click(function() {
    $('.filter__drop').removeClass('filter__drop--open');
    $('.overlay').removeClass('overlay--show');
  })
  
  $('.filter__wrap').niceScroll({
    cursorcolor: '#00a0e3',
  });
}

// Range sliders
var slider = document.getElementById('slider-size');
  noUiSlider.create(slider, {
    range: {
        'min': 10,
        'max': 32
    },
    step: 2,
    start: [24],
    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 8
    }
});

//(function($) {
//  //define initial hidden input value with slider value
//  $("#amount-size").val(slider.get());
//  //
//  ////update hidden input value on slider change
//  slider.on("change", function() {
//      $("#amount-size").val(slider.get());
//  });
//})(jQuery)

var inputNumber = document.getElementById('amount-size');

slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        inputNumber.value = value;
    }
});

inputNumber.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
});
