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
    console.log(myLi);
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
/******/ 	__webpack_require__.h = () => ("8e72998c63558969ce0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMjY1YjkzMzZhZTI5NGQ0ZTIzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFBQSxJQUFBQyxNQUFBO0VBQ3ZDLElBQUksQ0FBQ1QsS0FBSyxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO0lBQzFCLElBQU1LLElBQUksR0FBR2QsUUFBUSxDQUFDZSxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRCxJQUFJLENBQUNFLFNBQVMsaUJBQUFMLE1BQUEsQ0FBZ0JGLEVBQUUsU0FBQUUsTUFBQSxDQUFLRixFQUFFLFNBQU07SUFDN0NWLE9BQU8sQ0FBQ2tCLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBQ3pCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDO0lBQ2pCSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sTUFBSSxDQUFDO0VBQ2xCLENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNELENBQUM7O0FBR0QsSUFBTU8sR0FBRyxHQUFHLElBQUlsQixHQUFHLENBQUMsQ0FBQztBQUNyQmtCLEdBQUcsQ0FBQ2QsYUFBYSxDQUFDLENBQUM7QUFDbkJjLEdBQUcsQ0FBQ1IsV0FBVyxDQUFDLENBQUM7O0FBRWpCO0FBQ0E7Ozs7Ozs7O1VDcENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDFfRHppZW5fMS8wM19GdW5rY2plX3N0cnphbGtvd2UvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15VWxSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMgPSBbXCJnb29nbGVcIiwgXCJ0d2l0dGVyXCIsIFwiZmFjZWJvb2tcIl07XG5cdHRoaXMubGlua3MgPSBbXTtcbn07XG5cbkFwcC5wcm90b3R5cGUuZ2VuZXJhdGVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcy5mb3JFYWNoKGl0ID0+IHtcblx0XHQvLyBpdCA9IGBodHRwczovLyR7aXR9LmNvbWA7XG5cdFx0dGhpcy5saW5rcy5wdXNoKGBodHRwczovLyR7aXR9LmNvbWApO1xuXHR9KVxufTtcblxuQXBwLnByb3RvdHlwZS5pbnNlcnRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5saW5rcy5mb3JFYWNoKChpdCkgPT4ge1xuXHRcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdG15TGkuaW5uZXJIVE1MID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHRcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdFx0Y29uc29sZS5sb2cobXlMaSk7XG5cdFx0Y29uc29sZS5sb2codGhpcyk7XG5cdH0pXG5cdC8vIHRoaXMubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoaXQpIHtcblx0Ly8gXHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0Ly8gXHRteUxpLmlubmVySFRNTCA9IGA8YSBocmVmID1cIiR7aXR9XCI+JHtpdH08L2E+YDtcblx0Ly8gXHRteVVsUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHQvLyB9KVxufTtcblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuZ2VuZXJhdGVMaW5rcygpO1xuYXBwLmluc2VydExpbmtzKCk7XG5cbi8vIGNvbnNvbGUubG9nKGFwcC5saW5rcyk7XG4vLyBjb25zb2xlLmxvZyhhcHApO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGU3Mjk5OGM2MzU1ODk2OWNlMGZcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJfdGhpczIiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=