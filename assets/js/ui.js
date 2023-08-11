document.addEventListener('DOMContentLoaded', () => {
    // 검색 토글
    $('.btn_search > a').on('click', function() {
        let searchWrap = $('.search_wrap');
        searchWrap.slideToggle().toggleClass('on');
        if(searchWrap.hasClass('on') == true) {
            $('.dim').addClass('on');
            $('body').addClass('scrollfix');
        } else {
            $('.dim').removeClass('on');
            $('body').removeClass('scrollfix');
        }
    })

    $('.btn_closeSearch').on('click', function() {
        $('.search_wrap').slideUp();
        $('.dim').removeClass('on');
        $('body').removeClass('scrollfix');
    })

    $('.inp_search').on("focus", function() {
        $(this).addClass("focus")
    })

    $('.inp_search').on("blur", function() {
        if($(this).val()=="")
        $(this).removeClass("focus");
    })

    $(".btn_top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 400);
        return false;
    })

    // gnb(pc)
    var gnbList = $('.gnb.pc > ul > li')

    gnbList.hover(function () {
        gnbList.not($(this)).find('a').addClass('on');
        $(this).find('.lnb').addClass('on');
        $('.dim').addClass('on');
        $('.search_wrap').slideUp().removeClass('on');
        $('body').removeClass('scrollfix')
    }, function () {
        gnbList.not($(this)).find('a').removeClass('on');
        var lnb = $('.lnb');
        $(this).find(lnb).removeClass('on');
        if (lnb.hasClass('on')) {
            $('.dim').addClass('on');
        } else {
            $('.dim').removeClass('on');
        }
    })

    // gnb(mo)
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", '${vh}px');

    window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", '${vh}px');
    })

    // const documentHeight = () => {
    //     const doc = document.documentElement
    //     doc.style.setProperty('--doc-height', '${window.innerHeight}px')
    // }

    // window.addEventListener('resize', documentHeight)
    // documentHeight();

    $('.gnb_toggle').on('click', function() {
        console.log("모바일 gnb 오픈");
        $(this).siblings('.gnb').addClass('on');
        $('body').addClass('scrollfix');
    })

    $('.btn_gnbClose').on('click', function() {
        $(this).parents('.gnb.mo').removeClass('on');
        $('body').removeClass('scrollfix');
    })

    const moGnb = new Swiper('.js-depth1', {
        slidesPerView: 'auto',
        spaceBetween: 15,
    })

    $('.mo-depth2 li a').on('click', function() {
        $(this).siblings('.mo-depth3').slideToggle();
    })

    // Weekly Ranking
    for (let i = 0; i < $('.tab_btn').length; i++) {
        tabOpen(i);
    }

    function tabOpen(e) {
        $('.tab_btn').eq(e).click(function () {
            let tabCont = $('.tab_cont');
            let tabBtn = $('.tab_btn');
            tabCont.removeClass('on');
            tabBtn.removeClass('on');
            tabCont.eq(e).addClass('on');
            tabBtn.eq(e).addClass('on');
        })
    }

    const rankingList = new Swiper('.js-rankingList', {
        loop: true,
        loopAdditionalSlides: 1,
        centeredSlides: true,
        pagination: {
            el: '.rk_pagination',
            clickable: true,
        },
    })

    // 배너 슬라이드
    $('.js-main_lb .swiper-slide').hover(function () {
        let textWrap = $(this).children('.text_wrap');
        textWrap.toggleClass('on');
        if (textWrap.hasClass('on') == true) {
            textWrap.siblings('img').addClass('on');
        } else {
            textWrap.siblings('img').removeClass('on');
        }
    })

    // 상품 찜 
    let gd_favItem = document.querySelectorAll('.gd_favItem');
    gd_favItem.forEach(function (favItem) {
        favItem.addEventListener('click', (e) => {
            favItem.classList.toggle('on');
            console.log(e.target)
        })
    })

    // 상품 리스트
    // Filter Accordion
    $('.filter_tit').on('click', function() {
        $(this).toggleClass('on').siblings('.filter_con').slideToggle();
    })

    // Selected Align
    const menuList = new Swiper('.js-menu_list', {
        slidesPerView: 'auto',
    })

    // Selected Filter
    const filterApply = new Swiper('.js-filter_apply', {
        slidesPerView: 'auto',
    })

    // Filter on/off
    $('.switch').on('click', function() {
        let inpSwitch = $('.inp_swtich');
        let filter = $('.filter');
        let goodsList = $('.goodsList');
        if(inpSwitch.is(':checked') == true) {
            filter.addClass('active');
            goodsList.addClass('active');
        } else {
            filter.removeClass('active');
            goodsList.removeClass('active');
            sticky.removeClass('transNo');
        }
    })

    // Filter on/off(mo)
    if($(window).width() < 768) {
        $('.inp_swtich').on('click', function() {
            $('body').addClass('scrollfix');
        })
    }
    $('.btn_filterClose').on('click', function() {
        $(this).parents('.filter').removeClass('active');
        $('.inp_swtich').prop("checked", false);
        $('body').removeClass('scrollfix');
    })

    // 상품 상세
    // 상품 슬라이드
    const prdThumb = new Swiper('.js-prdThumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
    })
    const prdSlide = new Swiper('.js-prdSlide', {
        slidesPerView: 'auto',
        thumbs: {
            swiper: prdThumb,
        },
        effect: 'fade',
        autoplay: {
            delay: 5000,
        }
    });

    // 장바구니 팝업 추천 상품 슬라이드
    const recomPrd = new Swiper('.js-recomPrd', {
        slidesPerView: 4,
        spaceBetween: 10,
    })

    // 장바구니 리스트 마크업 변경
    window.onload = function() {
        let winWidth = $(window).width();
        if(winWidth < 768) {
            $('.order_list.pc').hide();
            $('.order_list.mo').show();
        } else {
            $('.order_list.pc').show();
            $('.order_list.mo').hide();
        }
    }
    $(window).resize(function() {
        let winWidth = $(window).width();
        if(winWidth < 768) {
            $('.order_list.pc').hide();
            $('.order_list.mo').show();
        } else {
            $('.order_list.pc').show();
            $('.order_list.mo').hide();
        }
    })

    // 컬러, 사이즈 라디오 박스 체크 판별
    let colChk = $('.color input');
    let sizeChk = $('.size .opt_chk');
    colChk.on('click', function() {
        if(colChk.is(':checked')) {
            sizeChk.find('input').removeAttr('disabled');
        } 
    })

    sizeChk.on('click', function() {
        if(!colChk.is(':checked')) {
            alert("컬러를 선택해 주세요.")
        }
    })
    
    // 상품문의 아코디언
    let answerTit = $('.inquiry .rvList_left')
    answerTit.on('click', function() {
        $(this).find('.rvInfo_con').slideToggle();
        $(this).parents('.rvList_botCon').siblings('.answer_con').slideToggle();
    })

    let rvMore = $('.btn_rvMore')
    rvMore.on('click', function() {
        $(this).parents('.rvList_mid').siblings('.rvList_left').find('.rvInfo_con').toggleClass('on')
        $(this).toggleClass('on');
    })

    $('.inp_wrap').on('click','.inp + .inp_clear', function(e) {
        e.preventDefault();
        $(this).prev('.inp').val('');
        return false;
    })

    // 상품 주문
    $('.addr_list').on('click', function() {
        $('.addrList_pop').addClass('on');
        $('.dim').addClass('on z25');
        $('body').addClass('scrollfix');
    })
    
    $('.btn_pop_close').on('click', function() {
        $(this).parents('.addrList_pop').removeClass('on');
        $(this).parents('.addrList_pop').siblings('.dim').removeClass('on z25');
        $('.addr_modify').removeClass('on');
        $('.addr_add').removeClass('hidden');
        $('body').removeClass('scrollfix');
        $(this).siblings('h2').text("배송지 목록")
    })

    $('.btn_addr_add').on('click', function() {
        var addrAdd = $(this).parents('.addr_add') 
        addrAdd.addClass('hidden');
        addrAdd.siblings('.addr_modify').addClass('on');
        addrAdd.siblings('.ttl_area').find('h2').text("배송지 추가")
    })

    $('.addr_modify .btn_wrap_flex .line').on('click', function() {
        $(this).parents('.addr_modify').removeClass('on');
        $(this).parents('.addr_modify').siblings('.addr_add').removeClass('hidden');
        $(this).parents('.addr_modify').siblings('.ttl_area').find('h2').text("배송지 목록")
    })

    $('.addr_list_wrap li').on('click', function(e) {
        $('.addr_list_wrap li').removeClass('on');
        $(this).toggleClass('on');
        console.log("리스트 영역 클릭 이벤트 확인")
        e.preventDefault();
    })

    $('.btn_test').on('click', function() {
        console.log("리스트 영역 수정 버튼 클릭 이벤트 확인")
    })

    // 체크박스
    $('.all').click(function() {
        let chkAll = $(this).siblings('#all');
        if((chkAll).is(':checked')) {
            $('input[name=chk]').prop("checked", false)
        } else {
            $('input[name=chk]').prop("checked", true)
        }
    })

    $('input[name=chk]').on('click', function() {
        let chkAll = $(this).siblings('#all');
        let total = $('input[name=chk]').length;
        let checked = $('input[name=chk]:checked').length;

        if(total != checked) {
            chkAll.prop('checked', false);
        } else {
            chkAll.prop('checked', true);
        }
    })
    
    // 옵션변경
    // $('.btn_opt_chg').on('click', function() {
    //     $(this).siblings('.opt_chg').addClass('on');
    // })

    // $('.btn_close').on('click', function() {
    //     $(this).parents('.opt_chg').removeClass('on');
    // })

    // let optChg = document.querySelector(".btn_opt_chg");
    // optChg.addEventListener("click", function(e) {
    //     e.target.nextElementSibling.classList.add('on');
    // })

    let optChg = document.querySelector(".goods_btn_wrap");
    optChg.firstChild.addEventListener("click", function(e) {
        e.target.lastChild.classList.add('on');
        alert("옵션 변경")
    })

    var numberSpinner = (function() {
        $('.btn_cnt').click(function() {
            var btn = $(this),
            oldValue = btn.siblings('.number').text();
            newVal = 0;

            if ($(this).hasClass('plus')) {
                newVal = parseInt(oldValue) + 1;
            } else {
                if (oldValue > 1) {
                    newVal = parseInt(oldValue) - 1;
                } else {
                    newVal = 1
                }
            }
            btn.siblings('.number').text(newVal);
        })
    })();

    const test = new Swiper('.js-test', {
        spaceBetween: 15,
        slidesPerView: 'auto',
    })

    // 결제 이메일 select 체크
    $('select[name=mail]').on('change', function() {
        var $addr = $(this).parents('.email_sel_wrap').siblings('.emailAddr').find('input');
        if ($(this).val() == "etc") {
            $addr.val('');
            $addr.prop('readonly', false);
        } else {
            $addr.val($(this).val());
            $addr.prop('readonly', true);
        }
    })

    var numberSpinner = (function() {
        $('.js-thumbUp').click(function() {
            var btn = $(this),
            oldValue = btn.find('span').text();
            newVal = 0;
            newVal = parseInt(oldValue) + 1;
            btn.find('span').text(newVal);
        })
    })();

    // 1:1 문의 글자수 체크
    $('#textBox').keyup(function(e) {
        let content = $(this).val();

        // 글자수 체크
        if (content.length == 0 || content == '') {
            $('.cnt').text('0');
        } else {
            $('.cnt').text(content.length);
        }
        
        // 글자수 제한
        if (content.length > 500) {
            $(this).val($(this).val().substring(0, 200));
            alert('글자수는 500자까지 입력이 가능합니다.')
        }
    })

    // 이미지 프리뷰
    // const inputFile = document.querySelector("#picture_input");
    // const pictureImage = document.querySelector(".picture_image")

    // inputFile.addEventListener("change", function(e) {
    //     const inputTarget = e.target;
    //     const file = inputTarget.files[0];

    //     if(file) {
    //         const reader = new FileReader();
            
    //         reader.addEventListener("load", function(e) {
    //             const readerTarget = e.target;

    //             const img = document.createElement("img");
    //             img.src = readerTarget.result;
    //             img.classList.add("picture_img")

    //             pictureImage.innerHTML = "";
    //             pictureImage.appendChild(img);
    //         })

    //         reader.readAsDataURL(file);
    //     } 
    // })
})
