self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _this = this;
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
    _classCallCheck(this, FastFood);
    return _super.apply(this, arguments);
  }
  return _createClass(FastFood);
}(Food);
var FatFreeFood = /*#__PURE__*/function (_Food2) {
  _inherits(FatFreeFood, _Food2);
  var _super2 = _createSuper(FatFreeFood);
  function FatFreeFood() {
    _classCallCheck(this, FatFreeFood);
    return _super2.apply(this, arguments);
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
  console.log(_this);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("07fb710f3c859c8972bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNGNiNTI5NjQ5NTdiNTIwODQyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsRUFBRTtBQUFDLElBRVhDLElBQUksZ0JBQUFDLFlBQUEsQ0FDVCxTQUFBRCxLQUFZRSxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUU7RUFBQUMsZUFBQSxPQUFBTixJQUFBO0VBQ3RDLElBQUksQ0FBQ0UsSUFBSSxHQUFHQSxJQUFJO0VBQ2hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQ3RCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0FBQ2YsQ0FBQztBQUFBLElBR0lFLFFBQVEsMEJBQUFDLEtBQUE7RUFBQUMsU0FBQSxDQUFBRixRQUFBLEVBQUFDLEtBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosUUFBQTtFQUFBLFNBQUFBLFNBQUE7SUFBQUQsZUFBQSxPQUFBQyxRQUFBO0lBQUEsT0FBQUcsTUFBQSxDQUFBRSxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBLE9BQUFaLFlBQUEsQ0FBQU0sUUFBQTtBQUFBLEVBQVNQLElBQUk7QUFBQSxJQUlyQmMsV0FBVywwQkFBQUMsTUFBQTtFQUFBTixTQUFBLENBQUFLLFdBQUEsRUFBQUMsTUFBQTtFQUFBLElBQUFDLE9BQUEsR0FBQUwsWUFBQSxDQUFBRyxXQUFBO0VBQUEsU0FBQUEsWUFBQTtJQUFBUixlQUFBLE9BQUFRLFdBQUE7SUFBQSxPQUFBRSxPQUFBLENBQUFKLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsT0FBQVosWUFBQSxDQUFBYSxXQUFBO0FBQUEsRUFBU2QsSUFBSTtBQUk5QixJQUFNaUIsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDdkQsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDaEQsSUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDL0MsSUFBTUcsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDdkQsSUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDakQsSUFBTUssTUFBTSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDN0NDLFNBQVMsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztFQUMxQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUksQ0FBQztBQUNsQixDQUFDLENBQUM7Ozs7Ozs7O1VDNUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDNfRHppZW5fMi8wMV9PYmlla3Rvd29zYy8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vZHMgPSBbXTtcblxuY2xhc3MgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucHJvdGVpbiA9IHByb3RlaW47XG5cdFx0dGhpcy5jYXJicyA9IGNhcmJzO1xuXHRcdHRoaXMuZmF0ID0gZmF0O1xuXHR9XG59XG5cbmNsYXNzIEZhc3RGb29kIGV4dGVuZHMgRm9vZCB7XG5cbn1cblxuY2xhc3MgRmF0RnJlZUZvb2QgZXh0ZW5kcyBGb29kIHtcblxufVxuXG5jb25zdCBwcm9kdWN0c1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0cycpO1xuY29uc3QgYnV0dG9uUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuY29uc3QgbmFtZVJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBwcm90ZWluc1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm90ZWlucycpO1xuY29uc3QgY2FyYnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyYnMnKTtcbmNvbnN0IGZhdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXQnKTtcbmJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc29sZS5sb2codGhpcyk7XG59KVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwN2ZiNzEwZjNjODU5Yzg5NzJiZlwiKSJdLCJuYW1lcyI6WyJmb29kcyIsIkZvb2QiLCJfY3JlYXRlQ2xhc3MiLCJuYW1lIiwicHJvdGVpbiIsImNhcmJzIiwiZmF0IiwiX2NsYXNzQ2FsbENoZWNrIiwiRmFzdEZvb2QiLCJfRm9vZCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiRmF0RnJlZUZvb2QiLCJfRm9vZDIiLCJfc3VwZXIyIiwicHJvZHVjdHNSZWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25SZWYiLCJuYW1lUmVmIiwicHJvdGVpbnNSZWYiLCJjYXJic1JlZiIsImZhdFJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiX3RoaXMiXSwic291cmNlUm9vdCI6IiJ9