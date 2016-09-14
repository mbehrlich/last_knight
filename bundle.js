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

	'use strict';
	
	var _intro = __webpack_require__(7);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _level_one = __webpack_require__(1);
	
	var _level_one2 = _interopRequireDefault(_level_one);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvas = document.getElementById("canvas");
	  var draw = {};
	  draw.width = 512;
	  draw.height = 512;
	  draw.ctx = canvas.getContext("2d");
	  var intro = new _intro2.default(draw);
	  var nextLevel = function nextLevel(draw) {
	    var levelOne = new _level_one2.default(draw);
	    levelOne.start();
	  };
	  intro.start(nextLevel);
	
	  var mute = document.getElementById('mute');
	  var currentMute = false;
	  mute.addEventListener("click", function () {
	    var music = document.getElementById('firstblood');
	    var sound1 = document.getElementById('sword');
	    // let sound2 = document.getElementById('monster');
	    if (currentMute) {
	      music.muted = false;
	      sound1.muted = false;
	      // sound2.setAttribute("muted", "false");
	      currentMute = false;
	    } else {
	      music.muted = true;
	      sound1.muted = true;
	      // sound2.setAttribute("muted", "false");
	      currentMute = true;
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _player_character = __webpack_require__(2);
	
	var _player_character2 = _interopRequireDefault(_player_character);
	
	var _view = __webpack_require__(3);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _game = __webpack_require__(6);
	
	var _game2 = _interopRequireDefault(_game);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LevelOne = function () {
	  function LevelOne(draw) {
	    _classCallCheck(this, LevelOne);
	
	    this.draw = draw;
	    this.level = true;
	    this.game = new _game2.default();
	    this.player = new _player_character2.default(this.draw, this.game);
	    this.game.addPlayer(this.player);
	    this.view = new _view2.default(this.draw, this.game);
	  }
	
	  _createClass(LevelOne, [{
	    key: 'start',
	    value: function start() {
	      var _this = this;
	
	      window.setInterval(function () {
	        _this.draw.ctx.clearRect(0, 0, _this.draw.width, _this.draw.height);
	        _this.view.display(_this.player.posx, _this.player.posy);
	        _this.player.display();
	      }, 50);
	    }
	  }]);
	
	  return LevelOne;
	}();
	
	exports.default = LevelOne;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _health = __webpack_require__(9);
	
	var _health2 = _interopRequireDefault(_health);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PC = function () {
	  function PC(draw, game) {
	    var _this = this;
	
	    _classCallCheck(this, PC);
	
	    this.sound = document.getElementById('sword');
	    this.draw = draw;
	    this.game = game;
	    this.sheet = document.getElementById("player");
	    this.direction = "down";
	    this.animx = 0;
	    this.animy = 10;
	    this.key = false;
	    this.invincible = 0;
	    this.health = 3;
	    this.healthBar = new _health2.default(this.draw);
	    this.posx = 32 * 32;
	    this.posy = 32 * 32;
	    window.addEventListener('keydown', function (e) {
	      e.preventDefault();
	      if (_this.key !== 32) {
	        _this.key = e.keyCode;
	        if (_this.key === 32) {
	          _this.sound.currentTime = 0;
	          _this.sound.play();
	          if (_this.health > 0) {
	            _this.animx = 0;
	          }
	        }
	      }
	    });
	    window.addEventListener('keyup', function (e) {
	      if (_this.key === e.keyCode && _this.key !== 32) {
	        _this.key = false;
	        if (_this.health > 0) {
	          _this.animx = 0;
	        }
	      }
	    });
	  }
	
	  _createClass(PC, [{
	    key: 'checkObstacle',
	    value: function checkObstacle(x, y) {
	      for (var i = 0; i < this.game.obstacles.length; i++) {
	        if (x > this.game.obstacles[i][0] * 32 - 3 && x < this.game.obstacles[i][0] * 32 + 35 && y > this.game.obstacles[i][1] * 32 - 26 && y < this.game.obstacles[i][1] * 32 + 16) {
	          return false;
	        }
	      }
	      for (var i = 0; i < this.game.monsters.length; i++) {
	        if (x > this.game.monsters[i].posx - 16 && x < this.game.monsters[i].posx + 16 && y > this.game.monsters[i].posy - 26 && y < this.game.monsters[i].posy + 16) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: 'checkAttack',
	    value: function checkAttack() {
	      if (this.invincible > 0) {
	        this.invincible--;
	      } else {
	        for (var i = 0; i < this.game.monsters.length; i++) {
	          if (this.posx > this.game.monsters[i].posx - 21 && this.posx < this.game.monsters[i].posx + 21 && this.posy > this.game.monsters[i].posy - 31 && this.posy < this.game.monsters[i].posy + 21) {
	            this.health--;
	            if (this.health < 1) {
	              this.animx = 0;
	              this.animy = 20;
	            }
	            this.invincible = 10;
	            return;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'attack',
	    value: function attack(x, y) {
	      for (var i = 0; i < this.game.monsters.length; i++) {
	        if (x > this.game.monsters[i].posx - 42 && x < this.game.monsters[i].posx + 42 && y > this.game.monsters[i].posy - 42 && y < this.game.monsters[i].posy + 42) {
	          this.game.monsters[i].attacked();
	        }
	      }
	    }
	  }, {
	    key: 'display',
	    value: function display() {
	      var mult = 64;
	      if (this.health < 1) {
	        this.draw.ctx.drawImage(this.sheet, mult * this.animx, mult * this.animy, mult, mult, this.draw.width / 2 - mult / 2, this.draw.height / 2 - mult / 2, mult, mult);
	        if (this.animx < 5) {
	          this.animx++;
	        }
	      } else {
	        if (this.key && this.key === 37) {
	          this.animy = 9;
	          this.direction = "left";
	          if (this.checkObstacle(this.posx - 5, this.posy)) {
	            this.posx -= 5;
	          }
	        } else if (this.key && this.key === 38) {
	          this.animy = 8;
	          this.direction = "up";
	          if (this.checkObstacle(this.posx, this.posy - 5)) {
	            this.posy -= 5;
	          }
	        } else if (this.key && this.key === 39) {
	          this.animy = 11;
	          this.direction = "right";
	          if (this.checkObstacle(this.posx + 5, this.posy)) {
	            this.posx += 5;
	          }
	        } else if (this.key && this.key == 40) {
	          this.animy = 10;
	          this.direction = "down";
	          if (this.checkObstacle(this.posx, this.posy + 5)) {
	            this.posy += 5;
	          }
	        } else if (this.key && this.key == 32) {
	          if (this.direction === "up") {
	            this.animy = 21;
	            this.attack(this.posx, this.posy - 16);
	          } else if (this.direction === "left") {
	            this.animy = 24;
	            this.attack(this.posx - 16, this.posy);
	          } else if (this.direction === "down") {
	            this.animy = 27;
	            this.attack(this.posx, this.posy + 16);
	          } else if (this.direction === "right") {
	            this.animy = 30;
	            this.attack(this.posx + 16, this.posy);
	          }
	        }
	        var animation = this.animx === 0 ? 0 : (this.animx - 1) % 6 + 1;
	        this.checkAttack();
	        if (this.key === 32) {
	          this.draw.ctx.drawImage(this.sheet, mult * this.animx * 3, mult * this.animy, mult * 3, mult * 3, this.draw.width / 2 - mult * 1.5, this.draw.height / 2 - mult * 1.5, mult * 3, mult * 3);
	        } else {
	          this.draw.ctx.drawImage(this.sheet, mult * animation, mult * this.animy, mult, mult, this.draw.width / 2 - mult / 2, this.draw.height / 2 - mult / 2, mult, mult);
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
	      this.healthBar.display(this.health);
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
	
	var _tile = __webpack_require__(4);
	
	var _tile2 = _interopRequireDefault(_tile);
	
	var _object = __webpack_require__(5);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _monster = __webpack_require__(8);
	
	var _monster2 = _interopRequireDefault(_monster);
	
	var _monster_bar = __webpack_require__(10);
	
	var _monster_bar2 = _interopRequireDefault(_monster_bar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View(draw, game) {
	    _classCallCheck(this, View);
	
	    this.draw = draw;
	    this.game = game;
	    this.generate();
	  }
	
	  _createClass(View, [{
	    key: 'generate',
	    value: function generate() {
	      var _this = this;
	
	      this.tiles = [];
	      for (var i = 0; i < 64; i++) {
	        for (var j = 0; j < 64; j++) {
	          this.tiles.push(new _tile2.default(i, j, "grass", this.draw));
	        }
	      }
	      for (var i = 0; i < 64; i++) {
	        this.tiles.push(new _object2.default(i, 63, "tree-north", this.draw, this.game));
	        this.tiles.push(new _object2.default(i, 0, "tree-south", this.draw, this.game));
	        this.tiles.push(new _object2.default(i, -1, "tree-middle", this.draw, this.game));
	        // this.tiles.push(new GameObject(i, 1, `tree-trunk${i % 3}`, this.draw, this.game));
	        this.tiles.push(new _object2.default(0, i, "tree-east", this.draw, this.game));
	        this.tiles.push(new _object2.default(63, i, "tree-west", this.draw, this.game));
	      }
	
	      var _loop = function _loop() {
	        var i = Math.floor(Math.random() * 64);
	        var j = Math.floor(Math.random() * 64);
	        var open = true;
	        _this.game.obstacles.forEach(function (spot) {
	          if (spot[0] >= i - 1 && spot[0] <= i + 4 && spot[1] >= j - 1 && spot[1] <= j + 4) {
	            open = false;
	          }
	        });
	        if (32 >= i - 2 && 32 <= i + 5 && 32 >= j - 2 && 32 <= j + 5) {
	          open = false;
	        }
	        if (open) {
	          _this.placeTree(i, j);
	        }
	      };
	
	      for (var k = 0; k < 75; k++) {
	        _loop();
	      }
	
	      var _loop2 = function _loop2() {
	        var i = Math.floor(Math.random() * 64);
	        var j = Math.floor(Math.random() * 64);
	        var open = true;
	        _this.game.obstacles.forEach(function (spot) {
	          if (spot[0] >= i - 1 && spot[0] <= i + 4 && spot[1] >= j - 1 && spot[1] <= j + 4) {
	            open = false;
	          }
	        });
	        if (32 >= i - 2 && 32 <= i + 5 && 32 >= j - 2 && 32 <= j + 5) {
	          open = false;
	        }
	        if (open) {
	          _this.placeLake(i, j);
	        }
	      };
	
	      for (var k = 0; k < 25; k++) {
	        _loop2();
	      }
	
	      var _loop3 = function _loop3() {
	        var i = Math.floor(Math.random() * 64);
	        var j = Math.floor(Math.random() * 64);
	        var open = true;
	        _this.game.obstacles.forEach(function (spot) {
	          if (spot[0] >= i - 1 && spot[0] <= i + 1 && spot[1] >= j - 1 && spot[1] <= j + 1) {
	            open = false;
	          }
	        });
	        _this.game.monsters.forEach(function (monster) {
	          if (monster.posx >= i * 32 - 32 && monster.posx <= i * 32 + 32 && monster.posy >= j * 32 - 32 && monster.posy <= j * 32 + 32) {
	            open = false;
	          }
	        });
	        if (32 >= i - 7 && 32 <= i + 7 && 32 >= j - 7 && 32 <= j + 7) {
	          open = false;
	        }
	        if (open) {
	          _this.placeMonster(i, j);
	        }
	      };
	
	      for (var k = 0; k < 50; k++) {
	        _loop3();
	      }
	      this.monsterBar = new _monster_bar2.default(this.draw);
	    }
	  }, {
	    key: 'placeLake',
	    value: function placeLake(i, j) {
	      this.tiles.push(new _object2.default(i, j, "water-northwest", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 1, j, "water-north", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 2, j, "water-northeast", this.draw, this.game));
	      this.tiles.push(new _object2.default(i, j + 1, "water-west", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 1, j + 1, "water-middle", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 2, j + 1, "water-east", this.draw, this.game));
	      this.tiles.push(new _object2.default(i, j + 2, "water-southwest", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 1, j + 2, "water-south", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 2, j + 2, "water-southeast", this.draw, this.game));
	    }
	  }, {
	    key: 'placeTree',
	    value: function placeTree(i, j) {
	      this.tiles.push(new _object2.default(i, j, "tree-northwest", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 1, j, "tree-north", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 2, j, "tree-northeast", this.draw, this.game));
	      this.tiles.push(new _object2.default(i, j + 1, "tree-west", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 1, j + 1, "tree-middle", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 2, j + 1, "tree-east", this.draw, this.game));
	      this.tiles.push(new _object2.default(i, j + 2, "tree-southwest", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 1, j + 2, "tree-south", this.draw, this.game));
	      this.tiles.push(new _object2.default(i + 2, j + 2, "tree-southeast", this.draw, this.game));
	    }
	  }, {
	    key: 'placeMonster',
	    value: function placeMonster(i, j) {
	      new _monster2.default(this.draw, this.game, i, j);
	    }
	  }, {
	    key: 'display',
	    value: function display(posx, posy) {
	
	      this.draw.ctx.fillStyle = "#2E203C";
	      this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
	      this.tiles.forEach(function (tile) {
	        return tile.display(posx, posy);
	      });
	      this.game.monsters.forEach(function (monster) {
	        return monster.display();
	      });
	      this.game.dead.forEach(function (monster) {
	        return monster.display();
	      });
	      this.monsterBar.display(this.game.monsters.length);
	    }
	  }]);
	
	  return View;
	}();
	
	exports.default = View;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tile = function () {
	  function Tile(x, y, type, draw) {
	    _classCallCheck(this, Tile);
	
	    this.x = x;
	    this.y = y;
	    this.type = type;
	    this.size = 32;
	    this.draw = draw;
	    this.generate();
	  }
	
	  _createClass(Tile, [{
	    key: "generate",
	    value: function generate() {
	      if (this.type === "grass") {
	        this.grass = Math.floor(Math.random() * 10);
	        this.grass = this.grass === 0 ? 1 : 0;
	      }
	    }
	  }, {
	    key: "display",
	    value: function display(posx, posy) {
	      if (this.x * this.size > posx - 9 * this.size && this.x * this.size < posx + 8 * this.size && this.y * this.size > posy - 9 * this.size && this.y * this.size < posy + 8 * this.size) {
	        if (this.type === "grass") {
	          this.sheet = document.getElementById('forest');
	          this.draw.ctx.drawImage(this.sheet, this.grass * this.size, 1 * this.size, this.size, this.size, this.x * this.size - posx + 8 * 32, this.y * this.size - posy + 8 * 32, this.size, this.size);
	        }
	      }
	    }
	  }]);
	
	  return Tile;
	}();
	
	exports.default = Tile;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GameObject = function () {
	  function GameObject(x, y, type, draw, game) {
	    _classCallCheck(this, GameObject);
	
	    this.x = x;
	    this.y = y;
	    this.type = type;
	    this.size = 32;
	    this.draw = draw;
	    this.game = game;
	    this.sheet = document.getElementById('forest');
	    this.generate();
	    if (this.type === "water-south" || this.type === "water-southwest" || this.type === "water-southeast") {
	      // this.game.addObastacle(this.x, this.y - 0.5)
	    } else {
	      this.game.addObstacle(this.x, this.y);
	    }
	  }
	
	  _createClass(GameObject, [{
	    key: "generate",
	    value: function generate() {
	      if (this.type === "tree-north") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 3;
	        this.animy = 3;
	      } else if (this.type === "tree-south") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 3;
	        this.animy = 5;
	      } else if (this.type === "tree-east") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 4;
	        this.animy = 4;
	      } else if (this.type === "tree-west") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 2;
	        this.animy = 4;
	      } else if (this.type === "tree-northeast") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 4;
	        this.animy = 3;
	      } else if (this.type === "tree-northwest") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 2;
	        this.animy = 3;
	      } else if (this.type === "tree-southeast") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 4;
	        this.animy = 5;
	      } else if (this.type === "tree-southwest") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 2;
	        this.animy = 5;
	      } else if (this.type === "tree-middle") {
	        this.sheet = document.getElementById('forest');
	        this.animx = 3;
	        this.animy = 4;
	      } else if (this.type === "water-north") {
	        this.sheet = document.getElementById('water');
	        this.animx = 6;
	        this.animy = 3;
	      } else if (this.type === "water-northwest") {
	        this.sheet = document.getElementById('water');
	        this.animx = 5;
	        this.animy = 3;
	      } else if (this.type === "water-northeast") {
	        this.sheet = document.getElementById('water');
	        this.animx = 7;
	        this.animy = 3;
	      } else if (this.type === "water-southeast") {
	        this.sheet = document.getElementById('water');
	        this.animx = 7;
	        this.animy = 5;
	      } else if (this.type === "water-west") {
	        this.sheet = document.getElementById('water');
	        this.animx = 5;
	        this.animy = 4;
	      } else if (this.type === "water-middle") {
	        this.sheet = document.getElementById('water');
	        this.animx = 6;
	        this.animy = 4;
	      } else if (this.type === "water-east") {
	        this.sheet = document.getElementById('water');
	        this.animx = 7;
	        this.animy = 4;
	      } else if (this.type === "water-southwest") {
	        this.sheet = document.getElementById('water');
	        this.animx = 5;
	        this.animy = 5;
	      } else if (this.type === "water-south") {
	        this.sheet = document.getElementById('water');
	        this.animx = 6;
	        this.animy = 5;
	      }
	    }
	  }, {
	    key: "display",
	    value: function display(posx, posy) {
	      if (this.x * this.size > posx - 9 * this.size && this.x * this.size < posx + 8 * this.size && this.y * this.size > posy - 9 * this.size && this.y * this.size < posy + 8 * this.size) {
	        this.draw.ctx.drawImage(this.sheet, this.animx * this.size, this.animy * this.size, this.size, this.size, this.x * this.size - posx + 8 * 32, this.y * this.size - posy + 8 * 32, this.size, this.size);
	      }
	    }
	  }]);
	
	  return GameObject;
	}();
	
	exports.default = GameObject;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game() {
	    _classCallCheck(this, Game);
	
	    this.obstacles = [];
	    this.monsters = [];
	    this.dead = [];
	  }
	
	  _createClass(Game, [{
	    key: "addObstacle",
	    value: function addObstacle(x, y) {
	      this.obstacles.push([x, y]);
	    }
	  }, {
	    key: "addMonster",
	    value: function addMonster(monster) {
	      this.monsters.push(monster);
	    }
	  }, {
	    key: "addDead",
	    value: function addDead(monster) {
	      this.dead.push(monster);
	    }
	  }, {
	    key: "addPlayer",
	    value: function addPlayer(player) {
	      this.player = player;
	    }
	  }]);
	
	  return Game;
	}();
	
	exports.default = Game;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var newLevel = void 0;
	var newDraw = void 0;
	var _startLevel = void 0;
	var sound = void 0;
	
	var Intro = function () {
	  function Intro(draw) {
	    _classCallCheck(this, Intro);
	
	    this.draw = draw;
	    newDraw = draw;
	    _startLevel = this.startLevel;
	  }
	
	  _createClass(Intro, [{
	    key: "start",
	    value: function start(nextLevel) {
	      newLevel = nextLevel;
	      sound = document.getElementById('firstblood');
	      // sound.setAttribute("muted", "true");
	      sound.play();
	      this.draw.ctx.fillStyle = "black";
	      this.draw.ctx.fillRect(0, 0, this.draw.width, this.draw.height);
	      // this.draw.ctx.stroke
	      this.draw.ctx.font = "44px 'Cinzel'";
	      this.draw.ctx.fillStyle = "white";
	      this.draw.ctx.fillText("The Last Knight", 110, 60);
	      this.draw.ctx.font = "30px 'Cinzel'";
	      this.draw.ctx.fillText("of the Last Kingdom", 130, 100);
	      this.draw.ctx.fillText("Press Space", 190, 450);
	      window.addEventListener('keydown', _startLevel);
	    }
	  }, {
	    key: "startLevel",
	    value: function startLevel(e) {
	      e.preventDefault();
	      if (e.keyCode === 32) {
	        newLevel(newDraw);
	        sound.pause();
	        window.removeEventListener('keydown', _startLevel);
	      }
	    }
	  }]);
	
	  return Intro;
	}();
	
	exports.default = Intro;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Monster = function () {
	  function Monster(draw, game, posx, posy) {
	    _classCallCheck(this, Monster);
	
	    // this.sound = document.getElementById('skeldeath');
	    this.id = Math.floor(Math.random() * 1000000000);
	    this.draw = draw;
	    this.game = game;
	    this.sheet = document.getElementById("skeleton");
	    this.direction = "down";
	    this.animx = 0;
	    this.animy = 10;
	    this.posx = posx * 32;
	    this.posy = posy * 32;
	    this.dead = false;
	    this.game.addMonster(this);
	  }
	
	  _createClass(Monster, [{
	    key: "attacked",
	    value: function attacked() {
	      var _this = this;
	
	      this.dead = true;
	      var remove = void 0;
	      this.game.monsters.forEach(function (monster, idx) {
	        if (_this.id === monster.id) {
	          remove = idx;
	        }
	      });
	      this.game.monsters = this.game.monsters.slice(0, remove).concat(this.game.monsters.slice(remove + 1));
	      this.game.addDead(this);
	      this.animx = 0;
	    }
	  }, {
	    key: "checkObstacle",
	    value: function checkObstacle(x, y) {
	      for (var i = 0; i < this.game.obstacles.length; i++) {
	        if (x > this.game.obstacles[i][0] * 32 - 3 && x < this.game.obstacles[i][0] * 32 + 35 && y > this.game.obstacles[i][1] * 32 - 26 && y < this.game.obstacles[i][1] * 32 + 16) {
	          return false;
	        }
	      }
	      for (var i = 0; i < this.game.monsters.length; i++) {
	        if (this.id === this.game.monsters[i].id) {
	          // do nothing
	        } else if (x > this.game.monsters[i].posx - 16 && x < this.game.monsters[i].posx + 16 && y > this.game.monsters[i].posy - 26 && y < this.game.monsters[i].posy + 16) {
	          return false;
	        } else if (x > this.game.player.posx - 16 && x < this.game.player.posx + 16 && y > this.game.player.posy - 26 && y < this.game.player.posy + 16) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: "display",
	    value: function display() {
	      var mult = 64;
	      if (this.dead) {
	        this.animy = 20;
	        this.draw.ctx.drawImage(this.sheet, mult * this.animx, mult * this.animy, mult, mult, this.posx - 32 - this.game.player.posx + 8 * 32, this.posy - 32 - this.game.player.posy + 8 * 32, mult, mult);
	        if (this.animx < 5) {
	          this.animx++;
	        }
	      } else if (this.game.player.posx > this.posx - 9 * 32 && this.game.player.posx < this.posx + 9 * 32 && this.game.player.posy > this.posy - 9 * 32 && this.game.player.posy < this.posy + 9 * 32) {
	        if (Math.abs(this.game.player.posx - this.posx) > Math.abs(this.game.player.posy - this.posy)) {
	          if (this.game.player.posx - this.posx < 0) {
	            this.animy = 9;
	            this.direction = "left";
	            if (this.checkObstacle(this.posx - 4, this.posy)) {
	              this.posx -= 4;
	            }
	          } else {
	            this.animy = 11;
	            this.direction = "right";
	            if (this.checkObstacle(this.posx + 4, this.posy)) {
	              this.posx += 4;
	            }
	          }
	        } else {
	          if (this.game.player.posy - this.posy < 0) {
	            this.animy = 8;
	            this.direction = "up";
	            if (this.checkObstacle(this.posx, this.posy - 4)) {
	              this.posy -= 4;
	            }
	          } else {
	            this.animy = 10;
	            this.direction = "down";
	            if (this.checkObstacle(this.posx, this.posy + 4)) {
	              this.posy += 4;
	            }
	          }
	        }
	        var animation = this.animx === 0 ? 0 : (this.animx - 1) % 6 + 1;
	        this.draw.ctx.drawImage(this.sheet, mult * animation, mult * this.animy, mult, mult, this.posx - 32 - this.game.player.posx + 8 * 32, this.posy - 32 - this.game.player.posy + 8 * 32, mult, mult);
	        this.animx++;
	      }
	    }
	  }]);
	
	  return Monster;
	}();
	
	exports.default = Monster;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HealthBar = function () {
	  function HealthBar(draw) {
	    _classCallCheck(this, HealthBar);
	
	    this.draw = draw;
	  }
	
	  _createClass(HealthBar, [{
	    key: "display",
	    value: function display(health) {
	      this.draw.ctx.beginPath();
	      this.draw.ctx.fillStyle = "red";
	      if (health < 1) {
	        this.draw.ctx.fillStyle = "black";
	      }
	      this.draw.ctx.arc(30, 30, 10, 0, 2 * Math.PI);
	      this.draw.ctx.fill();
	      this.draw.ctx.beginPath();
	      this.draw.ctx.fillStyle = "red";
	      if (health < 2) {
	        this.draw.ctx.fillStyle = "black";
	      }
	      this.draw.ctx.arc(70, 30, 10, 0, 2 * Math.PI);
	      this.draw.ctx.fill();
	      this.draw.ctx.beginPath();
	      this.draw.ctx.fillStyle = "red";
	      if (health < 3) {
	        this.draw.ctx.fillStyle = "black";
	      }
	      this.draw.ctx.arc(110, 30, 10, 0, 2 * Math.PI);
	      this.draw.ctx.fill();
	    }
	  }]);
	
	  return HealthBar;
	}();
	
	exports.default = HealthBar;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MonsterBar = function () {
	  function MonsterBar(draw) {
	    _classCallCheck(this, MonsterBar);
	
	    this.draw = draw;
	  }
	
	  _createClass(MonsterBar, [{
	    key: "display",
	    value: function display(monsters) {
	      this.draw.ctx.font = "18px 'Cinzel'";
	      this.draw.ctx.fillStyle = "black";
	      this.draw.ctx.fillText(monsters + " monsters left", 250, 30);
	    }
	  }]);
	
	  return MonsterBar;
	}();
	
	exports.default = MonsterBar;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map