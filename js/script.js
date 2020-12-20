//Mobile menu
if (window.innerWidth < 1170) {
  $('.menu__btn').click(function() {
    event.preventDefault();
    $('.menu__drop').addClass('menu__drop--open');
    $('.overlay').addClass('overlay--show');
  })
  
  $('.menu__closebtn').click(function() {
    $('.menu__drop').removeClass('menu__drop--open');
    $('.overlay').removeClass('overlay--show');
  })
  
  $('.menu__arrow').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu__arrow--top');
    $(".menu__drop").scroll(function(){
      $(".menu__drop").getNiceScroll().resize();
    });
  })
  
  $('.menu__arrow').prev().addClass('menu__category--blue');
  
  $('.menu__drop').niceScroll({
    cursorcolor: '#00a0e3',
  });
}

//Search focus
$('.search').click(function(e) {
  e.stopPropagation();
  $(this).addClass('search--focus');
})

$('body').click(function(){
  $('.search').removeClass('search--focus');
})

//Phones
$('.header__dropbtn').click(function() {
  $('.header__droptablet').slideToggle();
  $(this).toggleClass('header__dropbtn--up');
})

$('.header__mobilebtn').click(function() {
  $('.header__droptablet').addClass('header__droptablet--open');
  $('.overlay').addClass('overlay--show');
})

$('.header__closebtn').click(function() {
  $('.header__droptablet').removeClass('header__droptablet--open');
  $('.overlay').removeClass('overlay--show');
})

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
  } else {
    $(".btn-top").fadeOut();
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
