/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _level_one = __webpack_require__(3);
	
	var _level_one2 = _interopRequireDefault(_level_one);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvas = document.getElementById("canvas");
	  var draw = {};
	  draw.width = 600;
	  draw.height = 600;
	  draw.ctx = canvas.getContext("2d");
	  var levelOne = new _level_one2.default(draw);
	  levelOne.start();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View(draw) {
	    _classCallCheck(this, View);
	
	    this.draw = draw;
	  }
	
	  _createClass(View, [{
	    key: "display",
	    value: function display() {
	      this.draw.ctx.fillStyle = "white";
	      this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PC = function () {
	  function PC(draw) {
	    var _this = this;
	
	    _classCallCheck(this, PC);
	
	    this.draw = draw;
	    this.sheet = document.getElementById("player");
	    this.direction = "down";
	    this.animx = 0;
	    this.animy = 10;
	    this.key = false;
	    window.addEventListener('keydown', function (e) {
	      if (_this.key !== 32) {
	        _this.key = e.keyCode;
	        if (_this.key === 32) {
	          _this.animx = 0;
	        }
	      }
	    });
	    window.addEventListener('keyup', function (e) {
	      if (_this.key === e.keyCode && _this.key !== 32) {
	        _this.key = false;
	        _this.animx = 0;
	      }
	    });
	  }
	
	  _createClass(PC, [{
	    key: "display",
	    value: function display() {
	      var mult = 64;
	      if (this.key && this.key === 37) {
	        this.animy = 9;
	        this.direction = "left";
	      } else if (this.key && this.key === 38) {
	        this.animy = 8;
	        this.direction = "up";
	      } else if (this.key && this.key === 39) {
	        this.animy = 11;
	        this.direction = "right";
	      } else if (this.key && this.key == 40) {
	        this.animy = 10;
	        this.direction = "down";
	      } else if (this.key && this.key == 32) {
	        this.animy = 21;
	        if (this.direction === "left") {
	          this.animy = 24;
	        } else if (this.direction === "down") {
	          this.animy = 27;
	        } else if (this.direction === "right") {
	          this.animy = 30;
	        }
	      }
	      var animation = this.animx === 0 ? 0 : (this.animx - 1) % 6 + 1;
	      if (this.key === 32) {
	        this.draw.ctx.drawImage(this.sheet, mult * this.animx * 3, mult * this.animy, mult * 3, mult * 3, 300 - mult, 300 - mult, mult * 3, mult * 3);
	      } else {
	        this.draw.ctx.drawImage(this.sheet, mult * animation, mult * this.animy, mult, mult, 300, 300, mult, mult);
	      }
	      if (this.key === 32 && this.animx === 5) {
	        this.key = false;
	        this.animx = 0;
	        if (this.direction === "left") {
	          this.animy = 9;
	        } else if (this.direction === "up") {
	          this.animy = 8;
	        } else if (this.direction === "right") {
	          this.animy = 11;
	        } else if (this.direction === "down") {
	          this.animy = 10;
	        }
	      } else if (this.key) {
	        this.animx++;
	      }
	    }
	  }]);
	
	  return PC;
	}();
	
	exports.default = PC;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _player_character = __webpack_require__(2);
	
	var _player_character2 = _interopRequireDefault(_player_character);
	
	var _view = __webpack_require__(1);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LevelOne = function () {
	  function LevelOne(draw) {
	    _classCallCheck(this, LevelOne);
	
	    this.draw = draw;
	    this.player = new _player_character2.default(this.draw);
	    this.level = true;
	    this.view = new _view2.default(this.draw);
	  }
	
	  _createClass(LevelOne, [{
	    key: 'start',
	    value: function start() {
	      var _this = this;
	
	      window.setInterval(function () {
	        _this.draw.ctx.clearRect(0, 0, _this.draw.width, _this.draw.height);
	        _this.view.display();
	        _this.player.display();
	      }, 50);
	    }
	  }]);
	
	  return LevelOne;
	}();
	
	exports.default = LevelOne;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map