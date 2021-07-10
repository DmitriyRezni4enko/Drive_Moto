$(function () {
    $(".banner-section__slider").slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/arrow-right.svg" alt=""></button>',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }]
    });

    $('.tab').on('click', function (e) {

        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest(".tabs-wrapper").siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
        $(".product-slider").slick('setPosition');
    });

    $('.product-item__favorit').on('click', function () {
        $(this).toggleClass('product-item__favorit--active')

    });



    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product__slider-btn product__slider-btnprev"><img src="img/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product__slider-btn product__slider-btnnext"><img src="img/arrow-right-black.svg" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [{
            breakpoint: 1260,
            settings: {
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1160,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 904,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 604,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },

        ]
    });
    $('.filter-style').styler();
    $('.filter__item-drop').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200')
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        normalFill: "#C4C4C4",
        spacing: "7px",
    });

    $(".menu__btn").on("click", function () {
        $(this).toggleClass('menu-btn--active');
    });

    $(".menu__btn").on("click", function () {
        $(".menu-mobile__list").toggleClass('menu-mobile__list--active');
    });

    $(".footer__topdrop").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("footer__topdrop--active");
    });

    $(".aside__btn").on("click", function () {
        $(this).next().slideToggle();
    });

});


