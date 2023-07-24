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
  function FastFood(name, protein, carbs, fat) {
    var _this;
    _classCallCheck(this, FastFood);
    _this = _super.call(this, name, protein, carbs, fat);
    _this.summ = 0;
    return _this;
  }
  _createClass(FastFood, [{
    key: "getSummKcal",
    value: function getSummKcal() {
      this.sum = this.protein * 4 + this.carbs * 4 + this.fat * 9;
      return this.sum;
    }
  }]);
  return FastFood;
}(Food);
var FatFreeFood = /*#__PURE__*/function (_Food2) {
  _inherits(FatFreeFood, _Food2);
  var _super2 = _createSuper(FatFreeFood);
  function FatFreeFood(name, protein, carbs, fat) {
    var _this2;
    _classCallCheck(this, FatFreeFood);
    _this2 = _super2.call(this, name, protein, carbs, fat);
    _this2.summ = 0;
    return _this2;
  }
  _createClass(FatFreeFood, [{
    key: "getSummKcal",
    value: function getSummKcal() {
      this.sum = this.protein * 4 + this.carbs * 4 + this.fat * 9;
      return this.sum;
    }
  }]);
  return FatFreeFood;
}(Food);
var productsRef = document.querySelector('#products');
var buttonRef = document.querySelector('.btn');
var nameRef = document.querySelector('#name');
var proteinsRef = document.querySelector('#proteins');
var carbsRef = document.querySelector('#carbs');
var fatRef = document.querySelector('#fat');
var contextCreator = function contextCreator(obj) {
  var myLi = document.createElement('li');
  myLi.textContent = "".concat(obj.name, " consist of : protein - ").concat(obj.protein, ", carbs - ").concat(obj.carbs, " , fat - ").concat(obj.fat, " . Kcal = ").concat(obj.getSummKcal());
  productsRef.appendChild(myLi);
};
var recept = function recept(e) {
  e.preventDefault();
  console.log(this);
  var name = nameRef.value;
  var protein = parseFloat(proteinsRef.value);
  var fat = parseFloat(fatRef.value);
  var carbs = parseFloat(carbsRef.value);
  console.log("name ==== ".concat(name));
  var sumKcal;
  var prodClass;
  if (!isNaN(protein) && !isNaN(fat) && !isNaN(carbs)) {
    console.log;
    sumKcal = protein * 4 + fat * 9 + carbs * 4;
    if (sumKcal > 250) {
      prodClass = new FastFood(name, protein, carbs, fat);
      foods.push(prodClass);
      console.log(foods);
      contextCreator(prodClass);
    } else {
      prodClass = new FatFreeFood(name, protein, carbs, fat);
      foods.push(prodClass);
      console.log(foods);
      contextCreator(prodClass);
    }
    return;
  } else {
    console.error("Uncorrect value of Proteins, please check your recept again.");
  }
};
buttonRef.addEventListener('click', recept);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78dfe689606d56008862")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDekMsR0FBRyxDQUFDLElBQUksQ0FBQ3lDLEtBQUssQ0FBQzFDLEtBQUssQ0FBQyxFQUFFO0lBQ3BEcUMsT0FBTyxDQUFDQyxHQUFHO0lBQ1hFLE9BQU8sR0FBR3pDLE9BQU8sR0FBRyxDQUFDLEdBQUdFLEdBQUcsR0FBRyxDQUFDLEdBQUdELEtBQUssR0FBRyxDQUFDO0lBQzNDLElBQUl3QyxPQUFPLEdBQUcsR0FBRyxFQUFFO01BQ2xCQyxTQUFTLEdBQUcsSUFBSXRDLFFBQVEsQ0FBQ0wsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxDQUFDO01BQ25ETixLQUFLLENBQUNnRCxJQUFJLENBQUNGLFNBQVMsQ0FBQztNQUNyQkosT0FBTyxDQUFDQyxHQUFHLENBQUMzQyxLQUFLLENBQUM7TUFDbEJnQyxjQUFjLENBQUNjLFNBQVMsQ0FBQztJQUMxQixDQUFDLE1BQU07TUFFTkEsU0FBUyxHQUFHLElBQUkxQixXQUFXLENBQUNqQixJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxHQUFHLENBQUM7TUFDdEROLEtBQUssQ0FBQ2dELElBQUksQ0FBQ0YsU0FBUyxDQUFDO01BQ3JCSixPQUFPLENBQUNDLEdBQUcsQ0FBQzNDLEtBQUssQ0FBQztNQUNsQmdDLGNBQWMsQ0FBQ2MsU0FBUyxDQUFDO0lBQzFCO0lBRUE7RUFDRCxDQUFDLE1BQU07SUFDTkosT0FBTyxDQUFDTyxLQUFLLENBQUMsOERBQThELENBQUM7RUFDOUU7QUFFRCxDQUFDO0FBR0R0QixTQUFTLENBQUN1QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVYLE1BQU0sQ0FBQzs7Ozs7Ozs7VUNyRjNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDNfRHppZW5fMi8wMV9PYmlla3Rvd29zYy8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9vZHMgPSBbXTtcblxuY2xhc3MgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMucHJvdGVpbiA9IHByb3RlaW47XG5cdFx0dGhpcy5jYXJicyA9IGNhcmJzO1xuXHRcdHRoaXMuZmF0ID0gZmF0O1xuXHR9XG59XG5cbmNsYXNzIEZhc3RGb29kIGV4dGVuZHMgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpIHtcblx0XHRzdXBlcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KTtcblx0XHR0aGlzLnN1bW0gPSAwO1xuXG5cdH1cblx0Z2V0U3VtbUtjYWwoKSB7XG5cdFx0dGhpcy5zdW0gPSB0aGlzLnByb3RlaW4gKiA0ICsgdGhpcy5jYXJicyAqIDQgKyB0aGlzLmZhdCAqIDk7XG5cdFx0cmV0dXJuIHRoaXMuc3VtO1xuXHR9XG5cbn1cblxuY2xhc3MgRmF0RnJlZUZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHN1cGVyKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpO1xuXHRcdHRoaXMuc3VtbSA9IDA7XG5cblx0fVxuXHRnZXRTdW1tS2NhbCgpIHtcblx0XHR0aGlzLnN1bSA9IHRoaXMucHJvdGVpbiAqIDQgKyB0aGlzLmNhcmJzICogNCArIHRoaXMuZmF0ICogOTtcblx0XHRyZXR1cm4gdGhpcy5zdW07XG5cdH1cbn1cblxuXG5jb25zdCBwcm9kdWN0c1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0cycpO1xuY29uc3QgYnV0dG9uUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuY29uc3QgbmFtZVJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBwcm90ZWluc1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm90ZWlucycpO1xuY29uc3QgY2FyYnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyYnMnKTtcbmNvbnN0IGZhdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXQnKTtcblxuY29uc3QgY29udGV4dENyZWF0b3IgPSBmdW5jdGlvbiAob2JqKSB7XG5cblx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdG15TGkudGV4dENvbnRlbnQgPSBgJHtvYmoubmFtZX0gY29uc2lzdCBvZiA6IHByb3RlaW4gLSAke29iai5wcm90ZWlufSwgY2FyYnMgLSAke29iai5jYXJic30gLCBmYXQgLSAke29iai5mYXR9IC4gS2NhbCA9ICR7b2JqLmdldFN1bW1LY2FsKCl9YDtcblxuXHRwcm9kdWN0c1JlZi5hcHBlbmRDaGlsZChteUxpKTtcbn1cbmNvbnN0IHJlY2VwdCA9IGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc29sZS5sb2codGhpcyk7XG5cdGNvbnN0IG5hbWUgPSBuYW1lUmVmLnZhbHVlO1xuXHRjb25zdCBwcm90ZWluID0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG5cdGNvbnN0IGZhdCA9IHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKTtcblx0Y29uc3QgY2FyYnMgPSBwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKTtcblx0Y29uc29sZS5sb2coYG5hbWUgPT09PSAke25hbWV9YClcblx0bGV0IHN1bUtjYWw7XG5cdGxldCBwcm9kQ2xhc3M7XG5cdGlmICghaXNOYU4ocHJvdGVpbikgJiYgIWlzTmFOKGZhdCkgJiYgIWlzTmFOKGNhcmJzKSkge1xuXHRcdGNvbnNvbGUubG9nXG5cdFx0c3VtS2NhbCA9IHByb3RlaW4gKiA0ICsgZmF0ICogOSArIGNhcmJzICogNDtcblx0XHRpZiAoc3VtS2NhbCA+IDI1MCkge1xuXHRcdFx0cHJvZENsYXNzID0gbmV3IEZhc3RGb29kKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpO1xuXHRcdFx0Zm9vZHMucHVzaChwcm9kQ2xhc3MpO1xuXHRcdFx0Y29uc29sZS5sb2coZm9vZHMpO1xuXHRcdFx0Y29udGV4dENyZWF0b3IocHJvZENsYXNzKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRwcm9kQ2xhc3MgPSBuZXcgRmF0RnJlZUZvb2QobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCk7XG5cdFx0XHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdFx0XHRjb25zb2xlLmxvZyhmb29kcyk7XG5cdFx0XHRjb250ZXh0Q3JlYXRvcihwcm9kQ2xhc3MpO1xuXHRcdH1cblxuXHRcdHJldHVybjtcblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKFwiVW5jb3JyZWN0IHZhbHVlIG9mIFByb3RlaW5zLCBwbGVhc2UgY2hlY2sgeW91ciByZWNlcHQgYWdhaW4uXCIpXG5cdH1cblxufVxuXG5cbmJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlY2VwdCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzhkZmU2ODk2MDZkNTYwMDg4NjJcIikiXSwibmFtZXMiOlsiZm9vZHMiLCJGb29kIiwiX2NyZWF0ZUNsYXNzIiwibmFtZSIsInByb3RlaW4iLCJjYXJicyIsImZhdCIsIl9jbGFzc0NhbGxDaGVjayIsIkZhc3RGb29kIiwiX0Zvb2QiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsImNhbGwiLCJzdW1tIiwia2V5IiwidmFsdWUiLCJnZXRTdW1tS2NhbCIsInN1bSIsIkZhdEZyZWVGb29kIiwiX0Zvb2QyIiwiX3N1cGVyMiIsIl90aGlzMiIsInByb2R1Y3RzUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uUmVmIiwibmFtZVJlZiIsInByb3RlaW5zUmVmIiwiY2FyYnNSZWYiLCJmYXRSZWYiLCJjb250ZXh0Q3JlYXRvciIsIm9iaiIsIm15TGkiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsInJlY2VwdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUZsb2F0Iiwic3VtS2NhbCIsInByb2RDbGFzcyIsImlzTmFOIiwicHVzaCIsImVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=