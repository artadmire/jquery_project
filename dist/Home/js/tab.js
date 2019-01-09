(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index2 = require('../../utils/js/index');

// import  unslider  from "./lunbo"

$(function () {
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
    var arr = [3, 2, 3, 5, 5, 4, 6, 75, 3, 3, 24, 3];
    (0, _index2.norepeat)(arr);
    console.log(arr);
    //tab切换
    $('.pro-liste .list').eq(0).show().siblings().hide();
    $('.pro-sort div').on('click', function () {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.pro-list .list').eq(_index).show().siblings().hide();
    });

    $('.modle-content>div').eq(0).show().siblings().hide();
    $('.modle-title ul li').on('click', function () {
        var _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.modle-content>div').eq(_index).show().siblings().hide();
    });
});
},{"../../utils/js/index":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quickSort = quickSort;
exports.norepeat = norepeat;
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; //如果数组只有一个数，就直接返回；
  }
  var num = Math.floor(arr.length / 2); //找到中间数的索引值，如果是浮点数，则向下取整
  var numValue = arr.splice(num, 1); //找到中间数的值
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < numValue) {
      left.push(arr[i]); //基准点的左边的数传到左边数组
    } else {
      right.push(arr[i]); //基准点的右边的数传到右边数组
    }
  }
  return quickSort(left).concat([numValue], quickSort(right)); //递归不断重复比较
}
// alert(quickSort([32,45,37,16,2,87]));//弹出“2,16,32,37,45,87”

//数组去重
function norepeat(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    //内层循环要 把i 后面所有的数都找出，跟 arr【i】对比
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //如果出现相等，删掉
        //在循环遍历数组，如果删除了一个元素，要记得让 index--，否则会漏掉一个元素
        arr.splice(j, 1);
        j--;
      }
    }
  }
}


},{}]},{},[1])