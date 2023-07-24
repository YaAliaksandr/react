self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
  console.log(this);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7db8ebbcab0270e33d7e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNjA0MWMzYTFlNTU2Mzc1ODlkNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRyxFQUFFO0FBQUMsSUFFWEMsSUFBSSxnQkFBQUMsWUFBQSxDQUNULFNBQUFELEtBQVlFLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtFQUFBQyxlQUFBLE9BQUFOLElBQUE7RUFDdEMsSUFBSSxDQUFDRSxJQUFJLEdBQUdBLElBQUk7RUFDaEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDbEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7QUFDZixDQUFDO0FBQUEsSUFHSUUsUUFBUSwwQkFBQUMsS0FBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsS0FBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQ2IsU0FBQUEsU0FBQSxFQUFjO0lBQUEsSUFBQUssS0FBQTtJQUFBTixlQUFBLE9BQUFDLFFBQUE7SUFDYkssS0FBQSxHQUFBRixNQUFBLENBQUFHLElBQUE7SUFDQUQsS0FBQSxDQUFLVixJQUFJLEdBQUcsVUFBVTtJQUFDLE9BQUFVLEtBQUE7RUFDeEI7RUFBQyxPQUFBWCxZQUFBLENBQUFNLFFBQUE7QUFBQSxFQUpxQlAsSUFBSTtBQUFBLElBUXJCYyxXQUFXLDBCQUFBQyxNQUFBO0VBQUFOLFNBQUEsQ0FBQUssV0FBQSxFQUFBQyxNQUFBO0VBQUEsSUFBQUMsT0FBQSxHQUFBTCxZQUFBLENBQUFHLFdBQUE7RUFDaEIsU0FBQUEsWUFBQSxFQUFjO0lBQUEsSUFBQUcsTUFBQTtJQUFBWCxlQUFBLE9BQUFRLFdBQUE7SUFDYkcsTUFBQSxHQUFBRCxPQUFBLENBQUFILElBQUE7SUFDQUksTUFBQSxDQUFLZixJQUFJLEdBQUcsYUFBYTtJQUFDLE9BQUFlLE1BQUE7RUFDM0I7RUFBQyxPQUFBaEIsWUFBQSxDQUFBYSxXQUFBO0FBQUEsRUFKd0JkLElBQUk7QUFPOUIsSUFBTWtCLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3ZELElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQ2hELElBQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQy9DLElBQU1HLFdBQVcsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ3ZELElBQU1JLFFBQVEsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQ2pELElBQU1LLE1BQU0sR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQzdDQyxTQUFTLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDaERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztBQUNsQixDQUFDLENBQUM7Ozs7Ozs7O1VDbkNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDNfRHppZW5fMi8wMV9PYmlla3Rvd29zYy8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vZHMgPSBbXTtcblxuY2xhc3MgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucHJvdGVpbiA9IHByb3RlaW47XG5cdFx0dGhpcy5jYXJicyA9IGNhcmJzO1xuXHRcdHRoaXMuZmF0ID0gZmF0O1xuXHR9XG59XG5cbmNsYXNzIEZhc3RGb29kIGV4dGVuZHMgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gXCJGYXN0Rm9vZFwiO1xuXHR9XG5cbn1cblxuY2xhc3MgRmF0RnJlZUZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBcIkZhdEZyZWVGb29kXCI7XG5cdH1cbn1cblxuY29uc3QgcHJvZHVjdHNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdHMnKTtcbmNvbnN0IGJ1dHRvblJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbmNvbnN0IG5hbWVSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgcHJvdGVpbnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGVpbnMnKTtcbmNvbnN0IGNhcmJzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmJzJyk7XG5jb25zdCBmYXRSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF0Jyk7XG5idXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnNvbGUubG9nKHRoaXMpXG59KVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZGI4ZWJiY2FiMDI3MGUzM2Q3ZVwiKSJdLCJuYW1lcyI6WyJmb29kcyIsIkZvb2QiLCJfY3JlYXRlQ2xhc3MiLCJuYW1lIiwicHJvdGVpbiIsImNhcmJzIiwiZmF0IiwiX2NsYXNzQ2FsbENoZWNrIiwiRmFzdEZvb2QiLCJfRm9vZCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiY2FsbCIsIkZhdEZyZWVGb29kIiwiX0Zvb2QyIiwiX3N1cGVyMiIsIl90aGlzMiIsInByb2R1Y3RzUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uUmVmIiwibmFtZVJlZiIsInByb3RlaW5zUmVmIiwiY2FyYnNSZWYiLCJmYXRSZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=