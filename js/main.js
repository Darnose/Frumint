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

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.parallax-bg1').css('top',(0-(scrolled*.25))+'px');
        $('.parallax-bg2').css('top',(0-(scrolled*.5))+'px');
        $('.parallax-bg3').css('top',(0-(scrolled*.75))+'px');
       }

    $(document).ready(function () {
        $('#list > li').click(function () {
            $(this).toggleClass('active');
            $(this).children("ul").slideToggle();
        });
        $('ul').click(function (event) {
            event.stopPropagation();
            sessionStorage.getItem($(this));
        });
    });

    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: false,
        prevArrow: false,
        nextArrow: false,
    });

});