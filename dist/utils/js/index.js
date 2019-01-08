(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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