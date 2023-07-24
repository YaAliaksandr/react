self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (() => {

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
  // this.links.forEach((it) => {
  // 	const myLi = document.createElement('li');
  // 	myLi.innerHTML = `<a href ="${it}">${it}</a>`;
  // 	myUlRef.appendChild(myLi);
  // 	console.log(myLi);
  // })
  this.links.forEach(function (it) {
    var myLi = document.createElement('li');
    myLi.innerHTML = "<a href =\"".concat(it, "\">").concat(it, "</a>");
    myUlRef.appendChild(myLi);
    console.log(myLi);
  });
};

// const Ref = document.querySelector('');

var app = new App();
app.generateLinks();
app.insertLinks();
console.log(app.links);
console.log(app);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b11455d98629463e582a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yODcwNDNmNGFmOTBmYjY1ZDM0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFDdkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7SUFDaEMsSUFBTUksSUFBSSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekNELElBQUksQ0FBQ0UsU0FBUyxpQkFBQUosTUFBQSxDQUFnQkYsRUFBRSxTQUFBRSxNQUFBLENBQUtGLEVBQUUsU0FBTTtJQUM3Q1YsT0FBTyxDQUFDaUIsV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFDekJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUM7RUFDbEIsQ0FBQyxDQUFDO0FBQ0gsQ0FBQzs7QUFFRDs7QUFLQSxJQUFNTSxHQUFHLEdBQUcsSUFBSWpCLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCaUIsR0FBRyxDQUFDYixhQUFhLENBQUMsQ0FBQztBQUNuQmEsR0FBRyxDQUFDUCxXQUFXLENBQUMsQ0FBQztBQUVqQkssT0FBTyxDQUFDQyxHQUFHLENBQUNDLEdBQUcsQ0FBQ2YsS0FBSyxDQUFDO0FBQ3RCYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDOzs7Ozs7OztVQ3ZDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wMV9Eemllbl8xLzAzX0Z1bmtjamVfc3RyemFsa293ZS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlVbFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcyA9IFtcImdvb2dsZVwiLCBcInR3aXR0ZXJcIiwgXCJmYWNlYm9va1wiXTtcblx0dGhpcy5saW5rcyA9IFtdO1xufTtcblxuQXBwLnByb3RvdHlwZS5nZW5lcmF0ZUxpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzLmZvckVhY2goaXQgPT4ge1xuXHRcdC8vIGl0ID0gYGh0dHBzOi8vJHtpdH0uY29tYDtcblx0XHR0aGlzLmxpbmtzLnB1c2goYGh0dHBzOi8vJHtpdH0uY29tYCk7XG5cdH0pXG59O1xuXG5BcHAucHJvdG90eXBlLmluc2VydExpbmtzID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGlzLmxpbmtzLmZvckVhY2goKGl0KSA9PiB7XG5cdC8vIFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdC8vIFx0bXlMaS5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdC8vIFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0Ly8gXHRjb25zb2xlLmxvZyhteUxpKTtcblx0Ly8gfSlcblx0dGhpcy5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChpdCkge1xuXHRcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdG15TGkuaW5uZXJIVE1MID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHRcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdFx0Y29uc29sZS5sb2cobXlMaSk7XG5cdH0pXG59O1xuXG4vLyBjb25zdCBSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcnKTtcblxuXG5cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmdlbmVyYXRlTGlua3MoKTtcbmFwcC5pbnNlcnRMaW5rcygpO1xuXG5jb25zb2xlLmxvZyhhcHAubGlua3MpO1xuY29uc29sZS5sb2coYXBwKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIxMTQ1NWQ5ODYyOTQ2M2U1ODJhXCIpIl0sIm5hbWVzIjpbIm15VWxSZWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHAiLCJ3ZWJzaXRlcyIsImxpbmtzIiwicHJvdG90eXBlIiwiZ2VuZXJhdGVMaW5rcyIsIl90aGlzIiwiZm9yRWFjaCIsIml0IiwicHVzaCIsImNvbmNhdCIsImluc2VydExpbmtzIiwibXlMaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9