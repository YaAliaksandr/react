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
  var _this2 = this;
  this.links.forEach(function (it) {
    var myLi = document.createElement('li');
    myLi.innerHTML = "<a href =\"".concat(it, "\">").concat(it, "</a>");
    myUlRef.appendChild(myLi);
    // console.log(myLi);
    console.log(_this2);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a3e2d5a91d9d0880776")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZTcyOTk4YzYzNTU4OTY5Y2UwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFBQSxJQUFBQyxNQUFBO0VBQ3ZDLElBQUksQ0FBQ1QsS0FBSyxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO0lBQzFCLElBQU1LLElBQUksR0FBR2QsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRCxJQUFJLENBQUNFLFNBQVMsaUJBQUFMLE1BQUEsQ0FBZ0JGLEVBQUUsU0FBQUUsTUFBQSxDQUFLRixFQUFFLFNBQU07SUFDN0NWLE9BQU8sQ0FBQ2tCLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBQ3pCO0lBQ0FJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixNQUFJLENBQUM7RUFDbEIsQ0FBQyxDQUFDO0VBQ0Y7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0QsQ0FBQzs7QUFHRCxJQUFNTyxHQUFHLEdBQUcsSUFBSWxCLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCa0IsR0FBRyxDQUFDZCxhQUFhLENBQUMsQ0FBQztBQUNuQmMsR0FBRyxDQUFDUixXQUFXLENBQUMsQ0FBQzs7QUFFakI7QUFDQTs7Ozs7Ozs7VUNwQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wMV9Eemllbl8xLzAzX0Z1bmtjamVfc3RyemFsa293ZS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlVbFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcyA9IFtcImdvb2dsZVwiLCBcInR3aXR0ZXJcIiwgXCJmYWNlYm9va1wiXTtcblx0dGhpcy5saW5rcyA9IFtdO1xufTtcblxuQXBwLnByb3RvdHlwZS5nZW5lcmF0ZUxpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzLmZvckVhY2goaXQgPT4ge1xuXHRcdC8vIGl0ID0gYGh0dHBzOi8vJHtpdH0uY29tYDtcblx0XHR0aGlzLmxpbmtzLnB1c2goYGh0dHBzOi8vJHtpdH0uY29tYCk7XG5cdH0pXG59O1xuXG5BcHAucHJvdG90eXBlLmluc2VydExpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmxpbmtzLmZvckVhY2goKGl0KSA9PiB7XG5cdFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bXlMaS5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0XHQvLyBjb25zb2xlLmxvZyhteUxpKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzKTtcblx0fSlcblx0Ly8gdGhpcy5saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChpdCkge1xuXHQvLyBcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHQvLyBcdG15TGkuaW5uZXJIVE1MID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHQvLyBcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdC8vIFx0Y29uc29sZS5sb2codGhpcyk7XG5cdC8vIH0pXG59O1xuXG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5nZW5lcmF0ZUxpbmtzKCk7XG5hcHAuaW5zZXJ0TGlua3MoKTtcblxuLy8gY29uc29sZS5sb2coYXBwLmxpbmtzKTtcbi8vIGNvbnNvbGUubG9nKGFwcCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYTNlMmQ1YTkxZDlkMDg4MDc3NlwiKSJdLCJuYW1lcyI6WyJteVVsUmVmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQXBwIiwid2Vic2l0ZXMiLCJsaW5rcyIsInByb3RvdHlwZSIsImdlbmVyYXRlTGlua3MiLCJfdGhpcyIsImZvckVhY2giLCJpdCIsInB1c2giLCJjb25jYXQiLCJpbnNlcnRMaW5rcyIsIl90aGlzMiIsIm15TGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==