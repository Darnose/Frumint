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

    $('.slider__item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      waitForAnimate: false,
      asNavFor: '.slider__dots'
    });
    $('.slider__dots').slick({
      slidesToShow: 5,
      asNavFor: '.slider__item',
      dots: false,
      waitForAnimate: false,
      focusOnSelect: true,
      vertical: true
    });

    $(document).ready(function() {
        var list = $(".review-list__item");
        var numToShow = 6; 
        var button = $(".review-list__more");
        var numInList = list.length;
        list.hide();
        if (numInList > numToShow) {
          button.show();
        }
        list.slice(0, numToShow).show();
        button.click(function() {
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numToShow).fadeIn(600);
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
        });
      });

      $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true
        });
      });
});