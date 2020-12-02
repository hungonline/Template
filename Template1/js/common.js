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
                $('.tp1-topnav').addClass('sticky');
            } else {
                $('#to_top').fadeOut();
                $('.tp1-topnav').removeClass('sticky');
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

        $('.topnav-mobile-accordion').find('.title').click(function(){
            $('.topnav-mobile-accordion').find('.title').removeClass("active");
            if(!$(this).hasClass("active")){
              $(this).addClass("active");
            }
            else{
              $(this).removeClass("active");
            }       
          }); 

    }

    //Hover
    function hover() {

    }

    //slide Gallery
    function swiper() {
        var swipertp1box3 = new Swiper('#tp1-box3-slide', {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-box3-next',
                prevEl: '.swiper-box3-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                }
            }
        });

        var swipertp1box5 = new Swiper('#tp1-box5-slide', {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-box5-next',
                prevEl: '.swiper-box5-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 2,
                }
            }
        });

        var swipertp1box6 = new Swiper('#tp1-box6-slide', {
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-box6-next',
                prevEl: '.swiper-box6-prev',
            },
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