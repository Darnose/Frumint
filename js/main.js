$(function () {
    $('.burger').click (function () {
        $('.burger__btn').toggleClass('cross');
        $('.menu-collapse').toggleClass('drive').css('order', '1' );
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

    $(document).ready(function () {
        $('.product-list__wrapper').hover(function () {
            $(this).children(".hint-button").toggleClass('pull');
        });
    });

    // $(document).ready(function() {
    //     $(".slider").each(function () { // обрабатываем каждый слайдер
    //      var obj = $(this);
    //      $(obj).append("<div class='nav'></div>");
    //      $(obj).find("li").each(function () {
    //       $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
    //       $(this).addClass("slider"+$(this).index());
    //      });
    //      $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
    //     });
    //    });
    //    function sliderJS (obj, sl) { // slider function
    //     var ul = $(sl).find("ul"); // находим блок
    //     var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    //     var step = $(bl).height(); // ширина объекта
    //     $(ul).animate({marginTop: "-"+step*obj}, 500); // 500 это скорость перемотки
    //    }
    //    $(document).on("click", ".slider .nav span", function() { // slider click navigate
    //     var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    //     $(sl).find("span").removeClass("on"); // убираем активный элемент
    //     $(this).addClass("on"); // делаем активным текущий
    //     var obj = $(this).attr("rel"); // узнаем его номер
    //     sliderJS(obj, sl); // слайдим
    //     return false;
    //    });

});