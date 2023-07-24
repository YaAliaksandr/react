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
  this.links.forEach(function (it) {
    var myLi = document.createElement('li');
    myLi.innerHtml = "<a href =\"".concat(it, "\">").concat(it, "</a>");
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
/******/ 	__webpack_require__.h = () => ("ba021bf6d0e42999f99b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNWY3MzU4ZTgwYTAxNDAwMzMzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFDdkMsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFDQyxFQUFFLEVBQUs7SUFDMUIsSUFBTUksSUFBSSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekNELElBQUksQ0FBQ0UsU0FBUyxpQkFBQUosTUFBQSxDQUFnQkYsRUFBRSxTQUFBRSxNQUFBLENBQUtGLEVBQUUsU0FBTTtJQUM3Q1YsT0FBTyxDQUFDaUIsV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFDekJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUM7RUFDbEIsQ0FBQyxDQUFDO0FBQ0gsQ0FBQzs7QUFFRDs7QUFLQSxJQUFNTSxHQUFHLEdBQUcsSUFBSWpCLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCaUIsR0FBRyxDQUFDYixhQUFhLENBQUMsQ0FBQztBQUNuQmEsR0FBRyxDQUFDUCxXQUFXLENBQUMsQ0FBQztBQUVqQkssT0FBTyxDQUFDQyxHQUFHLENBQUNDLEdBQUcsQ0FBQ2YsS0FBSyxDQUFDO0FBQ3RCYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDOzs7Ozs7OztVQ2pDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wMV9Eemllbl8xLzAzX0Z1bmtjamVfc3RyemFsa293ZS8wNF9aYWRhbmllXzQvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlVbFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5cbmNvbnN0IEFwcCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcyA9IFtcImdvb2dsZVwiLCBcInR3aXR0ZXJcIiwgXCJmYWNlYm9va1wiXTtcblx0dGhpcy5saW5rcyA9IFtdO1xufTtcblxuQXBwLnByb3RvdHlwZS5nZW5lcmF0ZUxpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzLmZvckVhY2goaXQgPT4ge1xuXHRcdC8vIGl0ID0gYGh0dHBzOi8vJHtpdH0uY29tYDtcblx0XHR0aGlzLmxpbmtzLnB1c2goYGh0dHBzOi8vJHtpdH0uY29tYCk7XG5cdH0pXG59O1xuXG5BcHAucHJvdG90eXBlLmluc2VydExpbmtzID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmxpbmtzLmZvckVhY2goKGl0KSA9PiB7XG5cdFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bXlMaS5pbm5lckh0bWwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0XHRjb25zb2xlLmxvZyhteUxpKTtcblx0fSlcbn07XG5cbi8vIGNvbnN0IFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJycpO1xuXG5cblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuZ2VuZXJhdGVMaW5rcygpO1xuYXBwLmluc2VydExpbmtzKCk7XG5cbmNvbnNvbGUubG9nKGFwcC5saW5rcyk7XG5jb25zb2xlLmxvZyhhcHApO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmEwMjFiZjZkMGU0Mjk5OWY5OWJcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySHRtbCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=