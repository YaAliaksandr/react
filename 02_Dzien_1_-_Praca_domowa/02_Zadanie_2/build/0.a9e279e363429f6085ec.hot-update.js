self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (() => {

var Weather = function Weather(t1, t2, t3) {
  this.temp1 = t1;
  this.temp2 = t2;
  this.temp3 = t3;
};
var ob = new Weather(10, 20, 30);
console.log(ob);
Weather.prototype.getAvgTemperature = function () {
  return (this.temp1 + this.temp2 + this.temp3) / 3;
};
console.log(ob.getAvgTemperature());
var spanRef = document.querySelector('#avg-temp');
spanRef.textContent = ob.getAvgTemperature();
var Basket = function Basket(t1, t2, t3) {
  this.mp1 = t1;
  this.mp2 = t2;
  this.mp3 = t3;
  this.summ = 0;
};
var obBasket = new Basket(1, 2, 3);
Basket.prototype.getAvgTemperature = function () {
  // const middle = (this.mp1 + this.mp2 + this.mp3) / 3;
  this.summ = (this.mp1 + this.mp2 + this.mp3) / 3;
  spanRef.textContent = this.summ;
};
obBasket.getAvgTemperature();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee2fe7b2991841fbdbcf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hOWUyNzllMzYzNDI5ZjYwODVlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQWFDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUU7RUFDckMsSUFBSSxDQUFDQyxLQUFLLEdBQUdILEVBQUU7RUFDZixJQUFJLENBQUNJLEtBQUssR0FBR0gsRUFBRTtFQUNmLElBQUksQ0FBQ0ksS0FBSyxHQUFHSCxFQUFFO0FBQ2hCLENBQUM7QUFJRCxJQUFNSSxFQUFFLEdBQUcsSUFBSVAsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ2xDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDO0FBRWZQLE9BQU8sQ0FBQ1UsU0FBUyxDQUFDQyxpQkFBaUIsR0FBRyxZQUFZO0VBRWpELE9BQU8sQ0FBQyxJQUFJLENBQUNQLEtBQUssR0FBRyxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNDLEtBQUssSUFBSSxDQUFDO0FBQ2xELENBQUM7QUFDREUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEVBQUUsQ0FBQ0ksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0FBQ25DLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDO0FBQ25ERixPQUFPLENBQUNHLFdBQVcsR0FBR1IsRUFBRSxDQUFDSSxpQkFBaUIsQ0FBQyxDQUFDO0FBRzVDLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFNQSxDQUFhZixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFO0VBQ3BDLElBQUksQ0FBQ2MsR0FBRyxHQUFHaEIsRUFBRTtFQUNiLElBQUksQ0FBQ2lCLEdBQUcsR0FBR2hCLEVBQUU7RUFDYixJQUFJLENBQUNpQixHQUFHLEdBQUdoQixFQUFFO0VBQ2IsSUFBSSxDQUFDaUIsSUFBSSxHQUFHLENBQUM7QUFDZCxDQUFDO0FBQ0QsSUFBTUMsUUFBUSxHQUFHLElBQUlMLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwQ0EsTUFBTSxDQUFDTixTQUFTLENBQUNDLGlCQUFpQixHQUFHLFlBQVk7RUFFaEQ7RUFDQSxJQUFJLENBQUNTLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQ0gsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ0MsR0FBRyxJQUFJLENBQUM7RUFDaERQLE9BQU8sQ0FBQ0csV0FBVyxHQUFHLElBQUksQ0FBQ0ssSUFBSTtBQUNoQyxDQUFDO0FBR0RDLFFBQVEsQ0FBQ1YsaUJBQWlCLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDJfRHppZW5fMV8tX1ByYWNhX2RvbW93YS8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV2VhdGhlciA9IGZ1bmN0aW9uICh0MSwgdDIsIHQzKSB7XHJcblx0dGhpcy50ZW1wMSA9IHQxO1xyXG5cdHRoaXMudGVtcDIgPSB0MjtcclxuXHR0aGlzLnRlbXAzID0gdDM7XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgb2IgPSBuZXcgV2VhdGhlcigxMCwgMjAsIDMwKTtcclxuY29uc29sZS5sb2cob2IpO1xyXG5cclxuV2VhdGhlci5wcm90b3R5cGUuZ2V0QXZnVGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdHJldHVybiAodGhpcy50ZW1wMSArIHRoaXMudGVtcDIgKyB0aGlzLnRlbXAzKSAvIDM7XHJcbn1cclxuY29uc29sZS5sb2cob2IuZ2V0QXZnVGVtcGVyYXR1cmUoKSk7XHJcbmNvbnN0IHNwYW5SZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXZnLXRlbXAnKTtcclxuc3BhblJlZi50ZXh0Q29udGVudCA9IG9iLmdldEF2Z1RlbXBlcmF0dXJlKCk7XHJcblxyXG5cclxuY29uc3QgQmFza2V0ID0gZnVuY3Rpb24gKHQxLCB0MiwgdDMpIHtcclxuXHR0aGlzLm1wMSA9IHQxO1xyXG5cdHRoaXMubXAyID0gdDI7XHJcblx0dGhpcy5tcDMgPSB0MztcclxuXHR0aGlzLnN1bW0gPSAwO1xyXG59XHJcbmNvbnN0IG9iQmFza2V0ID0gbmV3IEJhc2tldCgxLCAyLCAzKTtcclxuQmFza2V0LnByb3RvdHlwZS5nZXRBdmdUZW1wZXJhdHVyZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0Ly8gY29uc3QgbWlkZGxlID0gKHRoaXMubXAxICsgdGhpcy5tcDIgKyB0aGlzLm1wMykgLyAzO1xyXG5cdHRoaXMuc3VtbSA9ICh0aGlzLm1wMSArIHRoaXMubXAyICsgdGhpcy5tcDMpIC8gMztcclxuXHRzcGFuUmVmLnRleHRDb250ZW50ID0gdGhpcy5zdW1tO1xyXG59XHJcblxyXG5cclxub2JCYXNrZXQuZ2V0QXZnVGVtcGVyYXR1cmUoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZTJmZTdiMjk5MTg0MWZiZGJjZlwiKSJdLCJuYW1lcyI6WyJXZWF0aGVyIiwidDEiLCJ0MiIsInQzIiwidGVtcDEiLCJ0ZW1wMiIsInRlbXAzIiwib2IiLCJjb25zb2xlIiwibG9nIiwicHJvdG90eXBlIiwiZ2V0QXZnVGVtcGVyYXR1cmUiLCJzcGFuUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJCYXNrZXQiLCJtcDEiLCJtcDIiLCJtcDMiLCJzdW1tIiwib2JCYXNrZXQiXSwic291cmNlUm9vdCI6IiJ9