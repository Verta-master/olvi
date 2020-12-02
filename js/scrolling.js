//Scroll to menu anchor
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('.faq__item a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('.faq__item a').each(function () {
        $(this).removeClass('faq__link--active');
    })
    $(this).addClass('faq__link--active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.faq__link').each(function () {
      event.preventDefault();
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.faq__link').removeClass("faq__link--active");
          currLink.addClass("faq__link--active");
      }
  });
};

if (window.innerWidth < 766) {
  $('.faq__title').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('faq__title--open');
  })
};