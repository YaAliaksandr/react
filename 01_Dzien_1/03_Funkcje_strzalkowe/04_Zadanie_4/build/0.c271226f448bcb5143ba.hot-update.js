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
/******/ 	__webpack_require__.h = () => ("6279a6299c0b2714ac76")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMjcxMjI2ZjQ0OGJjYjUxNDNiYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFDdkM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFVQyxFQUFFLEVBQUU7SUFDaEMsSUFBTUksSUFBSSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekNELElBQUksQ0FBQ0UsU0FBUyxpQkFBQUosTUFBQSxDQUFnQkYsRUFBRSxTQUFBRSxNQUFBLENBQUtGLEVBQUUsU0FBTTtJQUM3Q1YsT0FBTyxDQUFDaUIsV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFDekJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztFQUNsQixDQUFDLENBQUM7QUFDSCxDQUFDOztBQUVEOztBQUtBLElBQU1DLEdBQUcsR0FBRyxJQUFJakIsR0FBRyxDQUFDLENBQUM7QUFDckJpQixHQUFHLENBQUNiLGFBQWEsQ0FBQyxDQUFDO0FBQ25CYSxHQUFHLENBQUNQLFdBQVcsQ0FBQyxDQUFDO0FBRWpCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDZixLQUFLLENBQUM7QUFDdEJhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLENBQUM7Ozs7Ozs7O1VDdkNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAxX0R6aWVuXzEvMDNfRnVua2NqZV9zdHJ6YWxrb3dlLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteVVsUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcblxuY29uc3QgQXBwID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzID0gW1wiZ29vZ2xlXCIsIFwidHdpdHRlclwiLCBcImZhY2Vib29rXCJdO1xuXHR0aGlzLmxpbmtzID0gW107XG59O1xuXG5BcHAucHJvdG90eXBlLmdlbmVyYXRlTGlua3MgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMuZm9yRWFjaChpdCA9PiB7XG5cdFx0Ly8gaXQgPSBgaHR0cHM6Ly8ke2l0fS5jb21gO1xuXHRcdHRoaXMubGlua3MucHVzaChgaHR0cHM6Ly8ke2l0fS5jb21gKTtcblx0fSlcbn07XG5cbkFwcC5wcm90b3R5cGUuaW5zZXJ0TGlua3MgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoaXMubGlua3MuZm9yRWFjaCgoaXQpID0+IHtcblx0Ly8gXHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0Ly8gXHRteUxpLmlubmVySFRNTCA9IGA8YSBocmVmID1cIiR7aXR9XCI+JHtpdH08L2E+YDtcblx0Ly8gXHRteVVsUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHQvLyBcdGNvbnNvbGUubG9nKG15TGkpO1xuXHQvLyB9KVxuXHR0aGlzLmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGl0KSB7XG5cdFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bXlMaS5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzKTtcblx0fSlcbn07XG5cbi8vIGNvbnN0IFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJycpO1xuXG5cblxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuZ2VuZXJhdGVMaW5rcygpO1xuYXBwLmluc2VydExpbmtzKCk7XG5cbmNvbnNvbGUubG9nKGFwcC5saW5rcyk7XG5jb25zb2xlLmxvZyhhcHApO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjI3OWE2Mjk5YzBiMjcxNGFjNzZcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJzb3VyY2VSb290IjoiIn0=