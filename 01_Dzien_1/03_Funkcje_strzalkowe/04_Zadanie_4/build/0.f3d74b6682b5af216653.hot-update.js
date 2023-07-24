self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (function() {

var _this2 = this;
var myUlRef = document.querySelector('#menu');
var App = function App() {
  this.websites = ["google", "twitter", "facebook"];
  this.links = [];
};
App.prototype.generateLinks = function () {
  var _this = this;
  this.websites.forEach(function (it) {
    // it = `https://${it}.com`;
    _this.links.push("https://".concat(it, ".com"));
  });
};
App.prototype.insertLinks = function () {
  this.links.forEach(function (it) {
    var myLi = document.createElement('li');
    myLi.innerHTML = "<a href =\"".concat(it, "\">").concat(it, "</a>");
    myUlRef.appendChild(myLi);
    // console.log(myLi);
    // console.log(this);
  });
  // this.links.forEach(function (it) {
  // 	const myLi = document.createElement('li');
  // 	myLi.innerHTML = `<a href ="${it}">${it}</a>`;
  // 	myUlRef.appendChild(myLi);
  // 	console.log(this);
  // })
};

var app = new App();
app.generateLinks();
app.insertLinks();

// console.log(app.links);
// console.log(app);

var a = {
  a: 3,
  func: function func() {
    console.log(this.a);
  },
  func1: function func1() {
    console.log(_this2.a);
  }
};
a.func();
a.func1();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf395e8b097b3c2dbbfb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mM2Q3NGI2NjgyYjVhZjIxNjY1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBRS9DLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQWU7RUFDdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztFQUNqRCxJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0FBQ2hCLENBQUM7QUFFREYsR0FBRyxDQUFDRyxTQUFTLENBQUNDLGFBQWEsR0FBRyxZQUFZO0VBQUEsSUFBQUMsS0FBQTtFQUN6QyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUMzQjtJQUNBRixLQUFJLENBQUNILEtBQUssQ0FBQ00sSUFBSSxZQUFBQyxNQUFBLENBQVlGLEVBQUUsU0FBTSxDQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRFAsR0FBRyxDQUFDRyxTQUFTLENBQUNPLFdBQVcsR0FBRyxZQUFZO0VBQ3ZDLElBQUksQ0FBQ1IsS0FBSyxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO0lBQzFCLElBQU1JLElBQUksR0FBR2IsUUFBUSxDQUFDYyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRCxJQUFJLENBQUNFLFNBQVMsaUJBQUFKLE1BQUEsQ0FBZ0JGLEVBQUUsU0FBQUUsTUFBQSxDQUFLRixFQUFFLFNBQU07SUFDN0NWLE9BQU8sQ0FBQ2lCLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBQ3pCO0lBQ0E7RUFDRCxDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRCxDQUFDOztBQUdELElBQU1JLEdBQUcsR0FBRyxJQUFJZixHQUFHLENBQUMsQ0FBQztBQUNyQmUsR0FBRyxDQUFDWCxhQUFhLENBQUMsQ0FBQztBQUNuQlcsR0FBRyxDQUFDTCxXQUFXLENBQUMsQ0FBQzs7QUFFakI7QUFDQTs7QUFFQSxJQUFNTSxDQUFDLEdBQUc7RUFDVEEsQ0FBQyxFQUFFLENBQUM7RUFDSkMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSCxDQUFDLENBQUM7RUFDcEIsQ0FBQztFQUNESSxLQUFLLEVBQUUsU0FBQUEsTUFBQSxFQUFNO0lBQ1pGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxNQUFJLENBQUNMLENBQUMsQ0FBQztFQUNwQjtBQUNELENBQUM7QUFDREEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztBQUNSRCxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ2hEVCIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAxX0R6aWVuXzEvMDNfRnVua2NqZV9zdHJ6YWxrb3dlLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteVVsUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcblxuY29uc3QgQXBwID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzID0gW1wiZ29vZ2xlXCIsIFwidHdpdHRlclwiLCBcImZhY2Vib29rXCJdO1xuXHR0aGlzLmxpbmtzID0gW107XG59O1xuXG5BcHAucHJvdG90eXBlLmdlbmVyYXRlTGlua3MgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMuZm9yRWFjaChpdCA9PiB7XG5cdFx0Ly8gaXQgPSBgaHR0cHM6Ly8ke2l0fS5jb21gO1xuXHRcdHRoaXMubGlua3MucHVzaChgaHR0cHM6Ly8ke2l0fS5jb21gKTtcblx0fSlcbn07XG5cbkFwcC5wcm90b3R5cGUuaW5zZXJ0TGlua3MgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMubGlua3MuZm9yRWFjaCgoaXQpID0+IHtcblx0XHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRteUxpLmlubmVySFRNTCA9IGA8YSBocmVmID1cIiR7aXR9XCI+JHtpdH08L2E+YDtcblx0XHRteVVsUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKG15TGkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9KVxuXHQvLyB0aGlzLmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGl0KSB7XG5cdC8vIFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdC8vIFx0bXlMaS5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdC8vIFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0Ly8gXHRjb25zb2xlLmxvZyh0aGlzKTtcblx0Ly8gfSlcbn07XG5cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmdlbmVyYXRlTGlua3MoKTtcbmFwcC5pbnNlcnRMaW5rcygpO1xuXG4vLyBjb25zb2xlLmxvZyhhcHAubGlua3MpO1xuLy8gY29uc29sZS5sb2coYXBwKTtcblxuY29uc3QgYSA9IHtcblx0YTogMyxcblx0ZnVuYzogZnVuY3Rpb24gKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuYSlcblx0fSxcblx0ZnVuYzE6ICgpID0+IHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLmEpXG5cdH1cbn1cbmEuZnVuYygpO1xuYS5mdW5jMSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNmMzk1ZThiMDk3YjNjMmRiYmZiXCIpIl0sIm5hbWVzIjpbIm15VWxSZWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHAiLCJ3ZWJzaXRlcyIsImxpbmtzIiwicHJvdG90eXBlIiwiZ2VuZXJhdGVMaW5rcyIsIl90aGlzIiwiZm9yRWFjaCIsIml0IiwicHVzaCIsImNvbmNhdCIsImluc2VydExpbmtzIiwibXlMaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImFwcCIsImEiLCJmdW5jIiwiY29uc29sZSIsImxvZyIsImZ1bmMxIiwiX3RoaXMyIl0sInNvdXJjZVJvb3QiOiIifQ==