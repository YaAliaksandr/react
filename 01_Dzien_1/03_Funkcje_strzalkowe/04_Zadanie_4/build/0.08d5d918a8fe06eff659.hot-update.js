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
/******/ 	__webpack_require__.h = () => ("a5f7358e80a01400333b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOGQ1ZDkxOGE4ZmUwNmVmZjY1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFDdkMsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFDQyxFQUFFLEVBQUs7SUFDMUIsSUFBTUksSUFBSSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekNELElBQUksQ0FBQ0UsU0FBUyxpQkFBQUosTUFBQSxDQUFnQkYsRUFBRSxTQUFBRSxNQUFBLENBQUtGLEVBQUUsU0FBTTtJQUM3Q1YsT0FBTyxDQUFDaUIsV0FBVyxDQUFDSCxJQUFJLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ0gsQ0FBQzs7QUFFRDs7QUFLQSxJQUFNSSxHQUFHLEdBQUcsSUFBSWYsR0FBRyxDQUFDLENBQUM7QUFDckJlLEdBQUcsQ0FBQ1gsYUFBYSxDQUFDLENBQUM7QUFDbkJXLEdBQUcsQ0FBQ0wsV0FBVyxDQUFDLENBQUM7QUFFakJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNiLEtBQUssQ0FBQztBQUN0QmMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQzs7Ozs7Ozs7VUNoQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDFfRHppZW5fMS8wM19GdW5rY2plX3N0cnphbGtvd2UvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15VWxSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMgPSBbXCJnb29nbGVcIiwgXCJ0d2l0dGVyXCIsIFwiZmFjZWJvb2tcIl07XG5cdHRoaXMubGlua3MgPSBbXTtcbn07XG5cbkFwcC5wcm90b3R5cGUuZ2VuZXJhdGVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcy5mb3JFYWNoKGl0ID0+IHtcblx0XHQvLyBpdCA9IGBodHRwczovLyR7aXR9LmNvbWA7XG5cdFx0dGhpcy5saW5rcy5wdXNoKGBodHRwczovLyR7aXR9LmNvbWApO1xuXHR9KVxufTtcblxuQXBwLnByb3RvdHlwZS5pbnNlcnRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5saW5rcy5mb3JFYWNoKChpdCkgPT4ge1xuXHRcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdG15TGkuaW5uZXJIdG1sID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHRcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdH0pXG59O1xuXG4vLyBjb25zdCBSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcnKTtcblxuXG5cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmdlbmVyYXRlTGlua3MoKTtcbmFwcC5pbnNlcnRMaW5rcygpO1xuXG5jb25zb2xlLmxvZyhhcHAubGlua3MpO1xuY29uc29sZS5sb2coYXBwKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE1ZjczNThlODBhMDE0MDAzMzNiXCIpIl0sIm5hbWVzIjpbIm15VWxSZWYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJBcHAiLCJ3ZWJzaXRlcyIsImxpbmtzIiwicHJvdG90eXBlIiwiZ2VuZXJhdGVMaW5rcyIsIl90aGlzIiwiZm9yRWFjaCIsIml0IiwicHVzaCIsImNvbmNhdCIsImluc2VydExpbmtzIiwibXlMaSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckh0bWwiLCJhcHBlbmRDaGlsZCIsImFwcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9