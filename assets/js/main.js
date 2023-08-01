document.addEventListener('DOMContentLoaded', () => {
    $(window).scroll(function () {
        let y = $(this).scrollTop();
        let secFirst = $('.first');
        let firstTop = secFirst.offset().top;
        let header = $('.header');
        let winWidth = $(window).width();
        // if(winWidth > 768) {
            if (y > firstTop - 98) {
                header.addClass('fixed');
                header.addClass('on');
                $('.ftBtn_wrap').fadeIn();
            } else {
                header.removeClass('fixed');
                header.removeClass('on');
                $('.ftBtn_wrap').fadeOut();
                if(!header.hasClass('on') == true) {
                    $('.search_wrap').slideUp().removeClass('on');
                }
            }
        // } else {
            if (y > firstTop - 50) {
                header.addClass('fixed');
                header.addClass('on');
                $('.ftBtn_wrap').fadeIn();
            } else {
                header.removeClass('fixed');
                header.removeClass('on');
                $('.ftBtn_wrap').fadeOut();
                if(!header.hasClass('on') == true) {
                    $('.search_wrap').slideUp().removeClass('on');
                }
            }
        // }
    })
    
    // Header
    let header = $('.header');
    header.hover(function () {
        // 모바일
        // if ($(window).width() < 768) {
        //     $(this).removeClass('on')
        //     console.log("모바일 사이즈 헤더 호버 제거")
        // } else {
        //     $(this).addClass('on');
        // }
        $(this).addClass('on');
    }, function () {
        if ($(this).hasClass('fixed')) {
            $(this).addClass('on');
            console.log(this);
        } else {
            $(this).removeClass('on')
            let searchWrap = $('.search_wrap')
            if(searchWrap.hasClass('on') == true) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        }
    })

    // $(window).scroll(function () {
    //     let height = $(this).scrollTop();
    //     let ftBtnWrap = $('.ftBtn_wrap');
    //     if (height > 10) {
    //         header.addClass('on');
    //         header.addClass('fixed');
    //         ftBtnWrap.fadeIn();
    //     } else {
    //         header.removeClass('on');
    //         header.removeClass('fixed');
    //         ftBtnWrap.fadeOut();
    //         if(!header.hasClass('on') == true) {
    //             $('.search_wrap').slideUp().removeClass('on');
    //         }
    //     }
    // })

    // Main Banner
    $(function() {
        let option = {};
        if ( $(".js-main_bn .swiper-slide").length == 1) {
            option = {
                loop: false,
                autoplay: false,
            }
            $('.js-main_bn').removeClass('swiper');
        } else {
            option = {
                loop: true,
                speed: 500,
                // autoplay: {
                //     delay: 3000
                // },
                pagination: {
                    el: '.bn_pagination',
                    clickable: true,
                    type: 'bullets',
                },
                navigation: {
                    nextEl: '.bn_btnNext',
                    prevEl: '.bn_btnPrev',
                },
                effect: "creative",
                creativeEffect: {
                    prev: {
                        translate: ["-20%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                },
            }
        }
        var a = new Swiper('.js-main_bn', option);
    })

    // Goods Slide
    const main_gd = new Swiper('.js-main_gd', {
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
        // pagination: {
        //     el: '.gd_pagination',
        //     clickable: true,
        // },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,        
            }
        }
    })

    // floating banner
    const ftPop = new Swiper('.js-ftPop > .swiper', {
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: '.ft_pagination',
            clickable: true,
        }
    })

    $('.ftPop_wrap .btn_close').on('click', function() {
        console.log("팝업 닫기")
        $(this).parents('.ftPop_wrap').hide();
    })

    // Aos.js
    AOS.init();

    const tabSilde = new Swiper('.js-tabSlide', {
        slidesPerView: 'auto',
        spaceBetween: 20,
    })
})