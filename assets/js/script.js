(function ($) {

    'use strict';

    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

    if ($(".testimonial-slider-active .swiper-container").length > 0) {
        let SProductActive1 = new Swiper('.testimonial-slider-active .swiper-container', {
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            spaceBetween: 30,

            autoplay: {
                delay: 3000,
            },

            navigation: {
                nextEl: '.t-button-next',
                prevEl: '.t-button-prev',
            },

            a11y: false
        })
    }


})(jQuery);
