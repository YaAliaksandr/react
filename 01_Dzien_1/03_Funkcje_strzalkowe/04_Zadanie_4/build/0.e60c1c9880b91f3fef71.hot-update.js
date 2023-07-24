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
    console.log(this);
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
/******/ 	__webpack_require__.h = () => ("f3d74b6682b5af216653")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lNjBjMWM5ODgwYjkxZjNmZWY3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBRS9DLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQWU7RUFDdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztFQUNqRCxJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0FBQ2hCLENBQUM7QUFFREYsR0FBRyxDQUFDRyxTQUFTLENBQUNDLGFBQWEsR0FBRyxZQUFZO0VBQUEsSUFBQUMsS0FBQTtFQUN6QyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUMzQjtJQUNBRixLQUFJLENBQUNILEtBQUssQ0FBQ00sSUFBSSxZQUFBQyxNQUFBLENBQVlGLEVBQUUsU0FBTSxDQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRFAsR0FBRyxDQUFDRyxTQUFTLENBQUNPLFdBQVcsR0FBRyxZQUFZO0VBQ3ZDLElBQUksQ0FBQ1IsS0FBSyxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO0lBQzFCLElBQU1JLElBQUksR0FBR2IsUUFBUSxDQUFDYyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRCxJQUFJLENBQUNFLFNBQVMsaUJBQUFKLE1BQUEsQ0FBZ0JGLEVBQUUsU0FBQUUsTUFBQSxDQUFLRixFQUFFLFNBQU07SUFDN0NWLE9BQU8sQ0FBQ2lCLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBQ3pCO0lBQ0E7RUFDRCxDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRCxDQUFDOztBQUdELElBQU1JLEdBQUcsR0FBRyxJQUFJZixHQUFHLENBQUMsQ0FBQztBQUNyQmUsR0FBRyxDQUFDWCxhQUFhLENBQUMsQ0FBQztBQUNuQlcsR0FBRyxDQUFDTCxXQUFXLENBQUMsQ0FBQzs7QUFFakI7QUFDQTs7QUFFQSxJQUFNTSxDQUFDLEdBQUc7RUFDVEEsQ0FBQyxFQUFFLENBQUM7RUFDSkMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBQ2xCLENBQUM7RUFDREMsS0FBSyxFQUFFLFNBQUFBLE1BQUEsRUFBTTtJQUNaRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsTUFBSSxDQUFDTCxDQUFDLENBQUM7RUFDcEI7QUFDRCxDQUFDO0FBQ0RBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7QUFDUkQsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoRFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wMV9Eemllbl8xLzAzX0Z1bmtjamVfc3RyemFsa293ZS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlVbFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcyA9IFtcImdvb2dsZVwiLCBcInR3aXR0ZXJcIiwgXCJmYWNlYm9va1wiXTtcblx0dGhpcy5saW5rcyA9IFtdO1xufTtcblxuQXBwLnByb3RvdHlwZS5nZW5lcmF0ZUxpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzLmZvckVhY2goaXQgPT4ge1xuXHRcdC8vIGl0ID0gYGh0dHBzOi8vJHtpdH0uY29tYDtcblx0XHR0aGlzLmxpbmtzLnB1c2goYGh0dHBzOi8vJHtpdH0uY29tYCk7XG5cdH0pXG59O1xuXG5BcHAucHJvdG90eXBlLmluc2VydExpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmxpbmtzLmZvckVhY2goKGl0KSA9PiB7XG5cdFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bXlMaS5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0XHQvLyBjb25zb2xlLmxvZyhteUxpKTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzKTtcblx0fSlcblx0Ly8gdGhpcy5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChpdCkge1xuXHQvLyBcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHQvLyBcdG15TGkuaW5uZXJIVE1MID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHQvLyBcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdC8vIFx0Y29uc29sZS5sb2codGhpcyk7XG5cdC8vIH0pXG59O1xuXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5nZW5lcmF0ZUxpbmtzKCk7XG5hcHAuaW5zZXJ0TGlua3MoKTtcblxuLy8gY29uc29sZS5sb2coYXBwLmxpbmtzKTtcbi8vIGNvbnNvbGUubG9nKGFwcCk7XG5cbmNvbnN0IGEgPSB7XG5cdGE6IDMsXG5cdGZ1bmM6IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzKVxuXHR9LFxuXHRmdW5jMTogKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuYSlcblx0fVxufVxuYS5mdW5jKCk7XG5hLmZ1bmMxKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjNkNzRiNjY4MmI1YWYyMTY2NTNcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYXBwIiwiYSIsImZ1bmMiLCJjb25zb2xlIiwibG9nIiwiZnVuYzEiLCJfdGhpczIiXSwic291cmNlUm9vdCI6IiJ9