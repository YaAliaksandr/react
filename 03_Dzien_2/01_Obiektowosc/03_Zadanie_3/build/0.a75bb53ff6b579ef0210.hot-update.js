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
    _this = _super.call(this, summ);
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
  function FatFreeFood() {
    _classCallCheck(this, FatFreeFood);
    return _super2.apply(this, arguments);
  }
  return _createClass(FatFreeFood);
}(Food);
var func = function func(e) {
  e.preventDefault();
  console.log(this);
};
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
  var protein = parseFloat(proteinsRef.value);
  var fat = parseFloat(fatRef.value);
  var carbs = parseFloat(carbsRef.value);
  var sumKcal;
  var prodClass;
  if (!isNaN(protein) && !isNaN(fat) && !isNaN(carbs)) {
    sumKcal = protein * 4 + fat * 9 + carbs * 4;
    if (sumKcal > 250) {
      prodClass = new FastFood(nameRef.value, protein, carbs, fat);
    } else {
      prodClass = new FatFreeFood(nameRef.value, protein, carbs, fat);
    }
    foods.push(prodClass);
    console.log(foods);
    contextCreator(prodClass);
    return;
  } else {
    console.error("Uncorrect value of Proteins, please check your recept again.");
  }
  // foods.push(prodClass);
};

buttonRef.addEventListener('click', recept);
// function (e) {
// 	e.preventDefault();
// 	console.log(this);
// 	const protein= parseFloat(proteinsRef.value);
// 	let prodClass;
// 	if(!isNaN(protein)){
// 	if(protein*4 > 250 ){
// 		prodClass = new FastFood(nameRef.value,protein,parseFloat(carbsRef.value),parseFloat(fatRef.value));

// 	}else {
// 		prodClass = new FatFreeFood(nameRef.value,protein,parseFloat(carbsRef.value),parseFloat(fatRef.value));
// 	}
// 	foods.push(prodClass);
// 	return;
// }else{
// 	console.error("Uncorrect value of Proteins, please check your recept again.")
// }
// // foods.push(prodClass);
// });

// buttonRef.addEventListener('click', func);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd0fcec29e076b0e2946")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0YsU0FBUyxDQUFDO0lBQ3JCcEIsT0FBTyxDQUFDQyxHQUFHLENBQUM3QixLQUFLLENBQUM7SUFDbEJzQyxjQUFjLENBQUNVLFNBQVMsQ0FBQztJQUN6QjtFQUNELENBQUMsTUFBSTtJQUNKcEIsT0FBTyxDQUFDdUIsS0FBSyxDQUFDLDhEQUE4RCxDQUFDO0VBQzlFO0VBQ0E7QUFDQSxDQUFDOztBQUdEbEIsU0FBUyxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFDUCxNQUFNLENBQUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7VUNqR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wM19Eemllbl8yLzAxX09iaWVrdG93b3NjLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb29kcyA9IFtdO1xuXG5jbGFzcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wcm90ZWluID0gcHJvdGVpbjtcblx0XHR0aGlzLmNhcmJzID0gY2FyYnM7XG5cdFx0dGhpcy5mYXQgPSBmYXQ7XG5cdH1cbn1cblxuY2xhc3MgRmFzdEZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcihzdW1tKTtcblx0XHR0aGlzLnN1bW0gPTA7XG5cblx0fVxuZ2V0U3VtbUtjYWwoKXtcblx0IHRoaXMuc3VtID0gdGhpcy5wcm90ZWluKjQgK3RoaXMuY2FyYnMqNCArIHRoaXMuZmF0Kjk7XG5yZXR1cm4gdGhpcy5zdW07XG59XG5cbn1cblxuY2xhc3MgRmF0RnJlZUZvb2QgZXh0ZW5kcyBGb29kIHtcblxufVxuXG5jb25zdCBmdW5jID0gZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zb2xlLmxvZyh0aGlzKVxufVxuY29uc3QgcHJvZHVjdHNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdHMnKTtcbmNvbnN0IGJ1dHRvblJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbmNvbnN0IG5hbWVSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgcHJvdGVpbnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGVpbnMnKTtcbmNvbnN0IGNhcmJzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmJzJyk7XG5jb25zdCBmYXRSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF0Jyk7XG5cbmNvbnN0IGNvbnRleHRDcmVhdG9yPSBmdW5jdGlvbihvYmope1xuXG5cdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRteUxpLnRleHRDb250ZW50PWAke29iai5uYW1lfSBjb25zaXN0IG9mIDogcHJvdGVpbiAtICR7b2JqLnByb3RlaW59LCBjYXJicyAtICR7b2JqLmNhcmJzfSAsIGZhdCAtICR7b2JqLmZhdH0gLiBLY2FsID0gJHtvYmouZ2V0U3VtbUtjYWwoKX1gO1xuXHRwcm9kdWN0c1JlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0fVxuY29uc3QgcmVjZXB0ID0gZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zb2xlLmxvZyh0aGlzKTtcblx0Y29uc3QgcHJvdGVpbj0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG5cdGNvbnN0IGZhdCA9IHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKTtcblx0Y29uc3QgY2FyYnMgPSBwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKTtcblx0bGV0IHN1bUtjYWw7XG5cdGxldCBwcm9kQ2xhc3M7XG5cdGlmKCFpc05hTihwcm90ZWluKSAmJiAhaXNOYU4oZmF0KSAmJiAhaXNOYU4oY2FyYnMpKXtcblx0XHRzdW1LY2FsID0gcHJvdGVpbiAqIDQgKyAgZmF0ICogOSArIGNhcmJzICogNDtcblx0aWYoc3VtS2NhbCA+IDI1MCApe1xuXHRcdHByb2RDbGFzcyA9IG5ldyBGYXN0Rm9vZChuYW1lUmVmLnZhbHVlLHByb3RlaW4sY2FyYnMsZmF0KTtcblx0XHRcblx0fWVsc2Uge1xuXG5cdFx0cHJvZENsYXNzID0gbmV3IEZhdEZyZWVGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixjYXJicyxmYXQpO1xuXHR9XG5cdGZvb2RzLnB1c2gocHJvZENsYXNzKTtcblx0Y29uc29sZS5sb2coZm9vZHMpO1xuXHRjb250ZXh0Q3JlYXRvcihwcm9kQ2xhc3MpO1xuXHRyZXR1cm47XG59ZWxzZXtcblx0Y29uc29sZS5lcnJvcihcIlVuY29ycmVjdCB2YWx1ZSBvZiBQcm90ZWlucywgcGxlYXNlIGNoZWNrIHlvdXIgcmVjZXB0IGFnYWluLlwiKVxufVxuLy8gZm9vZHMucHVzaChwcm9kQ2xhc3MpO1xufVxuXG5cbmJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVjZXB0KTtcbi8vIGZ1bmN0aW9uIChlKSB7XG4vLyBcdGUucHJldmVudERlZmF1bHQoKTtcbi8vIFx0Y29uc29sZS5sb2codGhpcyk7XG4vLyBcdGNvbnN0IHByb3RlaW49IHBhcnNlRmxvYXQocHJvdGVpbnNSZWYudmFsdWUpO1xuLy8gXHRsZXQgcHJvZENsYXNzO1xuLy8gXHRpZighaXNOYU4ocHJvdGVpbikpe1xuLy8gXHRpZihwcm90ZWluKjQgPiAyNTAgKXtcbi8vIFx0XHRwcm9kQ2xhc3MgPSBuZXcgRmFzdEZvb2QobmFtZVJlZi52YWx1ZSxwcm90ZWluLHBhcnNlRmxvYXQoY2FyYnNSZWYudmFsdWUpLHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKSk7XG5cdFx0XG4vLyBcdH1lbHNlIHtcbi8vIFx0XHRwcm9kQ2xhc3MgPSBuZXcgRmF0RnJlZUZvb2QobmFtZVJlZi52YWx1ZSxwcm90ZWluLHBhcnNlRmxvYXQoY2FyYnNSZWYudmFsdWUpLHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKSk7XG4vLyBcdH1cbi8vIFx0Zm9vZHMucHVzaChwcm9kQ2xhc3MpO1xuLy8gXHRyZXR1cm47XG4vLyB9ZWxzZXtcbi8vIFx0Y29uc29sZS5lcnJvcihcIlVuY29ycmVjdCB2YWx1ZSBvZiBQcm90ZWlucywgcGxlYXNlIGNoZWNrIHlvdXIgcmVjZXB0IGFnYWluLlwiKVxuLy8gfVxuLy8gLy8gZm9vZHMucHVzaChwcm9kQ2xhc3MpO1xuLy8gfSk7XG5cblxuXG5cbi8vIGJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmQwZmNlYzI5ZTA3NmIwZTI5NDZcIikiXSwibmFtZXMiOlsiZm9vZHMiLCJGb29kIiwiX2NyZWF0ZUNsYXNzIiwibmFtZSIsInByb3RlaW4iLCJjYXJicyIsImZhdCIsIl9jbGFzc0NhbGxDaGVjayIsIkZhc3RGb29kIiwiX0Zvb2QiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsImNhbGwiLCJzdW1tIiwia2V5IiwidmFsdWUiLCJnZXRTdW1tS2NhbCIsInN1bSIsIkZhdEZyZWVGb29kIiwiX0Zvb2QyIiwiX3N1cGVyMiIsImFwcGx5IiwiYXJndW1lbnRzIiwiZnVuYyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0c1JlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvblJlZiIsIm5hbWVSZWYiLCJwcm90ZWluc1JlZiIsImNhcmJzUmVmIiwiZmF0UmVmIiwiY29udGV4dENyZWF0b3IiLCJvYmoiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJyZWNlcHQiLCJwYXJzZUZsb2F0Iiwic3VtS2NhbCIsInByb2RDbGFzcyIsImlzTmFOIiwicHVzaCIsImVycm9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=