$(document).ready(function() {
    $('#toggle_menu').on('click', function() {
        if ($('.menu__items').css('display') === 'none') {
            $('.menu__items').css('display', 'block');
        } else {
            $('.menu__items').css('display', 'none');
        }
    });
    $("a[href*='#']").mPageScroll2id({
        offset: 150,
        onStart: function() {
            if ($(window).width() <= '992') {
                $('.menu__items').css('display', 'none');
            }
        }
    });


    $('.card__btn').on('click', function() {
        var num = +$('.menu__num').text(),
            price = +$('.menu__price').text();
        num += 1;
        price += 250;
        $('.menu__num').text(num);
        $('.menu__price').html(price + ' <i class="fas fa-hryvnia"></i>');
        $('.popup__num').text(num);
        $('.popup__price').html(price + ' <i class="fas fa-hryvnia"></i>');
    });
    $('.menu__btn').magnificPopup()
});