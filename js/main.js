$(function () {
    $('.burger__btn').click (function () {
        $('.burger__btn').toggleClass('cross');
        $('.menu-collapse').toggleClass('d-none').css('order', '1' );
        $('.menu').toggleClass('menu-opened');
        $('body').toggleClass('lock');
        $('html').toggleClass('lock');
        $('.overlay').toggleClass('fone');
    });
   
    $('a.go').click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr('href');
        destination = $(elementClick).offset().top;
        $('body,html').animate({scrollTop: destination }, 1200);
        return false;
    });

    $(document).ready(function () {
        $('#list > li').click(function () {
            $(this).toggleClass('active');
            $(this).children("ul").slideToggle();
        });
        $('ul').click(function (event) {
            event.stopPropagation();
        });
    });

    $(document).ready(function(){
        $('#inputImage').change(function(e){
            var reader = new FileReader();
            reader.onload = function(e){
                $('#showImage').attr('src',e.target.result);
            }
            reader.readAsDataURL(e.target.files['0']);
        });
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
    });

});