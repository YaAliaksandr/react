self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _this3 = this;
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var foods = [];
var Food = /*#__PURE__*/_createClass(function Food(name, protein, carbs, fat) {
  _classCallCheck(this, Food);
  this.name = name;
  this.protein = protein;
  this.carbs = carbs;
  this.fat = fat;
});
var FastFood = /*#__PURE__*/function (_Food) {
  _inherits(FastFood, _Food);
  var _super = _createSuper(FastFood);
  function FastFood() {
    var _this;
    _classCallCheck(this, FastFood);
    _this = _super.call(this);
    _this.name = "FastFood";
    return _this;
  }
  return _createClass(FastFood);
}(Food);
var FatFreeFood = /*#__PURE__*/function (_Food2) {
  _inherits(FatFreeFood, _Food2);
  var _super2 = _createSuper(FatFreeFood);
  function FatFreeFood() {
    var _this2;
    _classCallCheck(this, FatFreeFood);
    _this2 = _super2.call(this);
    _this2.name = "FatFreeFood";
    return _this2;
  }
  return _createClass(FatFreeFood);
}(Food);
var productsRef = document.querySelector('#products');
var buttonRef = document.querySelector('.btn');
var nameRef = document.querySelector('#name');
var proteinsRef = document.querySelector('#proteins');
var carbsRef = document.querySelector('#carbs');
var fatRef = document.querySelector('#fat');
buttonRef.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(_this3);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0dd0733d590281d23ccf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wN2ZiNzEwZjNjODU5Yzg5NzJiZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsRUFBRTtBQUFDLElBRVhDLElBQUksZ0JBQUFDLFlBQUEsQ0FDVCxTQUFBRCxLQUFZRSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUU7RUFBQUMsZUFBQSxPQUFBTixJQUFBO0VBQ3RDLElBQUksQ0FBQ0UsSUFBSSxHQUFHQSxJQUFJO0VBQ2hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQ3RCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0FBQ2YsQ0FBQztBQUFBLElBR0lFLFFBQVEsMEJBQUFDLEtBQUE7RUFBQUMsU0FBQSxDQUFBRixRQUFBLEVBQUFDLEtBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosUUFBQTtFQUNiLFNBQUFBLFNBQUEsRUFBYztJQUFBLElBQUFLLEtBQUE7SUFBQU4sZUFBQSxPQUFBQyxRQUFBO0lBQ2JLLEtBQUEsR0FBQUYsTUFBQSxDQUFBRyxJQUFBO0lBQ0FELEtBQUEsQ0FBS1YsSUFBSSxHQUFHLFVBQVU7SUFBQyxPQUFBVSxLQUFBO0VBQ3hCO0VBQUMsT0FBQVgsWUFBQSxDQUFBTSxRQUFBO0FBQUEsRUFKcUJQLElBQUk7QUFBQSxJQVFyQmMsV0FBVywwQkFBQUMsTUFBQTtFQUFBTixTQUFBLENBQUFLLFdBQUEsRUFBQUMsTUFBQTtFQUFBLElBQUFDLE9BQUEsR0FBQUwsWUFBQSxDQUFBRyxXQUFBO0VBQ2hCLFNBQUFBLFlBQUEsRUFBYztJQUFBLElBQUFHLE1BQUE7SUFBQVgsZUFBQSxPQUFBUSxXQUFBO0lBQ2JHLE1BQUEsR0FBQUQsT0FBQSxDQUFBSCxJQUFBO0lBQ0FJLE1BQUEsQ0FBS2YsSUFBSSxHQUFHLGFBQWE7SUFBQyxPQUFBZSxNQUFBO0VBQzNCO0VBQUMsT0FBQWhCLFlBQUEsQ0FBQWEsV0FBQTtBQUFBLEVBSndCZCxJQUFJO0FBTzlCLElBQU1rQixXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN2RCxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUNoRCxJQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUMvQyxJQUFNRyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztBQUN2RCxJQUFNSSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztBQUNqRCxJQUFNSyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztBQUM3Q0MsU0FBUyxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0VBQzFDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsTUFBSSxDQUFDO0FBQ2xCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wM19Eemllbl8yLzAxX09iaWVrdG93b3NjLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb29kcyA9IFtdO1xuXG5jbGFzcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wcm90ZWluID0gcHJvdGVpbjtcblx0XHR0aGlzLmNhcmJzID0gY2FyYnM7XG5cdFx0dGhpcy5mYXQgPSBmYXQ7XG5cdH1cbn1cblxuY2xhc3MgRmFzdEZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBcIkZhc3RGb29kXCI7XG5cdH1cblxufVxuXG5jbGFzcyBGYXRGcmVlRm9vZCBleHRlbmRzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IFwiRmF0RnJlZUZvb2RcIjtcblx0fVxufVxuXG5jb25zdCBwcm9kdWN0c1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0cycpO1xuY29uc3QgYnV0dG9uUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuY29uc3QgbmFtZVJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBwcm90ZWluc1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm90ZWlucycpO1xuY29uc3QgY2FyYnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyYnMnKTtcbmNvbnN0IGZhdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXQnKTtcbmJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc29sZS5sb2codGhpcyk7XG59KVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZGQwNzMzZDU5MDI4MWQyM2NjZlwiKSJdLCJuYW1lcyI6WyJmb29kcyIsIkZvb2QiLCJfY3JlYXRlQ2xhc3MiLCJuYW1lIiwicHJvdGVpbiIsImNhcmJzIiwiZmF0IiwiX2NsYXNzQ2FsbENoZWNrIiwiRmFzdEZvb2QiLCJfRm9vZCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiY2FsbCIsIkZhdEZyZWVGb29kIiwiX0Zvb2QyIiwiX3N1cGVyMiIsIl90aGlzMiIsInByb2R1Y3RzUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uUmVmIiwibmFtZVJlZiIsInByb3RlaW5zUmVmIiwiY2FyYnNSZWYiLCJmYXRSZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIl90aGlzMyJdLCJzb3VyY2VSb290IjoiIn0=