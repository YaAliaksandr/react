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
    console.log(this);
  });
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
/******/ 	__webpack_require__.h = () => ("f265b9336ae294d4e237")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42Mjc5YTYyOTljMGIyNzE0YWM3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFDdkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7SUFDaEMsSUFBTUksSUFBSSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekNELElBQUksQ0FBQ0UsU0FBUyxpQkFBQUosTUFBQSxDQUFnQkYsRUFBRSxTQUFBRSxNQUFBLENBQUtGLEVBQUUsU0FBTTtJQUM3Q1YsT0FBTyxDQUFDaUIsV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFDekJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNsQixDQUFDLENBQUM7QUFDSCxDQUFDO0FBR0QsSUFBTUMsR0FBRyxHQUFHLElBQUlqQixHQUFHLENBQUMsQ0FBQztBQUNyQmlCLEdBQUcsQ0FBQ2IsYUFBYSxDQUFDLENBQUM7QUFDbkJhLEdBQUcsQ0FBQ1AsV0FBVyxDQUFDLENBQUM7O0FBRWpCO0FBQ0E7Ozs7Ozs7O1VDbkNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDFfRHppZW5fMS8wM19GdW5rY2plX3N0cnphbGtvd2UvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15VWxSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMgPSBbXCJnb29nbGVcIiwgXCJ0d2l0dGVyXCIsIFwiZmFjZWJvb2tcIl07XG5cdHRoaXMubGlua3MgPSBbXTtcbn07XG5cbkFwcC5wcm90b3R5cGUuZ2VuZXJhdGVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcy5mb3JFYWNoKGl0ID0+IHtcblx0XHQvLyBpdCA9IGBodHRwczovLyR7aXR9LmNvbWA7XG5cdFx0dGhpcy5saW5rcy5wdXNoKGBodHRwczovLyR7aXR9LmNvbWApO1xuXHR9KVxufTtcblxuQXBwLnByb3RvdHlwZS5pbnNlcnRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gdGhpcy5saW5rcy5mb3JFYWNoKChpdCkgPT4ge1xuXHQvLyBcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHQvLyBcdG15TGkuaW5uZXJIVE1MID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHQvLyBcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdC8vIFx0Y29uc29sZS5sb2cobXlMaSk7XG5cdC8vIH0pXG5cdHRoaXMubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoaXQpIHtcblx0XHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRteUxpLmlubmVySFRNTCA9IGA8YSBocmVmID1cIiR7aXR9XCI+JHtpdH08L2E+YDtcblx0XHRteVVsUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9KVxufTtcblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuZ2VuZXJhdGVMaW5rcygpO1xuYXBwLmluc2VydExpbmtzKCk7XG5cbi8vIGNvbnNvbGUubG9nKGFwcC5saW5rcyk7XG4vLyBjb25zb2xlLmxvZyhhcHApO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjI2NWI5MzM2YWUyOTRkNGUyMzdcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=