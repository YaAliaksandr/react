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
var productsRef = document.querySelector('#products');
var buttonRef = document.querySelector('.btn');
var nameRef = document.querySelector('#name');
var proteinsRef = document.querySelector('#proteins');
var carbsRef = document.querySelector('#carbs');
var fatRef = document.querySelector('#fat');
var contextCreator = function contextCreator(obj) {
  var myLi = document.createElement('li');
  // myLi.textContent=`${obj.name} consist of : protein - ${obj.protein}, carbs - ${obj.carbs} , fat - ${obj.fat} . Kcal = ${obj.getSummKcal()}`;
  myLi.textContent = obj.name + "consist of : protein - " + obj.protein + ", carbs - " + obj.carbs + ", fat - " + obj.fat + ". Kcal = " + obj.getSummKcal();
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
    console.log;
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
/******/ 	__webpack_require__.h = () => ("607853d0d89fc1fe7f2c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMGY4YjZmMmZiMGIwMGVjZGE5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRyxFQUFFO0FBQUMsSUFFWEMsSUFBSSxnQkFBQUMsWUFBQSxDQUNULFNBQUFELEtBQVlFLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtFQUFBQyxlQUFBLE9BQUFOLElBQUE7RUFDdEMsSUFBSSxDQUFDRSxJQUFJLEdBQUdBLElBQUk7RUFDaEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDbEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7QUFDZixDQUFDO0FBQUEsSUFHSUUsUUFBUSwwQkFBQUMsS0FBQTtFQUFBQyxTQUFBLENBQUFGLFFBQUEsRUFBQUMsS0FBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixRQUFBO0VBQ2IsU0FBQUEsU0FBWUwsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFDO0lBQUEsSUFBQU8sS0FBQTtJQUFBTixlQUFBLE9BQUFDLFFBQUE7SUFDckNLLEtBQUEsR0FBQUYsTUFBQSxDQUFBRyxJQUFBO0lBQ0FELEtBQUEsQ0FBS0UsSUFBSSxHQUFHLENBQUM7SUFBQyxPQUFBRixLQUFBO0VBRWY7RUFBQ1gsWUFBQSxDQUFBTSxRQUFBO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUNGLFNBQUFDLFlBQUEsRUFBYTtNQUNYLElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ2YsT0FBTyxHQUFDLENBQUMsR0FBRSxJQUFJLENBQUNDLEtBQUssR0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxHQUFHLEdBQUMsQ0FBQztNQUN0RCxPQUFPLElBQUksQ0FBQ2EsR0FBRztJQUNmO0VBQUM7RUFBQSxPQUFBWCxRQUFBO0FBQUEsRUFUc0JQLElBQUk7QUFBQSxJQWFyQm1CLFdBQVcsMEJBQUFDLE1BQUE7RUFBQVgsU0FBQSxDQUFBVSxXQUFBLEVBQUFDLE1BQUE7RUFBQSxJQUFBQyxPQUFBLEdBQUFWLFlBQUEsQ0FBQVEsV0FBQTtFQUNoQixTQUFBQSxZQUFZakIsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFDO0lBQUEsSUFBQWlCLE1BQUE7SUFBQWhCLGVBQUEsT0FBQWEsV0FBQTtJQUNyQ0csTUFBQSxHQUFBRCxPQUFBLENBQUFSLElBQUE7SUFDQVMsTUFBQSxDQUFLUixJQUFJLEdBQUcsQ0FBQztJQUFDLE9BQUFRLE1BQUE7RUFFZjtFQUFDckIsWUFBQSxDQUFBa0IsV0FBQTtJQUFBSixHQUFBO0lBQUFDLEtBQUEsRUFDRixTQUFBQyxZQUFBLEVBQWE7TUFDWCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNmLE9BQU8sR0FBQyxDQUFDLEdBQUUsSUFBSSxDQUFDQyxLQUFLLEdBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxHQUFDLENBQUM7TUFDdEQsT0FBTyxJQUFJLENBQUNhLEdBQUc7SUFDZjtFQUFDO0VBQUEsT0FBQUMsV0FBQTtBQUFBLEVBVHlCbkIsSUFBSTtBQWE5QixJQUFNdUIsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDdkQsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFDaEQsSUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDL0MsSUFBTUcsV0FBVyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDdkQsSUFBTUksUUFBUSxHQUFHTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDakQsSUFBTUssTUFBTSxHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7QUFFN0MsSUFBTU0sY0FBYyxHQUFFLFNBQWhCQSxjQUFjQSxDQUFXQyxHQUFHLEVBQUM7RUFFbEMsSUFBTUMsSUFBSSxHQUFHVCxRQUFRLENBQUNVLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDekM7RUFDQUQsSUFBSSxDQUFDRSxXQUFXLEdBQUNILEdBQUcsQ0FBQzlCLElBQUksR0FBRyx5QkFBeUIsR0FBRThCLEdBQUcsQ0FBQzdCLE9BQU8sR0FBRyxZQUFZLEdBQUc2QixHQUFHLENBQUM1QixLQUFLLEdBQUUsVUFBVSxHQUFHNEIsR0FBRyxDQUFDM0IsR0FBRyxHQUFHLFdBQVcsR0FBRzJCLEdBQUcsQ0FBQ2YsV0FBVyxDQUFDLENBQUM7RUFDckpNLFdBQVcsQ0FBQ2EsV0FBVyxDQUFDSCxJQUFJLENBQUM7QUFDN0IsQ0FBQztBQUNGLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFhQyxDQUFDLEVBQUU7RUFDM0JBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNqQixJQUFNdkMsSUFBSSxHQUFHeUIsT0FBTyxDQUFDWCxLQUFLO0VBQzFCLElBQU1iLE9BQU8sR0FBRXVDLFVBQVUsQ0FBQ2QsV0FBVyxDQUFDWixLQUFLLENBQUM7RUFDNUMsSUFBTVgsR0FBRyxHQUFHcUMsVUFBVSxDQUFDWixNQUFNLENBQUNkLEtBQUssQ0FBQztFQUNwQyxJQUFNWixLQUFLLEdBQUdzQyxVQUFVLENBQUNiLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDO0VBQ3hDLElBQUkyQixPQUFPO0VBQ1gsSUFBSUMsU0FBUztFQUNiLElBQUcsQ0FBQ0MsS0FBSyxDQUFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQzBDLEtBQUssQ0FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUN3QyxLQUFLLENBQUN6QyxLQUFLLENBQUMsRUFBQztJQUNsRG9DLE9BQU8sQ0FBQ0MsR0FBRztJQUNYRSxPQUFPLEdBQUd4QyxPQUFPLEdBQUcsQ0FBQyxHQUFHRSxHQUFHLEdBQUcsQ0FBQyxHQUFHRCxLQUFLLEdBQUcsQ0FBQztJQUM1QyxJQUFHdUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtNQUNqQkMsU0FBUyxHQUFHLElBQUlyQyxRQUFRLENBQUNMLElBQUksRUFBQ0MsT0FBTyxFQUFDQyxLQUFLLEVBQUNDLEdBQUcsQ0FBQztJQUVqRCxDQUFDLE1BQUs7TUFFTHVDLFNBQVMsR0FBRyxJQUFJekIsV0FBVyxDQUFDUSxPQUFPLEVBQUN4QixPQUFPLEVBQUNDLEtBQUssRUFBQ0MsR0FBRyxDQUFDO0lBQ3ZEO0lBQ0FOLEtBQUssQ0FBQytDLElBQUksQ0FBQ0YsU0FBUyxDQUFDO0lBQ3JCSixPQUFPLENBQUNDLEdBQUcsQ0FBQzFDLEtBQUssQ0FBQztJQUNsQmdDLGNBQWMsQ0FBQ2EsU0FBUyxDQUFDO0lBQ3pCO0VBQ0QsQ0FBQyxNQUFJO0lBQ0pKLE9BQU8sQ0FBQ08sS0FBSyxDQUFDLDhEQUE4RCxDQUFDO0VBQzlFO0VBQ0E7QUFDQSxDQUFDOztBQUdEckIsU0FBUyxDQUFDc0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFDWCxNQUFNLENBQUM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7VUN6R0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wM19Eemllbl8yLzAxX09iaWVrdG93b3NjLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb29kcyA9IFtdO1xuXG5jbGFzcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wcm90ZWluID0gcHJvdGVpbjtcblx0XHR0aGlzLmNhcmJzID0gY2FyYnM7XG5cdFx0dGhpcy5mYXQgPSBmYXQ7XG5cdH1cbn1cblxuY2xhc3MgRmFzdEZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCl7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN1bW0gPSAwO1xuXG5cdH1cbmdldFN1bW1LY2FsKCl7XG5cdCB0aGlzLnN1bSA9IHRoaXMucHJvdGVpbio0ICt0aGlzLmNhcmJzKjQgKyB0aGlzLmZhdCo5O1xucmV0dXJuIHRoaXMuc3VtO1xufVxuXG59XG5cbmNsYXNzIEZhdEZyZWVGb29kIGV4dGVuZHMgRm9vZCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpe1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdW1tID0gMDtcblxuXHR9XG5nZXRTdW1tS2NhbCgpe1xuXHQgdGhpcy5zdW0gPSB0aGlzLnByb3RlaW4qNCArdGhpcy5jYXJicyo0ICsgdGhpcy5mYXQqOTtcbnJldHVybiB0aGlzLnN1bTtcbn1cbn1cblxuXG5jb25zdCBwcm9kdWN0c1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0cycpO1xuY29uc3QgYnV0dG9uUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bicpO1xuY29uc3QgbmFtZVJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XG5jb25zdCBwcm90ZWluc1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm90ZWlucycpO1xuY29uc3QgY2FyYnNSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FyYnMnKTtcbmNvbnN0IGZhdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXQnKTtcblxuY29uc3QgY29udGV4dENyZWF0b3I9IGZ1bmN0aW9uKG9iail7XG5cblx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdC8vIG15TGkudGV4dENvbnRlbnQ9YCR7b2JqLm5hbWV9IGNvbnNpc3Qgb2YgOiBwcm90ZWluIC0gJHtvYmoucHJvdGVpbn0sIGNhcmJzIC0gJHtvYmouY2FyYnN9ICwgZmF0IC0gJHtvYmouZmF0fSAuIEtjYWwgPSAke29iai5nZXRTdW1tS2NhbCgpfWA7XG5cdG15TGkudGV4dENvbnRlbnQ9b2JqLm5hbWUgKyBcImNvbnNpc3Qgb2YgOiBwcm90ZWluIC0gXCIrIG9iai5wcm90ZWluICsgXCIsIGNhcmJzIC0gXCIgKyBvYmouY2FyYnMgK1wiLCBmYXQgLSBcIiArIG9iai5mYXQgKyBcIi4gS2NhbCA9IFwiICsgb2JqLmdldFN1bW1LY2FsKCk7XG5cdHByb2R1Y3RzUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHR9XG5jb25zdCByZWNlcHQgPSBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRjb25zdCBuYW1lID0gbmFtZVJlZi52YWx1ZTtcblx0Y29uc3QgcHJvdGVpbj0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG5cdGNvbnN0IGZhdCA9IHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKTtcblx0Y29uc3QgY2FyYnMgPSBwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKTtcblx0bGV0IHN1bUtjYWw7XG5cdGxldCBwcm9kQ2xhc3M7XG5cdGlmKCFpc05hTihwcm90ZWluKSAmJiAhaXNOYU4oZmF0KSAmJiAhaXNOYU4oY2FyYnMpKXtcblx0XHRjb25zb2xlLmxvZ1xuXHRcdHN1bUtjYWwgPSBwcm90ZWluICogNCArIGZhdCAqIDkgKyBjYXJicyAqIDQ7XG5cdGlmKHN1bUtjYWwgPiAyNTAgKXtcblx0XHRwcm9kQ2xhc3MgPSBuZXcgRmFzdEZvb2QobmFtZSxwcm90ZWluLGNhcmJzLGZhdCk7XG5cdFx0XG5cdH1lbHNlIHtcblxuXHRcdHByb2RDbGFzcyA9IG5ldyBGYXRGcmVlRm9vZChuYW1lUmVmLHByb3RlaW4sY2FyYnMsZmF0KTtcblx0fVxuXHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdGNvbnNvbGUubG9nKGZvb2RzKTtcblx0Y29udGV4dENyZWF0b3IocHJvZENsYXNzKTtcblx0cmV0dXJuO1xufWVsc2V7XG5cdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcbn1cbi8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbn1cblxuXG5idXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlY2VwdCk7XG4vLyBmdW5jdGlvbiAoZSkge1xuLy8gXHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdGNvbnNvbGUubG9nKHRoaXMpO1xuLy8gXHRjb25zdCBwcm90ZWluPSBwYXJzZUZsb2F0KHByb3RlaW5zUmVmLnZhbHVlKTtcbi8vIFx0bGV0IHByb2RDbGFzcztcbi8vIFx0aWYoIWlzTmFOKHByb3RlaW4pKXtcbi8vIFx0aWYocHJvdGVpbio0ID4gMjUwICl7XG4vLyBcdFx0cHJvZENsYXNzID0gbmV3IEZhc3RGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKSxwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSkpO1xuXHRcdFxuLy8gXHR9ZWxzZSB7XG4vLyBcdFx0cHJvZENsYXNzID0gbmV3IEZhdEZyZWVGb29kKG5hbWVSZWYudmFsdWUscHJvdGVpbixwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKSxwYXJzZUZsb2F0KGZhdFJlZi52YWx1ZSkpO1xuLy8gXHR9XG4vLyBcdGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbi8vIFx0cmV0dXJuO1xuLy8gfWVsc2V7XG4vLyBcdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcbi8vIH1cbi8vIC8vIGZvb2RzLnB1c2gocHJvZENsYXNzKTtcbi8vIH0pO1xuXG5cblxuXG4vLyBidXR0b25SZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYwNzg1M2QwZDg5ZmMxZmU3ZjJjXCIpIl0sIm5hbWVzIjpbImZvb2RzIiwiRm9vZCIsIl9jcmVhdGVDbGFzcyIsIm5hbWUiLCJwcm90ZWluIiwiY2FyYnMiLCJmYXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJGYXN0Rm9vZCIsIl9Gb29kIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwic3VtbSIsImtleSIsInZhbHVlIiwiZ2V0U3VtbUtjYWwiLCJzdW0iLCJGYXRGcmVlRm9vZCIsIl9Gb29kMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJwcm9kdWN0c1JlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvblJlZiIsIm5hbWVSZWYiLCJwcm90ZWluc1JlZiIsImNhcmJzUmVmIiwiZmF0UmVmIiwiY29udGV4dENyZWF0b3IiLCJvYmoiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZWNlcHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicGFyc2VGbG9hdCIsInN1bUtjYWwiLCJwcm9kQ2xhc3MiLCJpc05hTiIsInB1c2giLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9