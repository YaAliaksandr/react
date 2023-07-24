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
    _this = _super.call(this);
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
    _this2 = _super2.call(this);
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
  var name = nameRef.value;
  var protein = parseFloat(proteinsRef.value);
  var fat = parseFloat(fatRef.value);
  var carbs = parseFloat(carbsRef.value);
  var sumKcal;
  var prodClass;
  if (!isNaN(protein) && !isNaN(fat) && !isNaN(carbs)) {
    sumKcal = protein * 4 + fat * 9 + carbs * 4;
    if (sumKcal > 250) {
      prodClass = new FastFood(name, protein, carbs, fat);
    } else {
      prodClass = new FatFreeFood(nameRef, protein, carbs, fat);
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
/******/ 	__webpack_require__.h = () => ("1323f896c5f687b5205a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsSUFBSSxDQUFDMEMsS0FBSyxDQUFDM0MsS0FBSyxDQUFDLEVBQUM7SUFDbER5QyxPQUFPLEdBQUcxQyxPQUFPLEdBQUcsQ0FBQyxHQUFJRSxHQUFHLEdBQUcsQ0FBQyxHQUFHRCxLQUFLLEdBQUcsQ0FBQztJQUM3QyxJQUFHeUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtNQUNqQkMsU0FBUyxHQUFHLElBQUl2QyxRQUFRLENBQUNMLElBQUksRUFBQ0MsT0FBTyxFQUFDQyxLQUFLLEVBQUNDLEdBQUcsQ0FBQztJQUVqRCxDQUFDLE1BQUs7TUFFTHlDLFNBQVMsR0FBRyxJQUFJM0IsV0FBVyxDQUFDYSxPQUFPLEVBQUM3QixPQUFPLEVBQUNDLEtBQUssRUFBQ0MsR0FBRyxDQUFDO0lBQ3ZEO0lBQ0FOLEtBQUssQ0FBQ2lELElBQUksQ0FBQ0YsU0FBUyxDQUFDO0lBQ3JCcEIsT0FBTyxDQUFDQyxHQUFHLENBQUM1QixLQUFLLENBQUM7SUFDbEJxQyxjQUFjLENBQUNVLFNBQVMsQ0FBQztJQUN6QjtFQUNELENBQUMsTUFBSTtJQUNKcEIsT0FBTyxDQUFDdUIsS0FBSyxDQUFDLDhEQUE4RCxDQUFDO0VBQzlFO0VBQ0E7QUFDQSxDQUFDOztBQUdEbEIsU0FBUyxDQUFDbUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFDUCxNQUFNLENBQUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7VUMzR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wM19Eemllbl8yLzAxX09iaWVrdG93b3NjLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb29kcyA9IFtdO1xuXG5jbGFzcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wcm90ZWluID0gcHJvdGVpbjtcblx0XHR0aGlzLmNhcmJzID0gY2FyYnM7XG5cdFx0dGhpcy5mYXQgPSBmYXQ7XG5cdH1cbn1cblxuY2xhc3MgRmFzdEZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN1bW0gPSAwO1xuXG5cdH1cbmdldFN1bW1LY2FsKCl7XG5cdCB0aGlzLnN1bSA9IHRoaXMucHJvdGVpbio0ICt0aGlzLmNhcmJzKjQgKyB0aGlzLmZhdCo5O1xucmV0dXJuIHRoaXMuc3VtO1xufVxuXG59XG5cbmNsYXNzIEZhdEZyZWVGb29kIGV4dGVuZHMgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdW1tID0gMDtcblxuXHR9XG5nZXRTdW1tS2NhbCgpe1xuXHQgdGhpcy5zdW0gPSB0aGlzLnByb3RlaW4qNCArdGhpcy5jYXJicyo0ICsgdGhpcy5mYXQqOTtcbnJldHVybiB0aGlzLnN1bTtcbn1cbn1cblxuXG5jb25zdCBmdW5jID0gZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zb2xlLmxvZyh0aGlzKVxufVxuY29uc3QgcHJvZHVjdHNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdHMnKTtcbmNvbnN0IGJ1dHRvblJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbmNvbnN0IG5hbWVSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgcHJvdGVpbnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGVpbnMnKTtcbmNvbnN0IGNhcmJzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmJzJyk7XG5jb25zdCBmYXRSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF0Jyk7XG5cbmNvbnN0IGNvbnRleHRDcmVhdG9yPSBmdW5jdGlvbihvYmope1xuXG5cdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRteUxpLnRleHRDb250ZW50PWAke29iai5uYW1lfSBjb25zaXN0IG9mIDogcHJvdGVpbiAtICR7b2JqLnByb3RlaW59LCBjYXJicyAtICR7b2JqLmNhcmJzfSAsIGZhdCAtICR7b2JqLmZhdH0gLiBLY2FsID0gJHtvYmouZ2V0U3VtbUtjYWwoKX1gO1xuXHRwcm9kdWN0c1JlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0fVxuY29uc3QgcmVjZXB0ID0gZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zb2xlLmxvZyh0aGlzKTtcblx0Y29uc3QgbmFtZSA9IG5hbWVSZWYudmFsdWU7XG5cdGNvbnN0IHByb3RlaW49IHBhcnNlRmxvYXQocHJvdGVpbnNSZWYudmFsdWUpO1xuXHRjb25zdCBmYXQgPSBwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSk7XG5cdGNvbnN0IGNhcmJzID0gcGFyc2VGbG9hdChjYXJic1JlZi52YWx1ZSk7XG5cdGxldCBzdW1LY2FsO1xuXHRsZXQgcHJvZENsYXNzO1xuXHRpZighaXNOYU4ocHJvdGVpbikgJiYgIWlzTmFOKGZhdCkgJiYgIWlzTmFOKGNhcmJzKSl7XG5cdFx0c3VtS2NhbCA9IHByb3RlaW4gKiA0ICsgIGZhdCAqIDkgKyBjYXJicyAqIDQ7XG5cdGlmKHN1bUtjYWwgPiAyNTAgKXtcblx0XHRwcm9kQ2xhc3MgPSBuZXcgRmFzdEZvb2QobmFtZSxwcm90ZWluLGNhcmJzLGZhdCk7XG5cdFx0XG5cdH1lbHNlIHtcblxuXHRcdHByb2RDbGFzcyA9IG5ldyBGYXRGcmVlRm9vZChuYW1lUmVmLHByb3RlaW4sY2FyYnMsZmF0KTtcblx0fVxuXHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdGNvbnNvbGUubG9nKGZvb2RzKTtcblx0Y29udGV4dENyZWF0b3IocHJvZENsYXNzKTtcblx0cmV0dXJuO1xufWVsc2V7XG5cdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcbn1cbi8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbn1cblxuXG5idXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlY2VwdCk7XG4vLyBmdW5jdGlvbiAoZSkge1xuLy8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHRjb25zdCBwcm90ZWluPSBwYXJzZUZsb2F0KHByb3RlaW5zUmVmLnZhbHVlKTtcbi8vIFx0bGV0IHByb2RDbGFzcztcbi8vIFx0aWYoIWlzTmFOKHByb3RlaW4pKXtcbi8vIFx0aWYocHJvdGVpbio0ID4gMjUwICl7XG4vLyBcdFx0cHJvZENsYXNzID0gbmV3IEZhc3RGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKSxwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSkpO1xuXHRcdFxuLy8gXHR9ZWxzZSB7XG4vLyBcdFx0cHJvZENsYXNzID0gbmV3IEZhdEZyZWVGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKSxwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSkpO1xuLy8gXHR9XG4vLyBcdGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbi8vIFx0cmV0dXJuO1xuLy8gfWVsc2V7XG4vLyBcdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcbi8vIH1cbi8vIC8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbi8vIH0pO1xuXG5cblxuXG4vLyBidXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzMjNmODk2YzVmNjg3YjUyMDVhXCIpIl0sIm5hbWVzIjpbImZvb2RzIiwiRm9vZCIsIl9jcmVhdGVDbGFzcyIsIm5hbWUiLCJwcm90ZWluIiwiY2FyYnMiLCJmYXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJGYXN0Rm9vZCIsIl9Gb29kIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwic3VtbSIsImtleSIsInZhbHVlIiwiZ2V0U3VtbUtjYWwiLCJzdW0iLCJGYXRGcmVlRm9vZCIsIl9Gb29kMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJmdW5jIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uUmVmIiwibmFtZVJlZiIsInByb3RlaW5zUmVmIiwiY2FyYnNSZWYiLCJmYXRSZWYiLCJjb250ZXh0Q3JlYXRvciIsIm9iaiIsIm15TGkiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsInJlY2VwdCIsInBhcnNlRmxvYXQiLCJzdW1LY2FsIiwicHJvZENsYXNzIiwiaXNOYU4iLCJwdXNoIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==