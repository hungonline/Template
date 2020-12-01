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
        $('#vibeji-ham').off('click').on('click', function () {
            $(this).toggleClass('open');
            $('.topnav-mobile').toggleClass('open');
            $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });
    }

    //Hover
    function hover() {

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
        hover();
        swiper();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);