$(function () {
    $('.burger__btn').click (function () {
        $('.burger__btn').toggleClass('cross');
        $('.menu-collapse').toggleClass('d-none').css('order', '1' );
        $('.menu').toggleClass('menu-opened');
        $('body').toggleClass('lock');
        $('html').toggleClass('lock');
        $('.overlay').toggleClass('fone');
    });
   
    $('.parallax-btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    $(document).ready(function () {
        $('#list > li').click(function (event) {
            $(this).toggleClass('active');
            $(this).children("ul").slideToggle().toggleClass();
            event.stopPropagation();
        });
    });

    $('a.go').click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1000);
        return false;
    });

    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
    });

    $('.pagination').pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});