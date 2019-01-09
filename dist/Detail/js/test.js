(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

$(function () {
	var magnifierConfig = {
		magnifier: "#magnifier1", //最外层的大容器
		width: 400, //承载容器宽
		height: 400, //承载容器高
		moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
		zoom: 2 //缩放比例
	};
	var _magnifier = magnifier(magnifierConfig);
});
},{}]},{},[1])