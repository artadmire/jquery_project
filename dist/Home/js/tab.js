'use strict';

$(function () {
    //tab切换

    $('.pro-list .list').eq(0).show().siblings().hide();
    $('.pro-sort div').on('click', function () {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.pro-list .list').eq(_index).show().siblings().hide();
    });
    //     //轮播图
    // setInterval(function() {
    //     $('.silder').animate({
    //         left: "-=1200px"
    //     })
    // }, 2000)
    $('.modle-content>div').eq(0).show().siblings().hide();
    $('.modle-title ul li').on('click', function () {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.modle-content>div').eq(_index).show().siblings().hide();
    });
});