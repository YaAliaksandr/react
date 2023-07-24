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
  function FatFreeFood(name, protein, carbs, fat) {
    var _this2;
    _classCallCheck(this, FatFreeFood);
    _this2 = _super2.call(this, summ);
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
/******/ 	__webpack_require__.h = () => ("294fdbff146cd5786104")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUMzQyxLQUFLLENBQUMsRUFBQztJQUNsRHlDLE9BQU8sR0FBRzFDLE9BQU8sR0FBRyxDQUFDLEdBQUlFLEdBQUcsR0FBRyxDQUFDLEdBQUdELEtBQUssR0FBRyxDQUFDO0lBQzdDLElBQUd5QyxPQUFPLEdBQUcsR0FBRyxFQUFFO01BQ2pCQyxTQUFTLEdBQUcsSUFBSXZDLFFBQVEsQ0FBQ3lCLE9BQU8sQ0FBQ2hCLEtBQUssRUFBQ2IsT0FBTyxFQUFDQyxLQUFLLEVBQUNDLEdBQUcsQ0FBQztJQUUxRCxDQUFDLE1BQUs7TUFFTHlDLFNBQVMsR0FBRyxJQUFJM0IsV0FBVyxDQUFDYSxPQUFPLENBQUNoQixLQUFLLEVBQUNiLE9BQU8sRUFBQ0MsS0FBSyxFQUFDQyxHQUFHLENBQUM7SUFDN0Q7SUFDQU4sS0FBSyxDQUFDaUQsSUFBSSxDQUFDRixTQUFTLENBQUM7SUFDckJwQixPQUFPLENBQUNDLEdBQUcsQ0FBQzVCLEtBQUssQ0FBQztJQUNsQnFDLGNBQWMsQ0FBQ1UsU0FBUyxDQUFDO0lBQ3pCO0VBQ0QsQ0FBQyxNQUFJO0lBQ0pwQixPQUFPLENBQUN1QixLQUFLLENBQUMsOERBQThELENBQUM7RUFDOUU7RUFDQTtBQUNBLENBQUM7O0FBR0RsQixTQUFTLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUNQLE1BQU0sQ0FBQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBOzs7Ozs7OztVQzFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAzX0R6aWVuXzIvMDFfT2JpZWt0b3dvc2MvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvb2RzID0gW107XG5cbmNsYXNzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnByb3RlaW4gPSBwcm90ZWluO1xuXHRcdHRoaXMuY2FyYnMgPSBjYXJicztcblx0XHR0aGlzLmZhdCA9IGZhdDtcblx0fVxufVxuXG5jbGFzcyBGYXN0Rm9vZCBleHRlbmRzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KXtcblx0XHRzdXBlcihzdW1tKTtcblx0XHR0aGlzLnN1bW0gPSAwO1xuXG5cdH1cbmdldFN1bW1LY2FsKCl7XG5cdCB0aGlzLnN1bSA9IHRoaXMucHJvdGVpbio0ICt0aGlzLmNhcmJzKjQgKyB0aGlzLmZhdCo5O1xucmV0dXJuIHRoaXMuc3VtO1xufVxuXG59XG5cbmNsYXNzIEZhdEZyZWVGb29kIGV4dGVuZHMgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpe1xuXHRcdHN1cGVyKHN1bW0pO1xuXHRcdHRoaXMuc3VtbSA9IDA7XG5cblx0fVxuZ2V0U3VtbUtjYWwoKXtcblx0IHRoaXMuc3VtID0gdGhpcy5wcm90ZWluKjQgK3RoaXMuY2FyYnMqNCArIHRoaXMuZmF0Kjk7XG5yZXR1cm4gdGhpcy5zdW07XG59XG59XG5cblxuY29uc3QgZnVuYyA9IGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc29sZS5sb2codGhpcylcbn1cbmNvbnN0IHByb2R1Y3RzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RzJyk7XG5jb25zdCBidXR0b25SZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG5jb25zdCBuYW1lUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IHByb3RlaW5zUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3RlaW5zJyk7XG5jb25zdCBjYXJic1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJicycpO1xuY29uc3QgZmF0UmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZhdCcpO1xuXG5jb25zdCBjb250ZXh0Q3JlYXRvcj0gZnVuY3Rpb24ob2JqKXtcblxuXHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bXlMaS50ZXh0Q29udGVudD1gJHtvYmoubmFtZX0gY29uc2lzdCBvZiA6IHByb3RlaW4gLSAke29iai5wcm90ZWlufSwgY2FyYnMgLSAke29iai5jYXJic30gLCBmYXQgLSAke29iai5mYXR9IC4gS2NhbCA9ICR7b2JqLmdldFN1bW1LY2FsKCl9YDtcblx0cHJvZHVjdHNSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdH1cbmNvbnN0IHJlY2VwdCA9IGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc29sZS5sb2codGhpcyk7XG5cdGNvbnN0IHByb3RlaW49IHBhcnNlRmxvYXQocHJvdGVpbnNSZWYudmFsdWUpO1xuXHRjb25zdCBmYXQgPSBwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSk7XG5cdGNvbnN0IGNhcmJzID0gcGFyc2VGbG9hdChjYXJic1JlZi52YWx1ZSk7XG5cdGxldCBzdW1LY2FsO1xuXHRsZXQgcHJvZENsYXNzO1xuXHRpZighaXNOYU4ocHJvdGVpbikgJiYgIWlzTmFOKGZhdCkgJiYgIWlzTmFOKGNhcmJzKSl7XG5cdFx0c3VtS2NhbCA9IHByb3RlaW4gKiA0ICsgIGZhdCAqIDkgKyBjYXJicyAqIDQ7XG5cdGlmKHN1bUtjYWwgPiAyNTAgKXtcblx0XHRwcm9kQ2xhc3MgPSBuZXcgRmFzdEZvb2QobmFtZVJlZi52YWx1ZSxwcm90ZWluLGNhcmJzLGZhdCk7XG5cdFx0XG5cdH1lbHNlIHtcblxuXHRcdHByb2RDbGFzcyA9IG5ldyBGYXRGcmVlRm9vZChuYW1lUmVmLnZhbHVlLHByb3RlaW4sY2FyYnMsZmF0KTtcblx0fVxuXHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdGNvbnNvbGUubG9nKGZvb2RzKTtcblx0Y29udGV4dENyZWF0b3IocHJvZENsYXNzKTtcblx0cmV0dXJuO1xufWVsc2V7XG5cdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcbn1cbi8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbn1cblxuXG5idXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlY2VwdCk7XG4vLyBmdW5jdGlvbiAoZSkge1xuLy8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHRjb25zdCBwcm90ZWluPSBwYXJzZUZsb2F0KHByb3RlaW5zUmVmLnZhbHVlKTtcbi8vIFx0bGV0IHByb2RDbGFzcztcbi8vIFx0aWYoIWlzTmFOKHByb3RlaW4pKXtcbi8vIFx0aWYocHJvdGVpbio0ID4gMjUwICl7XG4vLyBcdFx0cHJvZENsYXNzID0gbmV3IEZhc3RGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKSxwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSkpO1xuXHRcdFxuLy8gXHR9ZWxzZSB7XG4vLyBcdFx0cHJvZENsYXNzID0gbmV3IEZhdEZyZWVGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKSxwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSkpO1xuLy8gXHR9XG4vLyBcdGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbi8vIFx0cmV0dXJuO1xuLy8gfWVsc2V7XG4vLyBcdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcbi8vIH1cbi8vIC8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbi8vIH0pO1xuXG5cblxuXG4vLyBidXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI5NGZkYmZmMTQ2Y2Q1Nzg2MTA0XCIpIl0sIm5hbWVzIjpbImZvb2RzIiwiRm9vZCIsIl9jcmVhdGVDbGFzcyIsIm5hbWUiLCJwcm90ZWluIiwiY2FyYnMiLCJmYXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJGYXN0Rm9vZCIsIl9Gb29kIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwic3VtbSIsImtleSIsInZhbHVlIiwiZ2V0U3VtbUtjYWwiLCJzdW0iLCJGYXRGcmVlRm9vZCIsIl9Gb29kMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJmdW5jIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uUmVmIiwibmFtZVJlZiIsInByb3RlaW5zUmVmIiwiY2FyYnNSZWYiLCJmYXRSZWYiLCJjb250ZXh0Q3JlYXRvciIsIm9iaiIsIm15TGkiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsInJlY2VwdCIsInBhcnNlRmxvYXQiLCJzdW1LY2FsIiwicHJvZENsYXNzIiwiaXNOYU4iLCJwdXNoIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==