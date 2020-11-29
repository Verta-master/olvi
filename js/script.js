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
