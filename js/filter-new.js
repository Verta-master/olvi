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
var slider = document.getElementById('slider');
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

var inputNumber = document.getElementById('amount');

slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    inputNumber.value = Math.round(value);
});

inputNumber.addEventListener('change', function () {
    slider.noUiSlider.set([null, this.value]);
});

var sliderPrice = document.getElementById('slider-range');
  noUiSlider.create(sliderPrice, {
    range: {
        'min': 0,
        'max': 2000
    },
    step: 200,
    connect: true,
    start: [560, 1620],
    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 100
    }
});

var inputNumber1 = document.getElementById('amount-min');
var inputNumber2 = document.getElementById('amount-max');

sliderPrice.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];

    if (handle) {
        inputNumber2.value = Math.round(value);
    } else {
        inputNumber1.value = Math.round(value);
    }
});

inputNumber1.addEventListener('change', function () {
    sliderPrice.noUiSlider.set([null, this.value]);
});

inputNumber2.addEventListener('change', function () {
    sliderPrice.noUiSlider.set([null, this.value]);
});
