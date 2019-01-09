$(function() {
        $(window).scroll(function() {
            if ($(document.documentElement).scrollTop() > 100 || $(document.body).scrollTop() > 100) {
                console.log($(document.documentElement).scrollTop())
                $('.nav').addClass('tofixed')
                console.log($('.nav'));
            } else {
                $('.nav').removeClass('tofixed');
            }
        })


    })
    // var $sidebar = $("#slideBar");
    // var offset = $sidebar.offset();
    // $(window).scroll(function() {
    //             var scrollTop = $(window).scrollTop();
    //             if (offset.top < scrollTop) {
    //                 $sidebar.attr('style', 'position:fixed');
    //             } else {
    //                 $sidebar.attr('style', 'position:relative');
    //             }