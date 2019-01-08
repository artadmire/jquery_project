import  {quickSort, norepeat } from '../../utils/js/index';
// import  unslider  from "./lunbo"

$(function() {
    //轮播图
    // unslider();
    
    $(document).ready(function (e) {
        var unslider04 = $('#b04').unslider({
            dots: true
        }),
            data04 = unslider04.data('unslider');

        $('.unslider-arrow04').click(function () {
            var fn = this.className.split(' ')[1];
            data04[fn]();
        });
    });
    let arr = [3,2,3,5,5,4,6,75,3,3,24,3] 
    norepeat(arr);
    console.log(arr);
    //tab切换
    $('.pro-liste .list').eq(0).show().siblings().hide();
    $('.pro-sort div').on('click', function() {
            var _index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $('.pro-list .list').eq(_index).show().siblings().hide();
        })
        
    $('.modle-content>div').eq(0).show().siblings().hide();
    $('.modle-title ul li').on('click', function() {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.modle-content>div').eq(_index).show().siblings().hide();
    })
})