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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("538f9386d2f1e38a437a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMyQyxLQUFLLENBQUN6QyxHQUFHLENBQUMsSUFBSSxDQUFDeUMsS0FBSyxDQUFDMUMsS0FBSyxDQUFDLEVBQUU7SUFDcERxQyxPQUFPLENBQUNDLEdBQUc7SUFDWEUsT0FBTyxHQUFHekMsT0FBTyxHQUFHLENBQUMsR0FBR0UsR0FBRyxHQUFHLENBQUMsR0FBR0QsS0FBSyxHQUFHLENBQUM7SUFDM0MsSUFBSXdDLE9BQU8sR0FBRyxHQUFHLEVBQUU7TUFDbEJDLFNBQVMsR0FBRyxJQUFJdEMsUUFBUSxDQUFDTCxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxHQUFHLENBQUM7TUFDbkROLEtBQUssQ0FBQ2dELElBQUksQ0FBQ0YsU0FBUyxDQUFDO01BQ3JCSixPQUFPLENBQUNDLEdBQUcsQ0FBQzNDLEtBQUssQ0FBQztNQUNsQmdDLGNBQWMsQ0FBQ2MsU0FBUyxDQUFDO0lBQzFCLENBQUMsTUFBTTtNQUVOQSxTQUFTLEdBQUcsSUFBSTFCLFdBQVcsQ0FBQ2pCLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsQ0FBQztNQUN0RE4sS0FBSyxDQUFDZ0QsSUFBSSxDQUFDRixTQUFTLENBQUM7TUFDckJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDM0MsS0FBSyxDQUFDO01BQ2xCZ0MsY0FBYyxDQUFDYyxTQUFTLENBQUM7SUFDMUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNELENBQUMsTUFBTTtJQUNOSixPQUFPLENBQUNPLEtBQUssQ0FBQyw4REFBOEQsQ0FBQztFQUM5RTtBQUVELENBQUM7QUFHRHRCLFNBQVMsQ0FBQ3VCLGdCQUFnQixDQUFDLE9BQU8sRUFBRVgsTUFBTSxDQUFDOzs7Ozs7OztVQ3ZGM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wM19Eemllbl8yLzAxX09iaWVrdG93b3NjLzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb29kcyA9IFtdO1xuXG5jbGFzcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5wcm90ZWluID0gcHJvdGVpbjtcblx0XHR0aGlzLmNhcmJzID0gY2FyYnM7XG5cdFx0dGhpcy5mYXQgPSBmYXQ7XG5cdH1cbn1cblxuY2xhc3MgRmFzdEZvb2QgZXh0ZW5kcyBGb29kIHtcblx0Y29uc3RydWN0b3IobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCkge1xuXHRcdHN1cGVyKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpO1xuXHRcdHRoaXMuc3VtbSA9IDA7XG5cblx0fVxuXHRnZXRTdW1tS2NhbCgpIHtcblx0XHR0aGlzLnN1bSA9IHRoaXMucHJvdGVpbiAqIDQgKyB0aGlzLmNhcmJzICogNCArIHRoaXMuZmF0ICogOTtcblx0XHRyZXR1cm4gdGhpcy5zdW07XG5cdH1cblxufVxuXG5jbGFzcyBGYXRGcmVlRm9vZCBleHRlbmRzIEZvb2Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KSB7XG5cdFx0c3VwZXIobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCk7XG5cdFx0dGhpcy5zdW1tID0gMDtcblxuXHR9XG5cdGdldFN1bW1LY2FsKCkge1xuXHRcdHRoaXMuc3VtID0gdGhpcy5wcm90ZWluICogNCArIHRoaXMuY2FyYnMgKiA0ICsgdGhpcy5mYXQgKiA5O1xuXHRcdHJldHVybiB0aGlzLnN1bTtcblx0fVxufVxuXG5cbmNvbnN0IHByb2R1Y3RzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3RzJyk7XG5jb25zdCBidXR0b25SZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuJyk7XG5jb25zdCBuYW1lUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcbmNvbnN0IHByb3RlaW5zUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb3RlaW5zJyk7XG5jb25zdCBjYXJic1JlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJicycpO1xuY29uc3QgZmF0UmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZhdCcpO1xuXG5jb25zdCBjb250ZXh0Q3JlYXRvciA9IGZ1bmN0aW9uIChvYmopIHtcblxuXHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bXlMaS50ZXh0Q29udGVudCA9IGAke29iai5uYW1lfSBjb25zaXN0IG9mIDogcHJvdGVpbiAtICR7b2JqLnByb3RlaW59LCBjYXJicyAtICR7b2JqLmNhcmJzfSAsIGZhdCAtICR7b2JqLmZhdH0gLiBLY2FsID0gJHtvYmouZ2V0U3VtbUtjYWwoKX1gO1xuXHQvLyBteUxpLnRleHRDb250ZW50PW9iai5uYW1lICsgXCJjb25zaXN0IG9mIDogcHJvdGVpbiAtIFwiKyBvYmoucHJvdGVpbiArIFwiLCBjYXJicyAtIFwiICsgb2JqLmNhcmJzICtcIiwgZmF0IC0gXCIgKyBvYmouZmF0ICsgXCIuIEtjYWwgPSBcIiArIG9iai5nZXRTdW1tS2NhbCgpO1xuXHRwcm9kdWN0c1JlZi5hcHBlbmRDaGlsZChteUxpKTtcbn1cbmNvbnN0IHJlY2VwdCA9IGZ1bmN0aW9uIChlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0Y29uc29sZS5sb2codGhpcyk7XG5cdGNvbnN0IG5hbWUgPSBuYW1lUmVmLnZhbHVlO1xuXHRjb25zdCBwcm90ZWluID0gcGFyc2VGbG9hdChwcm90ZWluc1JlZi52YWx1ZSk7XG5cdGNvbnN0IGZhdCA9IHBhcnNlRmxvYXQoZmF0UmVmLnZhbHVlKTtcblx0Y29uc3QgY2FyYnMgPSBwYXJzZUZsb2F0KGNhcmJzUmVmLnZhbHVlKTtcblx0Y29uc29sZS5sb2coYG5hbWUgPT09PSAke25hbWV9YClcblx0bGV0IHN1bUtjYWw7XG5cdGxldCBwcm9kQ2xhc3M7XG5cdGlmICghaXNOYU4ocHJvdGVpbikgJiYgIWlzTmFOKGZhdCkgJiYgIWlzTmFOKGNhcmJzKSkge1xuXHRcdGNvbnNvbGUubG9nXG5cdFx0c3VtS2NhbCA9IHByb3RlaW4gKiA0ICsgZmF0ICogOSArIGNhcmJzICogNDtcblx0XHRpZiAoc3VtS2NhbCA+IDI1MCkge1xuXHRcdFx0cHJvZENsYXNzID0gbmV3IEZhc3RGb29kKG5hbWUsIHByb3RlaW4sIGNhcmJzLCBmYXQpO1xuXHRcdFx0Zm9vZHMucHVzaChwcm9kQ2xhc3MpO1xuXHRcdFx0Y29uc29sZS5sb2coZm9vZHMpO1xuXHRcdFx0Y29udGV4dENyZWF0b3IocHJvZENsYXNzKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRwcm9kQ2xhc3MgPSBuZXcgRmF0RnJlZUZvb2QobmFtZSwgcHJvdGVpbiwgY2FyYnMsIGZhdCk7XG5cdFx0XHRmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdFx0XHRjb25zb2xlLmxvZyhmb29kcyk7XG5cdFx0XHRjb250ZXh0Q3JlYXRvcihwcm9kQ2xhc3MpO1xuXHRcdH1cblx0XHQvLyBmb29kcy5wdXNoKHByb2RDbGFzcyk7XG5cdFx0Ly8gY29uc29sZS5sb2coZm9vZHMpO1xuXHRcdC8vIGNvbnRleHRDcmVhdG9yKHByb2RDbGFzcyk7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJVbmNvcnJlY3QgdmFsdWUgb2YgUHJvdGVpbnMsIHBsZWFzZSBjaGVjayB5b3VyIHJlY2VwdCBhZ2Fpbi5cIilcblx0fVxuXG59XG5cblxuYnV0dG9uUmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVjZXB0KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUzOGY5Mzg2ZDJmMWUzOGE0MzdhXCIpIl0sIm5hbWVzIjpbImZvb2RzIiwiRm9vZCIsIl9jcmVhdGVDbGFzcyIsIm5hbWUiLCJwcm90ZWluIiwiY2FyYnMiLCJmYXQiLCJfY2xhc3NDYWxsQ2hlY2siLCJGYXN0Rm9vZCIsIl9Gb29kIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwic3VtbSIsImtleSIsInZhbHVlIiwiZ2V0U3VtbUtjYWwiLCJzdW0iLCJGYXRGcmVlRm9vZCIsIl9Gb29kMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJwcm9kdWN0c1JlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvblJlZiIsIm5hbWVSZWYiLCJwcm90ZWluc1JlZiIsImNhcmJzUmVmIiwiZmF0UmVmIiwiY29udGV4dENyZWF0b3IiLCJvYmoiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJyZWNlcHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicGFyc2VGbG9hdCIsInN1bUtjYWwiLCJwcm9kQ2xhc3MiLCJpc05hTiIsInB1c2giLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9