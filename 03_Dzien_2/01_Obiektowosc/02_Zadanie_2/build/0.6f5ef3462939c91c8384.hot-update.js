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
    this.type = "ORDINARY";
  }
  _createClass(Duck, [{
    key: "sound",
    value: function sound() {
      console.log("".concat(this.type, " Quack quack"));
    }
  }, {
    key: "swim",
    value: function swim() {
      console.log("".concat(this.type, " I'm swimming..."));
    }
  }, {
    key: "print",
    value: function print() {
      console.log("Looks like duck is ".concat(this.type, " "));
    }
  }]);
  return Duck;
}();
var donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();
var WildDuck = /*#__PURE__*/function (_Duck) {
  _inherits(WildDuck, _Duck);
  var _super = _createSuper(WildDuck);
  function WildDuck() {
    _classCallCheck(this, WildDuck);
    return _super.apply(this, arguments);
  }
  _createClass(WildDuck, [{
    key: "print",
    value: function print() {
      this.type = 'Wild';
    }
  }]);
  return WildDuck;
}(Duck);
var daffyDuck = new WildDuck();
daffyDuck.print();
daffyDuck.sound();
daffyDuck.swim();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe8fe2d1a664e7fd3ffc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZjVlZjM0NjI5MzljOTFjODM4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxJQUFJO0VBQ1QsU0FBQUEsS0FBQSxFQUFjO0lBQUFDLGVBQUEsT0FBQUQsSUFBQTtJQUNiLElBQUksQ0FBQ0UsSUFBSSxHQUFHLFVBQVU7RUFDdkI7RUFBQ0MsWUFBQSxDQUFBSCxJQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFDLE1BQUEsRUFBUTtNQUNQQyxPQUFPLENBQUNDLEdBQUcsSUFBQUMsTUFBQSxDQUFJLElBQUksQ0FBQ1AsSUFBSSxpQkFBYyxDQUFDO0lBQ3hDO0VBQUM7SUFBQUUsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQUssS0FBQSxFQUFPO01BQ05ILE9BQU8sQ0FBQ0MsR0FBRyxJQUFBQyxNQUFBLENBQUksSUFBSSxDQUFDUCxJQUFJLHFCQUFrQixDQUFDO0lBQzVDO0VBQUM7SUFBQUUsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQU0sTUFBQSxFQUFRO01BQ1BKLE9BQU8sQ0FBQ0MsR0FBRyx1QkFBQUMsTUFBQSxDQUF1QixJQUFJLENBQUNQLElBQUksTUFBRyxDQUFDO0lBQ2hEO0VBQUM7RUFBQSxPQUFBRixJQUFBO0FBQUE7QUFHRixJQUFNWSxVQUFVLEdBQUcsSUFBSVosSUFBSSxDQUFDLENBQUM7QUFDN0JZLFVBQVUsQ0FBQ04sS0FBSyxDQUFDLENBQUM7QUFDbEJNLFVBQVUsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7QUFDakJFLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDLENBQUM7QUFBQyxJQUViRSxRQUFRLDBCQUFBQyxLQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxLQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFaLGVBQUEsT0FBQVksUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQWhCLFlBQUEsQ0FBQVUsUUFBQTtJQUFBVCxHQUFBO0lBQUFDLEtBQUEsRUFDYixTQUFBTSxNQUFBLEVBQVE7TUFDUCxJQUFJLENBQUNULElBQUksR0FBRyxNQUFNO0lBQ25CO0VBQUM7RUFBQSxPQUFBVyxRQUFBO0FBQUEsRUFIcUJiLElBQUk7QUFLM0IsSUFBTW9CLFNBQVMsR0FBRyxJQUFJUCxRQUFRLENBQUMsQ0FBQztBQUNoQ08sU0FBUyxDQUFDVCxLQUFLLENBQUMsQ0FBQztBQUNqQlMsU0FBUyxDQUFDZCxLQUFLLENBQUMsQ0FBQztBQUNqQmMsU0FBUyxDQUFDVixJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7VUM1QmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDNfRHppZW5fMi8wMV9PYmlla3Rvd29zYy8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHVjayB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnR5cGUgPSBcIk9SRElOQVJZXCI7XHJcblx0fVxyXG5cdHNvdW5kKCkge1xyXG5cdFx0Y29uc29sZS5sb2coYCR7dGhpcy50eXBlfSBRdWFjayBxdWFja2ApO1xyXG5cdH1cclxuXHRzd2ltKCkge1xyXG5cdFx0Y29uc29sZS5sb2coYCR7dGhpcy50eXBlfSBJJ20gc3dpbW1pbmcuLi5gKTtcclxuXHR9XHJcblx0cHJpbnQoKSB7XHJcblx0XHRjb25zb2xlLmxvZyhgTG9va3MgbGlrZSBkdWNrIGlzICR7dGhpcy50eXBlfSBgKTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGRvbmFsZER1Y2sgPSBuZXcgRHVjaygpO1xyXG5kb25hbGREdWNrLnNvdW5kKCk7XHJcbmRvbmFsZER1Y2suc3dpbSgpO1xyXG5kb25hbGREdWNrLnByaW50KCk7XHJcblxyXG5jbGFzcyBXaWxkRHVjayBleHRlbmRzIER1Y2sge1xyXG5cdHByaW50KCkge1xyXG5cdFx0dGhpcy50eXBlID0gJ1dpbGQnO1xyXG5cdH1cclxufVxyXG5jb25zdCBkYWZmeUR1Y2sgPSBuZXcgV2lsZER1Y2soKTtcclxuZGFmZnlEdWNrLnByaW50KCk7XHJcbmRhZmZ5RHVjay5zb3VuZCgpO1xyXG5kYWZmeUR1Y2suc3dpbSgpO1xyXG5cclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZlOGZlMmQxYTY2NGU3ZmQzZmZjXCIpIl0sIm5hbWVzIjpbIkR1Y2siLCJfY2xhc3NDYWxsQ2hlY2siLCJ0eXBlIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJzd2ltIiwicHJpbnQiLCJkb25hbGREdWNrIiwiV2lsZER1Y2siLCJfRHVjayIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiZGFmZnlEdWNrIl0sInNvdXJjZVJvb3QiOiIifQ==