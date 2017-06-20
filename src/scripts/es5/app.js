(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _module = require('./module');

var HELLO_WORLD = new _module.DeveloperGreetings('Hello ES6!');

HELLO_WORLD.shoutOut();

},{"./module":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeveloperGreetings = function () {
	function DeveloperGreetings(msg) {
		_classCallCheck(this, DeveloperGreetings);

		this.message = msg;
	}

	_createClass(DeveloperGreetings, [{
		key: "shoutOut",
		value: function shoutOut() {
			console.log(this.message);
		}
	}]);

	return DeveloperGreetings;
}();

exports.DeveloperGreetings = DeveloperGreetings;

},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXHNjcmlwdHNcXGVzNlxcYXBwLmluaXQuanMiLCJzcmNcXHNjcmlwdHNcXGVzNlxcbW9kdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFFQSxJQUFNLGNBQWMsK0JBQXVCLFlBQXZCLENBQXBCOztBQUVBLFlBQVksUUFBWjs7Ozs7Ozs7Ozs7OztJQ0pNLGtCO0FBQ0wsNkJBQVksR0FBWixFQUFpQjtBQUFBOztBQUNoQixPQUFLLE9BQUwsR0FBZSxHQUFmO0FBQ0E7Ozs7NkJBRVc7QUFDWCxXQUFRLEdBQVIsQ0FBWSxLQUFLLE9BQWpCO0FBQ0E7Ozs7OztRQUdPLGtCLEdBQUEsa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRGV2ZWxvcGVyR3JlZXRpbmdzIH0gZnJvbSAnLi9tb2R1bGUnO1xyXG5cclxuY29uc3QgSEVMTE9fV09STEQgPSBuZXcgRGV2ZWxvcGVyR3JlZXRpbmdzKCdIZWxsbyBFUzYhJyk7XHJcblxyXG5IRUxMT19XT1JMRC5zaG91dE91dCgpOyIsImNsYXNzIERldmVsb3BlckdyZWV0aW5ncyB7XHJcblx0Y29uc3RydWN0b3IobXNnKSB7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBtc2c7XHJcblx0fVxyXG5cclxuXHRzaG91dE91dCAoKSB7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHsgRGV2ZWxvcGVyR3JlZXRpbmdzIH07Il19
