//Mobile menu
if (window.innerWidth < 1170) {
  $('.menu__btn').click(function() {
    event.preventDefault();
    $('.menu__drop').addClass('menu__drop--open');
  })
  
  $('.menu__closebtn').click(function() {
    $('.menu__drop').removeClass('menu__drop--open');
  })
  
  $('.menu__arrow').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('menu__arrow--top');
  })
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
})

$('.header__closebtn').click(function() {
  $('.header__droptablet').removeClass('header__droptablet--open');
})
