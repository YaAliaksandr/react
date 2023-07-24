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
  // myLi.textContent=obj.name + "consist of : protein - "+ obj.protein + ", carbs - " + obj.carbs +", fat - " + obj.fat + ". Kcal = " + obj.getSummKcal();
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
    // foods.push(prodClass);
    // console.log(foods);
    // contextCreator(prodClass);
    return;
  } else {
    console.error("Uncorrect value of Proteins, please check your recept again.");
  }
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
/******/ 	__webpack_require__.h = () => ("b78a636e900ccff5db05")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bWFpbi8uLzAzX0R6aWVuXzIvMDFfT2JpZWt0b3dvc2MvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvb2RzID0gW107XG5cbmNsYXNzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnByb3RlaW4gPSBwcm90ZWluO1xuXHRcdHRoaXMuY2FyYnMgPSBjYXJicztcblx0XHR0aGlzLmZhdCA9IGZhdDtcblx0fVxufVxuXG5jbGFzcyBGYXN0Rm9vZCBleHRlbmRzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KXtcblx0XHRzdXBlcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KTtcblx0XHR0aGlzLnN1bW0gPSAwO1xuXG5cdH1cbmdldFN1bW1LY2FsKCl7XG5cdCB0aGlzLnN1bSA9IHRoaXMucHJvdGVpbio0ICt0aGlzLmNhcmJzKjQgKyB0aGlzLmZhdCo5O1xucmV0dXJuIHRoaXMuc3VtO1xufVxuXG59XG5cbmNsYXNzIEZhdEZyZWVGb29kIGV4dGVuZHMgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpe1xuXHRcdHN1cGVyKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpO1xuXHRcdHRoaXMuc3VtbSA9IDA7XG5cblx0fVxuZ2V0U3VtbUtjYWwoKXtcblx0IHRoaXMuc3VtID0gdGhpcy5wcm90ZWluKjQgK3RoaXMuY2FyYnMqNCArIHRoaXMuZmF0Kjk7XG5yZXR1cm4gdGhpcy5zdW07XG59XG59XG5cblxuY29uc3QgcHJvZHVjdHNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdHMnKTtcbmNvbnN0IGJ1dHRvblJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4nKTtcbmNvbnN0IG5hbWVSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuY29uc3QgcHJvdGVpbnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvdGVpbnMnKTtcbmNvbnN0IGNhcmJzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcmJzJyk7XG5jb25zdCBmYXRSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF0Jyk7XG5cbmNvbnN0IGNvbnRleHRDcmVhdG9yPSBmdW5jdGlvbihvYmope1xuXG5cdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRteUxpLnRleHRDb250ZW50PWAke29iai5uYW1lfSBjb25zaXN0IG9mIDogcHJvdGVpbiAtICR7b2JqLnByb3RlaW59LCBjYXJicyAtICR7b2JqLmNhcmJzfSAsIGZhdCAtICR7b2JqLmZhdH0gLiBLY2FsID0gJHtvYmouZ2V0U3VtbUtjYWwoKX1gO1xuXHQvLyBteUxpLnRleHRDb250ZW50PW9iai5uYW1lICsgXCJjb25zaXN0IG9mIDogcHJvdGVpbiAtIFwiKyBvYmoucHJvdGVpbiArIFwiLCBjYXJicyAtIFwiICsgb2JqLmNhcmJzICtcIiwgZmF0IC0gXCIgKyBvYmouZmF0ICsgXCIuIEtjYWwgPSBcIiArIG9iai5nZXRTdW1tS2NhbCgpO1xuXHRwcm9kdWN0c1JlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0fVxuY29uc3QgcmVjZXB0ID0gZnVuY3Rpb24gKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zb2xlLmxvZyh0aGlzKTtcblx0bGV0IG5hbWUgPSBuYW1lUmVmLnZhbHVlO1xuXHRsZXQgcHJvdGVpbj0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG5cdGxldCBmYXQgPSBwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSk7XG5cdGxldCBjYXJicyA9IHBhcnNlRmxvYXQoY2FyYnNSZWYudmFsdWUpO1xuXHRjb25zb2xlLmxvZyhgbmFtZSA9PT09ICR7bmFtZX1gKVxuXHRsZXQgc3VtS2NhbDtcblx0bGV0IHByb2RDbGFzcztcblx0aWYoIWlzTmFOKHByb3RlaW4pICYmICFpc05hTihmYXQpICYmICFpc05hTihjYXJicykpe1xuXHRcdGNvbnNvbGUubG9nXG5cdFx0c3VtS2NhbCA9IHByb3RlaW4gKiA0ICsgZmF0ICogOSArIGNhcmJzICogNDtcblx0aWYoc3VtS2NhbCA+IDI1MCApe1xuXHRcdHByb2RDbGFzcyA9IG5ldyBGYXN0Rm9vZChuYW1lLHByb3RlaW4sY2FyYnMsZmF0KTtcblx0XHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdGNvbnNvbGUubG9nKGZvb2RzKTtcblx0Y29udGV4dENyZWF0b3IocHJvZENsYXNzKTtcblx0fWVsc2Uge1xuXG5cdFx0cHJvZENsYXNzID0gbmV3IEZhdEZyZWVGb29kKG5hbWUscHJvdGVpbixjYXJicyxmYXQpO1xuXHRcdGZvb2RzLnB1c2gocHJvZENsYXNzKTtcblx0Y29uc29sZS5sb2coZm9vZHMpO1xuXHRjb250ZXh0Q3JlYXRvcihwcm9kQ2xhc3MpO1xuXHR9XG5cdC8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcblx0Ly8gY29uc29sZS5sb2coZm9vZHMpO1xuXHQvLyBjb250ZXh0Q3JlYXRvcihwcm9kQ2xhc3MpO1xuXHRyZXR1cm47XG59ZWxzZXtcblx0Y29uc29sZS5lcnJvcihcIlVuY29ycmVjdCB2YWx1ZSBvZiBQcm90ZWlucywgcGxlYXNlIGNoZWNrIHlvdXIgcmVjZXB0IGFnYWluLlwiKVxufVxuXG59XG5cblxuYnV0dG9uUmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZWNlcHQpO1xuLy8gZnVuY3Rpb24gKGUpIHtcbi8vIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gXHRjb25zb2xlLmxvZyh0aGlzKTtcbi8vIFx0Y29uc3QgcHJvdGVpbj0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG4vLyBcdGxldCBwcm9kQ2xhc3M7XG4vLyBcdGlmKCFpc05hTihwcm90ZWluKSl7XG4vLyBcdGlmKHByb3RlaW4qNCA+IDI1MCApe1xuLy8gXHRcdHByb2RDbGFzcyA9IG5ldyBGYXN0Rm9vZChuYW1lUmVmLnZhbHVlLHByb3RlaW4scGFyc2VGbG9hdChjYXJic1JlZi52YWx1ZSkscGFyc2VGbG9hdChmYXRSZWYudmFsdWUpKTtcblx0XHRcbi8vIFx0fWVsc2Uge1xuLy8gXHRcdHByb2RDbGFzcyA9IG5ldyBGYXRGcmVlRm9vZChuYW1lUmVmLnZhbHVlLHByb3RlaW4scGFyc2VGbG9hdChjYXJic1JlZi52YWx1ZSkscGFyc2VGbG9hdChmYXRSZWYudmFsdWUpKTtcbi8vIFx0fVxuLy8gXHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG4vLyBcdHJldHVybjtcbi8vIH1lbHNle1xuLy8gXHRjb25zb2xlLmVycm9yKFwiVW5jb3JyZWN0IHZhbHVlIG9mIFByb3RlaW5zLCBwbGVhc2UgY2hlY2sgeW91ciByZWNlcHQgYWdhaW4uXCIpXG4vLyB9XG4vLyAvLyBmb29kcy5wdXNoKHByb2RDbGFzcyk7XG4vLyB9KTtcblxuXG5cblxuLy8gYnV0dG9uUmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNzhhNjM2ZTkwMGNjZmY1ZGIwNVwiKSJdLCJuYW1lcyI6WyJmb29kcyIsIkZvb2QiLCJfY3JlYXRlQ2xhc3MiLCJuYW1lIiwicHJvdGVpbiIsImNhcmJzIiwiZmF0IiwiX2NsYXNzQ2FsbENoZWNrIiwiRmFzdEZvb2QiLCJfRm9vZCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiY2FsbCIsInN1bW0iLCJrZXkiLCJ2YWx1ZSIsImdldFN1bW1LY2FsIiwic3VtIiwiRmF0RnJlZUZvb2QiLCJfRm9vZDIiLCJfc3VwZXIyIiwiX3RoaXMyIiwicHJvZHVjdHNSZWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25SZWYiLCJuYW1lUmVmIiwicHJvdGVpbnNSZWYiLCJjYXJic1JlZiIsImZhdFJlZiIsImNvbnRleHRDcmVhdG9yIiwib2JqIiwibXlMaSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwicmVjZXB0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBhcnNlRmxvYXQiLCJzdW1LY2FsIiwicHJvZENsYXNzIiwiaXNOYU4iLCJwdXNoIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==