//自行加入的JS請寫在這裡
//字型大中小
$(function() {
    $('.custom a.small').click(function() {
        $('.main').removeClass('middleword').removeClass('bigword').addClass('smallword')
    });
    $('.custom a.middle').click(function() {
        $('.main').removeClass('smallword').removeClass('bigword').addClass('middleword')
    });
    $('.custom a.big').click(function() {
        $('.main').removeClass('smallword').removeClass('middleword').addClass('bigword')
    })
})
//熱門文章
$(function() {
    $("#b_news").click(function() {
        $("#b_cont").stop().fadeToggle(); //加.stop()才不會一直切換
        return false;
    });
});
//社群連結
$(function() {
    $('.community_links ul ul').css('display', 'none');
    var _menu = $('.community_links');
    _menu.find('li').has('ul').addClass('hasChild');
    var _liHasChild = _menu.find('li.hasChild');
    _liHasChild.hover(function() { $(this).children().stop().fadeIn(200); }, function() { $(this).children('ul').stop().fadeOut(200); });
    _liHasChild.keyup(function() {
        $(this).children().fadeIn(200);
        $(this).siblings().focus(function() { $(this).fadeOut(200); });
    });
    _menu.find('li').keyup(function() { $(this).siblings().children('ul').fadeOut(200); });
    _menu.find('li:last>a').focusout(function() { _menu.find('li ul').fadeOut(200); });
})
//快捷列
// $(function() {
//     $(".fastlink").css({ left: -50 });
//     $("#fast").click(
//         function() {
//             $(".fastlink").css({ left: 0 })
//             $(".fastlink_btn").css('display', 'none')
//             $(".fastlink_btn2").css('display', 'block')
//         }
//     )
//     $("#fast2").click(
//         function() {
//             $(".fastlink").css({ left: -50 })
//             $(".fastlink_btn").css('display', 'block')
//             $(".fastlink_btn2").css('display', 'none')
//         }
//     )
// })
//快捷列2滑動連結
$(function() {
    $('.group01').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block02').offset().top - 50 }, 1200, 'easeOutExpo');
    });
    $('.group02').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block03').offset().top - 50 }, 1200, 'easeOutExpo');
    });
    $('.group03').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block04').offset().top - 40 }, 1200, 'easeOutExpo');
    });
    $('.group04').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block05').offset().top - 40 }, 1200, 'easeOutExpo');
    });
    $('.group05').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block06').offset().top - 40 }, 1200, 'easeOutExpo');
    });
    $('.group06').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block07').offset().top - 40 }, 1200, 'easeOutExpo');
    });
    $('.group07').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block08').offset().top - 40 }, 1200, 'easeOutExpo');
    });
    $('.group08').click(function() {
        $('body,html').stop(true, true).animate({ scrollTop: $('.block09').offset().top - 40 }, 1200, 'easeOutExpo');
    });
})
//Accordion
$(function() {
    $('.accordionblock ul').css('display', 'none');
    $('.accordionblock .topic').click(function() {
        $(this).next('.answer').children('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().siblings().children('.topic').removeClass('turnicon');
        $(this).toggleClass('turnicon');
        //無障礙調整
        if ($(this).hasClass('turnicon')) {
            $(this).parent().siblings().children('.topic').each(function(i, e) {
                if ($(this).hasClass('unaccordion')) {} else {
                    $(this).attr('aria-expanded', 'false');
                }
            });
            $(this).attr('aria-expanded', 'true');
        } else {
            $(this).attr('aria-expanded', 'false');
        }
        //
    })
    $('.accordionblock.open ul').css('display', 'block');
    $('.accordionblock.open').children('.topic').addClass('turnicon');
    ////無障礙調整
    $('.accordionblock .topic').keypress(function(event) {
        var code = event.keyCode || event.which;
        if (code == 32 || code == 13) {
            $(this).click();
        }
    });
    $('.accordionblock .topic').each(function(i, e) {
        if ($(this).hasClass('unaccordion')) {} else {
            if ($(this).hasClass('turnicon')) {
                $(this).attr('aria-expanded', 'true');
            } else {
                $(this).attr('aria-expanded', 'false');
            }
        }
    });
    //
})
//Accordionqa
$(function() {
    $('.accordionblock .A').css('display', 'none');
    $('.accordionblock .Q').click(function() {
        $(this).next('.A').slideToggle();
        $(this).parent().siblings().children('.A').slideUp();
        $(this).parent().siblings().children('.Q').removeClass('turnicon');
        $(this).toggleClass('turnicon')
    })
})
//slick
$(function() {
    //大banner輪播
    $('.bigbanner').slick({
        dots: true,
        arrow: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    //
    // $('.adSlider').slick({
    //     dots: false,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     arrows: true,
    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 4,
    //             infinite: true,
    //             dots: false,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 991,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 380,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }]
    // });
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }, {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]
    });
    //業務專區
    $('.business').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //勞動統計
    $('.statistics').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //服務專區
    $('.service').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
    //cp2
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        dots: false, //要不要顯示圓點
    });
    //cp_photo
    $('.cp_photo').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true, //自動播放
        cssEase: 'linear'
    });
    $('.importantlink2').slick({
        dots: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    // arrows: true,  
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    // arrows: true, 
                }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
//內頁查詢
$(function() {
    $('.searchbtn').click(function() {
        $('.searchin').stop().slideToggle();
        $("#mustSameAsId").focus()
    })
    $('.keywordHot').find('li:last-child>a:last-child').focusout(function() {
        $('.searchin').hide();
    });
})
// 點外面關閉
$(function() {
    $(document).on('touchend click', function(e) {
        var container = $(".header .searchbtn");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.header .searchin').slideUp();
        }
    });
})
//我要發問
$(function() {
    $('.question .button').click(function() {
        $('.question .block').stop().slideToggle();
    })
    $('.question .del').click(function() {
        $('.question .block').stop().slideUp();
    })
})
//生育福利站
$(function() {
    $('map area').click(function() {
        var _this = $(this);
        $("#mp-" + _this.data("contentid") + " a").click();
        var tabContentHeight = $(".tabSet").find('.active').next('.tabContent').innerHeight();
        $(".tabSet").height(tabContentHeight);
        $('body,html').stop(true, true).animate({ scrollTop: $('#' + _this.data("anchorid")).offset().top - 50 }, 1200, 'easeOutExpo');
    })
})
//$(function(){
//   $('#data01').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23438').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data02').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23437').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data03').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23436').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data04').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23435').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data05').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23442').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data06').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23440').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data07').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23446').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data08').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23449').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data09').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23448').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data10').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23447').offset().top - 50 }, 1200, 'easeOutExpo');
//    });
//   $('#data11').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23445').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data12').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23444').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data13').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23441').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//   $('#data14').click(function() {
//        $('body,html').stop(true, true).animate({ scrollTop: $('#23449').offset().top - 50 }, 1200, 'easeOutExpo');
//    }); 
//})
// 影片燈箱區
$(function() {
    $('.moviebox .close').click(function() {
        $('.movie_lightbox').fadeOut()
    })
    $('.movie_lightbox').click(function() {
        $('.movie_lightbox').fadeOut()
    })
    $('.movie_lightbox .movie').find('a:last').focusout(function(event) {
        $('.movie_lightbox').fadeOut();
    });
    var movieStatus = false; // 假的判斷式，先設定沒有開啟
    if (movieStatus = true) {
        $('body').keydown(function(e) {
            if (e.keyCode == 27) {
                $('.movie_lightbox').fadeOut();
            }
        });
    }
})
$(function() {
    $('a.goCenter').keydown(function(e) {
        if (e.which == 13) {
            $('#aC').focus(); /*#aC 是中間定位點的id*/
        }
    });
})
//
rwdTable();

function rwdTable() {
    $('.table_list').find('table').each(function() {
        var $row = $(this).find('tr');
        rowCount = $row.length;
        for (var n = 1; n <= rowCount; n++) {
            $(this).find('th').each(function(index) {
                var thText = $(this).text();
                $row.eq(n).find('td').eq(index).attr('data-title', thText);
            });
        }
    });
}
//重要連結4
$(function() {
    $('.importantlink4 .image2').addClass('open');
    $('.importantlink4 .title a').click(function() {
        $(this).parent().siblings('.image').toggleClass('open');
        $('.image2').removeClass('open');
    })
    $('.importantlink4 .title2 a').click(function() {
        $(this).parent().siblings('.image2').toggleClass('open');
        $('.image').removeClass('open');
    })
})
$(function() {
    var item = $('.music'),
        music = new Audio('images/car-honk-1.mp3');
    item.hover(function() {
        music.play();
    }, function() {
        music.stop();
    });
})