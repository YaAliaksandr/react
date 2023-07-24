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
/******/ 	__webpack_require__.h = () => ("d4cd023c651d4bc87375")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsSUFBSSxDQUFDMEMsS0FBSyxDQUFDM0MsS0FBSyxDQUFDLEVBQUM7SUFDbER5QyxPQUFPLEdBQUcxQyxPQUFPLEdBQUcsQ0FBQyxHQUFJRSxHQUFHLEdBQUcsQ0FBQyxHQUFHRCxLQUFLLEdBQUcsQ0FBQztJQUM3QyxJQUFHeUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtNQUNqQkMsU0FBUyxHQUFHLElBQUl2QyxRQUFRLENBQUNMLElBQUksRUFBQ0MsT0FBTyxFQUFDQyxLQUFLLEVBQUNDLEdBQUcsQ0FBQztJQUVqRCxDQUFDLE1BQUs7TUFFTHlDLFNBQVMsR0FBRyxJQUFJM0IsV0FBVyxDQUFDYSxPQUFPLENBQUNoQixLQUFLLEVBQUNiLE9BQU8sRUFBQ0MsS0FBSyxFQUFDQyxHQUFHLENBQUM7SUFDN0Q7SUFDQU4sS0FBSyxDQUFDaUQsSUFBSSxDQUFDRixTQUFTLENBQUM7SUFDckJwQixPQUFPLENBQUNDLEdBQUcsQ0FBQzVCLEtBQUssQ0FBQztJQUNsQnFDLGNBQWMsQ0FBQ1UsU0FBUyxDQUFDO0lBQ3pCO0VBQ0QsQ0FBQyxNQUFJO0lBQ0pwQixPQUFPLENBQUN1QixLQUFLLENBQUMsOERBQThELENBQUM7RUFDOUU7RUFDQTtBQUNBLENBQUM7O0FBR0RsQixTQUFTLENBQUNtQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUNQLE1BQU0sQ0FBQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUtBOzs7Ozs7OztVQzNHQSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAzX0R6aWVuXzIvMDFfT2JpZWt0b3dvc2MvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvb2RzID0gW107XG5cbmNsYXNzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnByb3RlaW4gPSBwcm90ZWluO1xuXHRcdHRoaXMuY2FyYnMgPSBjYXJicztcblx0XHR0aGlzLmZhdCA9IGZhdDtcblx0fVxufVxuXG5jbGFzcyBGYXN0Rm9vZCBleHRlbmRzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KXtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3VtbSA9IDA7XG5cblx0fVxuZ2V0U3VtbUtjYWwoKXtcblx0IHRoaXMuc3VtID0gdGhpcy5wcm90ZWluKjQgK3RoaXMuY2FyYnMqNCArIHRoaXMuZmF0Kjk7XG5yZXR1cm4gdGhpcy5zdW07XG59XG5cbn1cblxuY2xhc3MgRmF0RnJlZUZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN1bW0gPSAwO1xuXG5cdH1cbmdldFN1bW1LY2FsKCl7XG5cdCB0aGlzLnN1bSA9IHRoaXMucHJvdGVpbio0ICt0aGlzLmNhcmJzKjQgKyB0aGlzLmZhdCo5O1xucmV0dXJuIHRoaXMuc3VtO1xufVxufVxuXG5cbmNvbnN0IGZ1bmMgPSBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnNvbGUubG9nKHRoaXMpXG59XG5jb25zdCBwcm9kdWN0c1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0cycpO1xuY29uc3QgYnV0dG9uUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuY29uc3QgbmFtZVJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBwcm90ZWluc1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm90ZWlucycpO1xuY29uc3QgY2FyYnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyYnMnKTtcbmNvbnN0IGZhdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXQnKTtcblxuY29uc3QgY29udGV4dENyZWF0b3I9IGZ1bmN0aW9uKG9iail7XG5cblx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdG15TGkudGV4dENvbnRlbnQ9YCR7b2JqLm5hbWV9IGNvbnNpc3Qgb2YgOiBwcm90ZWluIC0gJHtvYmoucHJvdGVpbn0sIGNhcmJzIC0gJHtvYmouY2FyYnN9ICwgZmF0IC0gJHtvYmouZmF0fSAuIEtjYWwgPSAke29iai5nZXRTdW1tS2NhbCgpfWA7XG5cdHByb2R1Y3RzUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHR9XG5jb25zdCByZWNlcHQgPSBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRjb25zdCBuYW1lID0gbmFtZVJlZi52YWx1ZTtcblx0Y29uc3QgcHJvdGVpbj0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG5cdGNvbnN0IGZhdCA9IHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKTtcblx0Y29uc3QgY2FyYnMgPSBwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKTtcblx0bGV0IHN1bUtjYWw7XG5cdGxldCBwcm9kQ2xhc3M7XG5cdGlmKCFpc05hTihwcm90ZWluKSAmJiAhaXNOYU4oZmF0KSAmJiAhaXNOYU4oY2FyYnMpKXtcblx0XHRzdW1LY2FsID0gcHJvdGVpbiAqIDQgKyAgZmF0ICogOSArIGNhcmJzICogNDtcblx0aWYoc3VtS2NhbCA+IDI1MCApe1xuXHRcdHByb2RDbGFzcyA9IG5ldyBGYXN0Rm9vZChuYW1lLHByb3RlaW4sY2FyYnMsZmF0KTtcblx0XHRcblx0fWVsc2Uge1xuXG5cdFx0cHJvZENsYXNzID0gbmV3IEZhdEZyZWVGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixjYXJicyxmYXQpO1xuXHR9XG5cdGZvb2RzLnB1c2gocHJvZENsYXNzKTtcblx0Y29uc29sZS5sb2coZm9vZHMpO1xuXHRjb250ZXh0Q3JlYXRvcihwcm9kQ2xhc3MpO1xuXHRyZXR1cm47XG59ZWxzZXtcblx0Y29uc29sZS5lcnJvcihcIlVuY29ycmVjdCB2YWx1ZSBvZiBQcm90ZWlucywgcGxlYXNlIGNoZWNrIHlvdXIgcmVjZXB0IGFnYWluLlwiKVxufVxuLy8gZm9vZHMucHVzaChwcm9kQ2xhc3MpO1xufVxuXG5cbmJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVjZXB0KTtcbi8vIGZ1bmN0aW9uIChlKSB7XG4vLyBcdGUucHJldmVudERlZmF1bHQoKTtcbi8vIFx0Y29uc29sZS5sb2codGhpcyk7XG4vLyBcdGNvbnN0IHByb3RlaW49IHBhcnNlRmxvYXQocHJvdGVpbnNSZWYudmFsdWUpO1xuLy8gXHRsZXQgcHJvZENsYXNzO1xuLy8gXHRpZighaXNOYU4ocHJvdGVpbikpe1xuLy8gXHRpZihwcm90ZWluKjQgPiAyNTAgKXtcbi8vIFx0XHRwcm9kQ2xhc3MgPSBuZXcgRmFzdEZvb2QobmFtZVJlZi52YWx1ZSxwcm90ZWluLHBhcnNlRmxvYXQoY2FyYnNSZWYudmFsdWUpLHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKSk7XG5cdFx0XG4vLyBcdH1lbHNlIHtcbi8vIFx0XHRwcm9kQ2xhc3MgPSBuZXcgRmF0RnJlZUZvb2QobmFtZVJlZi52YWx1ZSxwcm90ZWluLHBhcnNlRmxvYXQoY2FyYnNSZWYudmFsdWUpLHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKSk7XG4vLyBcdH1cbi8vIFx0Zm9vZHMucHVzaChwcm9kQ2xhc3MpO1xuLy8gXHRyZXR1cm47XG4vLyB9ZWxzZXtcbi8vIFx0Y29uc29sZS5lcnJvcihcIlVuY29ycmVjdCB2YWx1ZSBvZiBQcm90ZWlucywgcGxlYXNlIGNoZWNrIHlvdXIgcmVjZXB0IGFnYWluLlwiKVxuLy8gfVxuLy8gLy8gZm9vZHMucHVzaChwcm9kQ2xhc3MpO1xuLy8gfSk7XG5cblxuXG5cbi8vIGJ1dHRvblJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmMpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDRjZDAyM2M2NTFkNGJjODczNzVcIikiXSwibmFtZXMiOlsiZm9vZHMiLCJGb29kIiwiX2NyZWF0ZUNsYXNzIiwibmFtZSIsInByb3RlaW4iLCJjYXJicyIsImZhdCIsIl9jbGFzc0NhbGxDaGVjayIsIkZhc3RGb29kIiwiX0Zvb2QiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsImNhbGwiLCJzdW1tIiwia2V5IiwidmFsdWUiLCJnZXRTdW1tS2NhbCIsInN1bSIsIkZhdEZyZWVGb29kIiwiX0Zvb2QyIiwiX3N1cGVyMiIsIl90aGlzMiIsImZ1bmMiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHNSZWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b25SZWYiLCJuYW1lUmVmIiwicHJvdGVpbnNSZWYiLCJjYXJic1JlZiIsImZhdFJlZiIsImNvbnRleHRDcmVhdG9yIiwib2JqIiwibXlMaSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNvbmNhdCIsImFwcGVuZENoaWxkIiwicmVjZXB0IiwicGFyc2VGbG9hdCIsInN1bUtjYWwiLCJwcm9kQ2xhc3MiLCJpc05hTiIsInB1c2giLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9