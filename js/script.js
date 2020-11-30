//Mobile menu
//$('.menu__btn').click(function() {
//  $('.menu').toggleClass('menu--opened');
//  $('.menu__list').slideToggle();
//})
//
//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

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
