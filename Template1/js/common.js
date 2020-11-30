(function ($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
            } else {
                $('#to_top').fadeOut();
            }
        });


        $(window).scroll(function () {
            if ($(window).scrollTop() >= 42) {
                $('#lp1_box1').addClass('pin');
            } else {
                $('#lp1_box1').removeClass('pin');
            }
        });

        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
    }

    //scrollBar
    function scrollBar() {
        var scrollContainer = $(".scrollbar-inner");
        if (scrollContainer.length > 0) {
            scrollContainer.scrollbar();
        }
    }
    //resizeSite
    function resizeSite() {
        var heightVideo = $('#player_playing').height() - 64;
        $('.detail_right .scrollbar-inner').height(heightVideo);
    }
    //onCLick
    function onCLick() {
        $(".all-menu-tablet").click(function () {
            $(this).toggleClass("close-menu-tablet");
        });
        $(".all-menu").click(function () {
            $(".overlay-bg").toggle();
            $(".main-nav").toggleClass("show-all-menu");
        });
        $(".overlay-bg").click(function () {
            $(this).hide();
            $(".all-menu").removeClass("close-menu-tablet");
            $(".main-nav").removeClass("show-all-menu");
        });
        $('.sub_menu').click(function () {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            };
            $(this).next('.level2').slideToggle("slow", function () {});
        });
        $(".dropdown").find(".dropbtn").click(function () {
            $(".dropdown").find('.dropdown-content').slideUp();
            if ($(this).next().css('display') == 'none') {
                $('.dropdown-content').slideUp();
                $(this).next().stop(true, true).slideDown();
                $('.dropdown').removeClass('active');
                $(this).parent().addClass('active');
                $(".form_suggest .input_search").focus();
            } else {
                $(this).parent().find('.dropdown-content').slideUp();
                $('.dropdown').removeClass('active');
            }
        });
    }
    //slide Gallery
    function slideGallery() {
        var galleryThumbs2 = new Swiper('.slideshow2 .slideshow2__thumbs .swiper-container', {
            spaceBetween: 8,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            speed: 500,
            navigation: {
                nextEl: '.swiper-thumbs-next',
                prevEl: '.swiper-thumbs-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 3,
                }
            }
        });
        var galleryTop2 = new Swiper('.slideshow2 .slideshow2__gallery .swiper-container', {
            speed: 700,
            thumbs: {
                swiper: galleryThumbs2,
            },
            navigation: {
                nextEl: '.swiper-gallery-next',
                prevEl: '.swiper-gallery-prev',
            },
        });
    }

    //slide Gallery
    function swiper() {
        var swiperCustomer = new Swiper('#lp1_box8 .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 32,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });
        var swiperService = new Swiper('.service-tour .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });
    }


    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        slideGallery();
        swiper();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);