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

        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 100) {
                $('.wrap-main-nav ').addClass('pin');
            } else {
                $('.wrap-main-nav ').removeClass('pin');
            }
        });
    }

    //resizeSite
    function resizeSite() {

    }
    //onCLick
    function onCLick() {

        $('.form-search input[name="keyword"]').on('keyup', (e) => {
            let query = $(e.currentTarget).val();
            if (query.length) {
                $(e.currentTarget).parents('.form-search').addClass('active');
                return;
            } else {
                $(e.currentTarget).parents('.form-search').removeClass('active');
                return;
            }
        });
        $('.form-search .btn_reset').click(function () {
            $('.form-search').removeClass("active");
        });

        $(".tab-default a").click(function (event) {
            $(".tab-default a").removeClass("active")
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-content >div").not(tab).css("display", "none");
            $(tab).fadeIn();
        });


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
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function () {});
        });

        $('.sub-icon2').click(function () {
            if ($(this).next('ul').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('ul').slideToggle("slow", function () {});
        });
        $('.onclick-search').click(function () {
            $(this).next('.on-open').slideToggle("slow", function () {});
        });
        $('.select-control-label').click(function () {
            $(this).next('.select-filter-dropbox').slideToggle("slow", function () {});
        });

        //Open menu
        $('.search-wrap').click(function () {
            $('body').addClass("open-filter");
            $('html').css("overflow", "hidden");
        });
        $('.close-menu').click(function () {
            $('body').removeClass("open-filter");
            $('html').css("overflow", "visible");
        });

    }
    //scrollBar
    function slideSwiper() {
        var swiper_banner = new Swiper('.section-banner-home .swiper-container', {
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        var swiperaddress_s1 = new Swiper('.address-slide1 .swiper-container', {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 5000,
            },

        });
        var swipertaglist = new Swiper(".tag-list .swiper-container", {
            slidesPerView: "auto",
            spaceBetween: 11,
        });

        // Slide dự án
        var swiperduan = new Swiper('#slide-duan', {
            spaceBetween: 30,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-slide-duan-next',
                prevEl: '.swiper-slide-duan-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                }
            }
        });
        // Slide tieu điểm
        var swipertieudiem = new Swiper('#slide-tieudiem', {
            spaceBetween: 30,
            slidesPerView: 3,
            navigation: {
                nextEl: '.swiper-tieudiem-next',
                prevEl: '.swiper-tieudiem-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                }
            }
        });
        // Slide slide-baochi
        var swipersbaochi = new Swiper('#slide-baochi', {
            spaceBetween: 30,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper-baochi-next',
                prevEl: '.swiper-baochi-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                }
            }
        });
        // Slide doanh nghiệp
        var swiperdoanhnghiep = new Swiper('#slide-doanhnghiep', {
            spaceBetween: 20,
            slidesPerView: 6,
            navigation: {
                nextEl: '.swiper-doanhnghiep-next',
                prevEl: '.swiper-doanhnghiep-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                }
            }
        });
        // Slide dự án
        var swiperduan1 = new Swiper('#slide-duan1', {
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-duan1-next',
                prevEl: '.swiper-duan1-prev',
            }
        });
        // Slide BDS khu vực
        var swiperKhuvuc = new Swiper('#slide-bds-khuvuc', {
            spaceBetween: 20,
            slidesPerView: 3.4,
            navigation: {
                nextEl: '.swiper-slide-khuvuc-next',
                prevEl: '.swiper-slide-khuvuc-prev',
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                }
            }
        });

    }

    //scrollBar
    function scrollBar() {
        // });
        var scrollContainer = $(".scrollbar-inner");
        if (scrollContainer.length > 0) {
            scrollContainer.scrollbar();
        }
    }

    $(function () {
        backToTop();
        onCLick();
        slideSwiper();
        cssVars({});
        scrollBar({});
        $('.js-example-basic-single').select2();
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(window).on('load resize', function () {
        resizeSite()
    });
})(jQuery);