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
var ds = function ds(sd) {
  console.log(_this2.a);
};
ds(a);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7f4dd0a2499d54c5f73a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZjM5NWU4YjA5N2IzYzJkYmJmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0FBRS9DLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQWU7RUFDdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztFQUNqRCxJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO0FBQ2hCLENBQUM7QUFFREYsR0FBRyxDQUFDRyxTQUFTLENBQUNDLGFBQWEsR0FBRyxZQUFZO0VBQUEsSUFBQUMsS0FBQTtFQUN6QyxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUMzQjtJQUNBRixLQUFJLENBQUNILEtBQUssQ0FBQ00sSUFBSSxZQUFBQyxNQUFBLENBQVlGLEVBQUUsU0FBTSxDQUFDO0VBQ3JDLENBQUMsQ0FBQztBQUNILENBQUM7QUFFRFAsR0FBRyxDQUFDRyxTQUFTLENBQUNPLFdBQVcsR0FBRyxZQUFZO0VBQ3ZDLElBQUksQ0FBQ1IsS0FBSyxDQUFDSSxPQUFPLENBQUMsVUFBQ0MsRUFBRSxFQUFLO0lBQzFCLElBQU1JLElBQUksR0FBR2IsUUFBUSxDQUFDYyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3pDRCxJQUFJLENBQUNFLFNBQVMsaUJBQUFKLE1BQUEsQ0FBZ0JGLEVBQUUsU0FBQUUsTUFBQSxDQUFLRixFQUFFLFNBQU07SUFDN0NWLE9BQU8sQ0FBQ2lCLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0lBQ3pCO0lBQ0E7RUFDRCxDQUFDLENBQUM7RUFDRjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDRCxDQUFDOztBQUdELElBQU1JLEdBQUcsR0FBRyxJQUFJZixHQUFHLENBQUMsQ0FBQztBQUNyQmUsR0FBRyxDQUFDWCxhQUFhLENBQUMsQ0FBQztBQUNuQlcsR0FBRyxDQUFDTCxXQUFXLENBQUMsQ0FBQzs7QUFFakI7QUFDQTs7QUFFQSxJQUFNTSxDQUFDLEdBQUc7RUFDVEEsQ0FBQyxFQUFFLENBQUM7RUFDSkMsSUFBSSxFQUFFLFNBQUFBLEtBQUEsRUFBWTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDSCxDQUFDLENBQUM7RUFDcEIsQ0FBQztFQUNESSxLQUFLLEVBQUUsU0FBQUEsTUFBQSxFQUFNO0lBQ1pGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxNQUFJLENBQUNMLENBQUMsQ0FBQztFQUNwQjtBQUNELENBQUM7QUFDREEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQztBQUNSRCxDQUFDLENBQUNJLEtBQUssQ0FBQyxDQUFDO0FBQ1QsSUFBTUUsRUFBRSxHQUFHLFNBQUxBLEVBQUVBLENBQUlDLEVBQUUsRUFBSztFQUNsQkwsT0FBTyxDQUFDQyxHQUFHLENBQUNFLE1BQUksQ0FBQ0wsQ0FBQyxDQUFDO0FBQ3BCLENBQUM7QUFDRE0sRUFBRSxDQUFDTixDQUFDLENBQUM7Ozs7Ozs7O1VDcERMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDFfRHppZW5fMS8wM19GdW5rY2plX3N0cnphbGtvd2UvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG15VWxSZWYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuXG5jb25zdCBBcHAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMgPSBbXCJnb29nbGVcIiwgXCJ0d2l0dGVyXCIsIFwiZmFjZWJvb2tcIl07XG5cdHRoaXMubGlua3MgPSBbXTtcbn07XG5cbkFwcC5wcm90b3R5cGUuZ2VuZXJhdGVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy53ZWJzaXRlcy5mb3JFYWNoKGl0ID0+IHtcblx0XHQvLyBpdCA9IGBodHRwczovLyR7aXR9LmNvbWA7XG5cdFx0dGhpcy5saW5rcy5wdXNoKGBodHRwczovLyR7aXR9LmNvbWApO1xuXHR9KVxufTtcblxuQXBwLnByb3RvdHlwZS5pbnNlcnRMaW5rcyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5saW5rcy5mb3JFYWNoKChpdCkgPT4ge1xuXHRcdGNvbnN0IG15TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdG15TGkuaW5uZXJIVE1MID0gYDxhIGhyZWYgPVwiJHtpdH1cIj4ke2l0fTwvYT5gO1xuXHRcdG15VWxSZWYuYXBwZW5kQ2hpbGQobXlMaSk7XG5cdFx0Ly8gY29uc29sZS5sb2cobXlMaSk7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcyk7XG5cdH0pXG5cdC8vIHRoaXMubGlua3MuZm9yRWFjaChmdW5jdGlvbiAoaXQpIHtcblx0Ly8gXHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0Ly8gXHRteUxpLmlubmVySFRNTCA9IGA8YSBocmVmID1cIiR7aXR9XCI+JHtpdH08L2E+YDtcblx0Ly8gXHRteVVsUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHQvLyBcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHQvLyB9KVxufTtcblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuZ2VuZXJhdGVMaW5rcygpO1xuYXBwLmluc2VydExpbmtzKCk7XG5cbi8vIGNvbnNvbGUubG9nKGFwcC5saW5rcyk7XG4vLyBjb25zb2xlLmxvZyhhcHApO1xuXG5jb25zdCBhID0ge1xuXHRhOiAzLFxuXHRmdW5jOiBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5hKVxuXHR9LFxuXHRmdW5jMTogKCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuYSlcblx0fVxufVxuYS5mdW5jKCk7XG5hLmZ1bmMxKCk7XG5jb25zdCBkcyA9IChzZCkgPT4ge1xuXHRjb25zb2xlLmxvZyh0aGlzLmEpO1xufVxuZHMoYSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Y0ZGQwYTI0OTlkNTRjNWY3M2FcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYXBwIiwiYSIsImZ1bmMiLCJjb25zb2xlIiwibG9nIiwiZnVuYzEiLCJfdGhpczIiLCJkcyIsInNkIl0sInNvdXJjZVJvb3QiOiIifQ==