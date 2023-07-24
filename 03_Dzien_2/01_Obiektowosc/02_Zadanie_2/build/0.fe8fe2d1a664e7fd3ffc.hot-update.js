self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (() => {

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Duck = /*#__PURE__*/function () {
  function Duck() {
    _classCallCheck(this, Duck);
    this.type = "ordinary duck";
  }
  _createClass(Duck, [{
    key: "sound",
    value: function sound() {
      console.log("Quack quack");
    }
  }, {
    key: "swim",
    value: function swim() {
      console.log("I'm swimming...");
    }
  }, {
    key: "print",
    value: function print() {
      console.log("Looks like ".concat(this.type));
    }
  }, {
    key: "fly",
    value: function fly() {
      console.log("I'm flying...");
    }
  }]);
  return Duck;
}();
var WildDuck = /*#__PURE__*/function (_Duck) {
  _inherits(WildDuck, _Duck);
  var _super = _createSuper(WildDuck);
  function WildDuck() {
    var _this;
    _classCallCheck(this, WildDuck);
    _this = _super.call(this);
    _this.type = "wild";
    return _this;
  }
  return _createClass(WildDuck);
}(Duck);
var MallardDuck = /*#__PURE__*/function (_Duck2) {
  _inherits(MallardDuck, _Duck2);
  var _super2 = _createSuper(MallardDuck);
  function MallardDuck() {
    var _this2;
    _classCallCheck(this, MallardDuck);
    _this2 = _super2.call(this);
    _this2.type = "mallard";
    return _this2;
  }
  return _createClass(MallardDuck);
}(Duck);
var RubberDuck = /*#__PURE__*/function (_Duck3) {
  _inherits(RubberDuck, _Duck3);
  var _super3 = _createSuper(RubberDuck);
  function RubberDuck() {
    var _this3;
    _classCallCheck(this, RubberDuck);
    _this3 = _super3.call(this);
    _this3.type = "rubber";
    return _this3;
  }
  _createClass(RubberDuck, [{
    key: "fly",
    value: function fly() {
      console.log("Rubber ducks can't fly!");
    }
  }]);
  return RubberDuck;
}(Duck);
var donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();
donaldDuck.fly();
var daffyDuck = new WildDuck();
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();
daffyDuck.fly();
var daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();
daisyDuck.fly();
var howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.print();
howardTheDuck.fly();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a1459259bc8d22d1745f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFNaUIsU0FBUyxHQUFHLElBQUloQixRQUFRLENBQUMsQ0FBQztBQUNoQ2dCLFNBQVMsQ0FBQ3ZCLEtBQUssQ0FBQyxDQUFDO0FBQ2pCdUIsU0FBUyxDQUFDcEIsSUFBSSxDQUFDLENBQUM7QUFDaEJvQixTQUFTLENBQUNuQixLQUFLLENBQUMsQ0FBQztBQUNqQm1CLFNBQVMsQ0FBQ2pCLEdBQUcsQ0FBQyxDQUFDO0FBRWYsSUFBTWtCLFNBQVMsR0FBRyxJQUFJVixXQUFXLENBQUMsQ0FBQztBQUNuQ1UsU0FBUyxDQUFDeEIsS0FBSyxDQUFDLENBQUM7QUFDakJ3QixTQUFTLENBQUNyQixJQUFJLENBQUMsQ0FBQztBQUNoQnFCLFNBQVMsQ0FBQ3BCLEtBQUssQ0FBQyxDQUFDO0FBQ2pCb0IsU0FBUyxDQUFDbEIsR0FBRyxDQUFDLENBQUM7QUFFZixJQUFNbUIsYUFBYSxHQUFHLElBQUlQLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDTyxhQUFhLENBQUN6QixLQUFLLENBQUMsQ0FBQztBQUNyQnlCLGFBQWEsQ0FBQ3RCLElBQUksQ0FBQyxDQUFDO0FBQ3BCc0IsYUFBYSxDQUFDckIsS0FBSyxDQUFDLENBQUM7QUFDckJxQixhQUFhLENBQUNuQixHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7VUNyRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDNfRHppZW5fMi8wMV9PYmlla3Rvd29zYy8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHVjayB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnR5cGUgPSBcIm9yZGluYXJ5IGR1Y2tcIjtcclxuXHR9XHJcblxyXG5cdHNvdW5kKCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJRdWFjayBxdWFja1wiKTtcclxuXHR9XHJcblxyXG5cdHN3aW0oKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkknbSBzd2ltbWluZy4uLlwiKTtcclxuXHR9XHJcblxyXG5cdHByaW50KCkge1xyXG5cdFx0Y29uc29sZS5sb2coYExvb2tzIGxpa2UgJHt0aGlzLnR5cGV9YCk7XHJcblx0fVxyXG5cclxuXHRmbHkoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIkknbSBmbHlpbmcuLi5cIik7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBXaWxkRHVjayBleHRlbmRzIER1Y2sge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudHlwZSA9IFwid2lsZFwiO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgTWFsbGFyZER1Y2sgZXh0ZW5kcyBEdWNrIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBcIm1hbGxhcmRcIjtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFJ1YmJlckR1Y2sgZXh0ZW5kcyBEdWNrIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBcInJ1YmJlclwiO1xyXG5cdH1cclxuXHJcblx0Zmx5KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJSdWJiZXIgZHVja3MgY2FuJ3QgZmx5IVwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRvbmFsZER1Y2sgPSBuZXcgRHVjaygpO1xyXG5kb25hbGREdWNrLnNvdW5kKCk7XHJcbmRvbmFsZER1Y2suc3dpbSgpO1xyXG5kb25hbGREdWNrLnByaW50KCk7XHJcbmRvbmFsZER1Y2suZmx5KCk7XHJcblxyXG5jb25zdCBkYWZmeUR1Y2sgPSBuZXcgV2lsZER1Y2soKTtcclxuZGFmZnlEdWNrLnNvdW5kKCk7XHJcbmRhZmZ5RHVjay5zd2ltKCk7XHJcbmRhZmZ5RHVjay5wcmludCgpO1xyXG5kYWZmeUR1Y2suZmx5KCk7XHJcblxyXG5jb25zdCBkYWlzeUR1Y2sgPSBuZXcgTWFsbGFyZER1Y2soKTtcclxuZGFpc3lEdWNrLnNvdW5kKCk7XHJcbmRhaXN5RHVjay5zd2ltKCk7XHJcbmRhaXN5RHVjay5wcmludCgpO1xyXG5kYWlzeUR1Y2suZmx5KCk7XHJcblxyXG5jb25zdCBob3dhcmRUaGVEdWNrID0gbmV3IFJ1YmJlckR1Y2soKTtcclxuaG93YXJkVGhlRHVjay5zb3VuZCgpO1xyXG5ob3dhcmRUaGVEdWNrLnN3aW0oKTtcclxuaG93YXJkVGhlRHVjay5wcmludCgpO1xyXG5ob3dhcmRUaGVEdWNrLmZseSgpO1xyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExNDU5MjU5YmM4ZDIyZDE3NDVmXCIpIl0sIm5hbWVzIjpbIkR1Y2siLCJfY2xhc3NDYWxsQ2hlY2siLCJ0eXBlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJzd2ltIiwicHJpbnQiLCJjb25jYXQiLCJmbHkiLCJXaWxkRHVjayIsIl9EdWNrIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwiTWFsbGFyZER1Y2siLCJfRHVjazIiLCJfc3VwZXIyIiwiX3RoaXMyIiwiUnViYmVyRHVjayIsIl9EdWNrMyIsIl9zdXBlcjMiLCJfdGhpczMiLCJkb25hbGREdWNrIiwiZGFmZnlEdWNrIiwiZGFpc3lEdWNrIiwiaG93YXJkVGhlRHVjayJdLCJzb3VyY2VSb290IjoiIn0=