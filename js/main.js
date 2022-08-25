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

    $(document).ready(function() { 
        $("#table-sort").tablesorter();
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

    $(function() {
        $('.pagination').pagination({
            items: 100,
            itemsOnPage: 9,
            cssStyle: 'light-theme'
        });
    });

});