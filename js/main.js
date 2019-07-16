

// mainpage slider

$('.slide__list').slick({
    slidesPerScroll: 1,
    slidesPerShow: 1,
    dots: true,
    arrows: true,
    fade: true,
    nextArrow: $('.slide__next'),
    customPaging : function(slider, i) {
        return '<a href="#" class="dots__item"></a>';
    },

});

// mainpage form

$('.form__wrapper_line')
.focusin(function(){
    $(this).find('span').fadeOut();
})
.focusout(function(){
    let textL = 0;
    if($(this).find('input').length > 0) {
        textL = $(this).find('input').val().length;
    }else{
        textL = $(this).find('textarea').val().length;
    }
    if(textL == 0) {
        $(this).find('span').fadeIn();
    }
});

// mobile link

$('.mobile__link')
.click(function (e) {
    e.preventDefault();

    $('.mobile__menu').toggleClass('mobile__menu_open');
    $('.shadow').fadeIn();
    }
);

$('.shadow')
.click(function(e){
    e.preventDefault();

    $('.mobile__menu').toggleClass('mobile__menu_open');
    $(this).fadeOut();
});

$('.mobile__close')
.click(function (e) {
    e.preventDefault();
    $('.mobile__menu').toggleClass('mobile__menu_open');
    $('.shadow').fadeOut();
});


$('.menu__item a').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 1100);

    if(window.innerWidth <= 640) {
        $('.mobile__menu').toggleClass('mobile__menu_open');
        $('.shadow').fadeOut();
    }

    return false;
});
