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
        $('.filter-list__btn').click(function () {
            var input = document.querySelector('.input-filter');
           console.log(input.value = $(this).text().trim()); 
            if (input.value == 'All products') {
                input.value = ''
            }
        });
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

    $(document).ready(function () {
        $('#list-filter > li').click(function () {
            $(this).toggleClass('active');
            $(this).children("ul").slideToggle();
        });
        $('.filter-product').click(function () {
            $(this).slideToggle();
        });
    });
});