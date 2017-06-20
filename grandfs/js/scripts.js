var slideTime = 800;
var slidePause = 5000;
$(".promo-category-form").scroll(function () {
    var scrolled = $(this).scrollTop();
    var fullHeight = $(".promo-category-form ul").height() - $(".promo-category-form").height();
    if (scrolled > 0) {
        $(".cat-gradient-top").show();
    }
    if (scrolled <= 0) {
        $(".cat-gradient-top").hide();
    }
    if (scrolled >= fullHeight) {
        $(".cat-gradient-bottom").hide();
    }
    if (scrolled < fullHeight) {
        $(".cat-gradient-bottom").show();
    }
});
var hwSlideSpeed = 1000;
var hwTimeOut = 3000;
var hwNeedLinks = true;
$(document).ready(function (e) {
    $('.slide').css({"position": "absolute", "top": '0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function (arrow) {
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if (arrow == "next") {
            if (slideNum == (slideCount - 1)) {
                slideNum = 0;
            } else {
                slideNum++
            }
        } else if (arrow == "prev") {
            if (slideNum == 0) {
                slideNum = slideCount - 1;
            } else {
                slideNum -= 1
            }
        } else {
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control.active").removeClass("active");
        $('.control').eq(slideNum).addClass('active');
    }
    if (hwNeedLinks) {
        var $linkArrow = $('<a id="prevbutton" href="#"></a><a id="nextbutton" href="#"></a>').prependTo('#slider');
        $('#nextbutton').click(function (e) {
            e.preventDefault();
            animSlide("next");
        })
        $('#prevbutton').click(function (e) {
            e.preventDefault();
            animSlide("prev");
        })
    }
    var $adderSpan = '';
    $('.slide').each(function (index) {
        $adderSpan += '<div class = "control"><span>' + index + '</span></div>';
    });
    $('<div class ="slider-controls">' + $adderSpan + '</div>').appendTo('#slider-wrap');
    $(".control:first").addClass("active");
    $('.control').click(function () {
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });
    var pause = false;
    var rotator = function () {
        if (!pause) {
            slideTime = setTimeout(function () {
                animSlide('next')
            }, hwTimeOut);
        }
    }
    $('#slider-wrap').hover(function () {
        clearTimeout(slideTime);
        pause = true;
    }, function () {
        pause = false;
        rotator();
    });
    rotator();
    $('#periscope_theme_send').click(function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: base + 'ajax/periscope',
            data: {theme: $('#periscope_theme').val()},
            success: function (data) {
                alert(data);
            }
        });
    });
});
$(document).on('click', ".carousel-catalogue .carousel-button-right", function () {
    var carusel = $(this).parents('.carousel-catalogue');
    right_carusel(carusel);
    return false;
});
$(document).on('click', ".carousel-catalogue .carousel-button-left", function () {
    var carusel = $(this).parents('.carousel-catalogue');
    left_carusel(carusel);
    return false;
});
$(document).on('click', ".carousel-salons .carousel-button-right", function () {
    var carusel = $(this).parents('.carousel-salons');
    right_carusel(carusel);
    return false;
});
$(document).on('click', ".carousel-salons .carousel-button-left", function () {
    var carusel = $(this).parents('.carousel-salons');
    left_carusel(carusel);
    return false;
});
function left_carusel(carusel) {
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
    $(carusel).find(".carousel-items").css({"left": "-" + block_width + "px"});
    $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();
    $(carusel).find(".carousel-items").animate({left: "0px"}, 200);
}
function right_carusel(carusel) {
    var block_width = $(carusel).find('.carousel-block').outerWidth();
    $(carusel).find(".carousel-items").animate({left: "-" + block_width + "px"}, 200, function () {
        $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
        $(carusel).find(".carousel-items .carousel-block").eq(0).remove();
        $(carusel).find(".carousel-items").css({"left": "0px"});
    });
}
$(document).on('mouseenter', '.carousel', function () {
    $(this).addClass('hover')
})
$(document).on('mouseleave', '.carousel', function () {
    $(this).removeClass('hover')
})
$(function () {
    var win_w = $(document).width();
    if (win_w < 1026 && win_w > 865) {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 306,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 306,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 306,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 306,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 306,
                slideMargin: 20
            });
        }
        // new carousel tovar
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 306,
                slideMargin: 20
            });
        }






        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    }
    if (win_w < 850 && win_w > 772) {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 355,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 355,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 355,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 355,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 355,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 355,
                slideMargin: 20
            });
        }
        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    }
    if (win_w < 771 && win_w > 738) {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 340,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 340,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 340,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 340,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 340,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 340,
                slideMargin: 20
            });
        }
        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    }
    if (win_w < 737 && win_w > 680) {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 323,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 323,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 323,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 323,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 323,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 323,
                slideMargin: 20
            });
        }
        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    }
    if (win_w < 679 && win_w > 650) {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 290,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 290,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 290,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 290,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 290,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 2,
                slideWidth: 290,
                slideMargin: 20
            });
        }
        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    }
    if (win_w < 644) {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 20
            });
        }
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 20
            });
        }
        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    } else {
        if ($("#promo-tab-content1 .carousel-items").length > 0) {
            $('#promo-tab-content1 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content1 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content1 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 5,
                slideWidth: 278,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content2 .carousel-items").length > 0) {
            $('#promo-tab-content2 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content2 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content2 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 5,
                slideWidth: 278,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content3 .carousel-items").length > 0) {
            $('#promo-tab-content3 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content3 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content3 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 5,
                slideWidth: 278,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content4 .carousel-items").length > 0) {
            $('#promo-tab-content4 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content4 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content4 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 7,
                slideWidth: 152,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content7 .carousel-items").length > 0) {
            $('#promo-tab-content7 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content7 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content7 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 7,
                slideWidth: 178,
                slideMargin: 10
            });
        }
        if ($("#promo-tab-content8 .carousel-items").length > 0) {
            $('#promo-tab-content8 .carousel-items').bxSlider({
                pager: true,
                nextSelector: "#promo-tab-content8 .b-next",
                nextText: " ",
                prevSelector: "#promo-tab-content8 .b-prev",
                prevText: " ",
                minSlides: 1,
                maxSlides: 7,
                slideWidth: 178,
                slideMargin: 10
            });
        }
        if ($("#slider-wrap2 #slider2").length > 0) {
            $('#slider-wrap2 #slider2').bxSlider({
                pager: true,
                auto: true,
                autoStart: true,
                speed: slideTime,
                pause: slidePause,
                nextSelector: "#slider-wrap2 .b-next",
                nextText: " ",
                prevSelector: "#slider-wrap2 .b-prev",
                prevText: " ",
                adaptiveHeight: true,
                minSlides: 1,
                maxSlides: 1,
            });
        }
    }
    $("header .show-menu a").on("click", function () {
        $("header .main-menu.mobile-menu ul, header .hide-menu").fadeIn();
        $("header .show-menu").fadeOut(0);
        return false
    });
    $("header .hide-menu a").on("click", function () {
        $("header .main-menu.mobile-menu ul, header .hide-menu").fadeOut(0);
        $("header .show-menu").fadeIn();
        return false
    });
    $(".footer-menu .show-menu a").on("click", function () {
        $(".footer-menu.main-menu.mobile-menu ul, .footer-menu .hide-menu").fadeIn();
        $(".footer-menu .show-menu").fadeOut(0);
        return false
    });
    $(".footer-menu .hide-menu a").on("click", function () {
        $(".footer-menu.main-menu.mobile-menu ul, .footer-menu .hide-menu").fadeOut(0);
        $(".footer-menu .show-menu").fadeIn();
        return false
    });
    $("input[type=checkbox]:not(.notUniForm)").uniform();
    if ($('select').length) {
        $('.select select').ikSelect({autoWidth: false, dynamicWidth: true, ddFullWidth: false});
    }
    if (win_w < 640) {
        $(".lnk-filter .lnk1").on("click", function () {
            $(".filter").slideUp();
            $("body").addClass("body-filter-hidden");
            $('.lnk3').hide();
            return false
        });
        $(".lnk-filter .lnk2").on("click", function () {
            $(".filter").slideDown();
            $("body").removeClass("body-filter-hidden");
            $('.lnk3').show();
            return false
        });
    } else {
        $(".lnk-filter .lnk1").on("click", function () {
            $(".filter").animate({"margin-left": "-101%"}, 1100);
            $('.lnk3').hide();
            $("body").addClass("body-filter-hidden");
            return false
        });
        $(".lnk-filter .lnk2").on("click", function () {
            $(".filter").animate({"margin-left": "0%"}, 600);
            $("body").removeClass("body-filter-hidden");
            $('.lnk3').show();
            return false
        });
    }
    $(".lnk-filter2 .lnk1").on("click", function () {
        $(".filter2").slideUp();
        $("body").addClass("body-filter-hidden");
        return false
    });
    $(".lnk-filter2 .lnk2").on("click", function () {
        $(".filter2").slideDown();
        $("body").removeClass("body-filter-hidden");
        return false
    });
    $(".rental-content .title").on("click", function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
        return false
    });
    $('ul.tabs-salon').delegate('li:not(.active)', 'click', function () {
        $(this).addClass('active').siblings().removeClass('active').parents('div.b-tabs-salon').find('div.box-salon').eq($(this).index()).addClass("visible").siblings('div.box-salon').removeClass("visible");
    })
    $('.b-scroll-pane').jScrollPane({showArrows: false});
    $(window).load(function () {
        $(".b-contact-salons .box-salon").fadeOut(0);
    });
});
$(window).load(function () {
    $(".fa-img").fancybox({fitToView: false, autoSize: true, closeClick: false,});
    $('#slider2_1').bxSlider({
        auto: true,
        autoStart: true,
        pause: 5000,
        nextSelector: "#slider-wrap2.second_slider .b-next",
        nextText: " ",
        prevSelector: "#slider-wrap2.second_slider .b-prev",
        prevText: " ",
    });
});