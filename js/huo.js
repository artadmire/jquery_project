$(function() {
    //tab切换

    $('.pro-list .list').eq(0).show().siblings().hide();
    $('.pro-sort div').on('click', function() {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.pro-list .list').eq(_index).show().siblings().hide();
    })

    //tab切换
    $('.modle-content>div').eq(0).show().siblings().hide();
    $('.modle-title ul li').on('click', function() {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.modle-content>div').eq(_index).show().siblings().hide();
    })

    //放大镜
    $('.minimg').mousemove(function(e) {
        $('.maximg').show()
        $('.fd').show()
        var x = e.pageX - $('.minimg').offset().left - $('.fd').width() / 2
        var y = e.pageY - $('.minimg').offset().top - $('.fd').height() / 2
        var maxX = $('.minimg').width() - $('.fd').width()
        var maxY = $('.minimg').height() - $('.fd').height()
        if (x <= 0) {
            x = 0;
        } else if (x >= maxX) {
            x = maxX;
        }
        if (y <= 0) {
            y = 0;
        } else if (y >= maxY) {
            y = maxY;
        }
        $('.fd').css({
            left: x,
            top: y
        })
        var yidongX = x / maxX
        var yidongY = y / maxY
        $('.maximg>img').css({
            left: -yidongX * ($('.maximg>img').width() - $('.maximg').width()),
            top: -yidongY * ($('.maximg>img').height() - $('.maximg').height())
        })
    }).mouseout(function() {
        $('.maximg').hide()
        $('.fd').hide()
    })

    $('.imgdetails img').each(function(i, item) {
            $(this).mouseover(function() {
                $(this).parent().addClass('active').parent().siblings().children("a").removeClass('active')
                $('.minimg img').attr('src', './img/img/主图' + (i + 1) + '.jpg')
                $('.maximg img').attr('src', './img/img/主图' + (i + 1) + '.jpg')
            })
        })
        //下面是原生写法
        // var detailimgs = document.querySelectorAll('.imgdetails img');
        // var smallimg = document.querySelector('.minimg img');
        // var bigimg = document.querySelector(".maximg img")
        // for (let i = 0; i < detailimgs.length; i++) {
        //     detailimgs[i].onmouseover = function() {

    //         smallimg.src = './img/img/主图' + (i + 1) + '.jpg';
    //         bigimg.src = './img/img/主图' + (i + 1) + '.jpg';
    //     }
    // }

    //轮播图
})