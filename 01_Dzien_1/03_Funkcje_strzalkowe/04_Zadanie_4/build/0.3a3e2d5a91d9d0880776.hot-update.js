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
  }
  // func: ()=>{
  // 	console.log(this)
  // }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b06da5139ce18bc77424")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zYTNlMmQ1YTkxZDlkMDg4MDc3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBZTtFQUN2QixJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDO0VBQ2pELElBQUksQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7QUFDaEIsQ0FBQztBQUVERixHQUFHLENBQUNHLFNBQVMsQ0FBQ0MsYUFBYSxHQUFHLFlBQVk7RUFBQSxJQUFBQyxLQUFBO0VBQ3pDLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQzNCO0lBQ0FGLEtBQUksQ0FBQ0gsS0FBSyxDQUFDTSxJQUFJLFlBQUFDLE1BQUEsQ0FBWUYsRUFBRSxTQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUVEUCxHQUFHLENBQUNHLFNBQVMsQ0FBQ08sV0FBVyxHQUFHLFlBQVk7RUFDdkMsSUFBSSxDQUFDUixLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFDQyxFQUFFLEVBQUs7SUFDMUIsSUFBTUksSUFBSSxHQUFHYixRQUFRLENBQUNjLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDekNELElBQUksQ0FBQ0UsU0FBUyxpQkFBQUosTUFBQSxDQUFnQkYsRUFBRSxTQUFBRSxNQUFBLENBQUtGLEVBQUUsU0FBTTtJQUM3Q1YsT0FBTyxDQUFDaUIsV0FBVyxDQUFDSCxJQUFJLENBQUM7SUFDekI7SUFDQTtFQUNELENBQUMsQ0FBQztFQUNGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNELENBQUM7O0FBR0QsSUFBTUksR0FBRyxHQUFHLElBQUlmLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCZSxHQUFHLENBQUNYLGFBQWEsQ0FBQyxDQUFDO0FBQ25CVyxHQUFHLENBQUNMLFdBQVcsQ0FBQyxDQUFDOztBQUVqQjtBQUNBOztBQUVBLElBQU1NLENBQUMsR0FBRztFQUNUQSxDQUFDLEVBQUUsQ0FBQztFQUNKQyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO0lBQ2pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7RUFDbEI7RUFDQTtFQUNBO0VBQ0E7QUFDRCxDQUFDOzs7Ozs7OztVQzlDRCIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAxX0R6aWVuXzEvMDNfRnVua2NqZV9zdHJ6YWxrb3dlLzA0X1phZGFuaWVfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBteVVsUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcblxuY29uc3QgQXBwID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLndlYnNpdGVzID0gW1wiZ29vZ2xlXCIsIFwidHdpdHRlclwiLCBcImZhY2Vib29rXCJdO1xuXHR0aGlzLmxpbmtzID0gW107XG59O1xuXG5BcHAucHJvdG90eXBlLmdlbmVyYXRlTGlua3MgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMud2Vic2l0ZXMuZm9yRWFjaChpdCA9PiB7XG5cdFx0Ly8gaXQgPSBgaHR0cHM6Ly8ke2l0fS5jb21gO1xuXHRcdHRoaXMubGlua3MucHVzaChgaHR0cHM6Ly8ke2l0fS5jb21gKTtcblx0fSlcbn07XG5cbkFwcC5wcm90b3R5cGUuaW5zZXJ0TGlua3MgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMubGlua3MuZm9yRWFjaCgoaXQpID0+IHtcblx0XHRjb25zdCBteUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRteUxpLmlubmVySFRNTCA9IGA8YSBocmVmID1cIiR7aXR9XCI+JHtpdH08L2E+YDtcblx0XHRteVVsUmVmLmFwcGVuZENoaWxkKG15TGkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKG15TGkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXHR9KVxuXHQvLyB0aGlzLmxpbmtzLmZvckVhY2goZnVuY3Rpb24gKGl0KSB7XG5cdC8vIFx0Y29uc3QgbXlMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdC8vIFx0bXlMaS5pbm5lckhUTUwgPSBgPGEgaHJlZiA9XCIke2l0fVwiPiR7aXR9PC9hPmA7XG5cdC8vIFx0bXlVbFJlZi5hcHBlbmRDaGlsZChteUxpKTtcblx0Ly8gXHRjb25zb2xlLmxvZyh0aGlzKTtcblx0Ly8gfSlcbn07XG5cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLmdlbmVyYXRlTGlua3MoKTtcbmFwcC5pbnNlcnRMaW5rcygpO1xuXG4vLyBjb25zb2xlLmxvZyhhcHAubGlua3MpO1xuLy8gY29uc29sZS5sb2coYXBwKTtcblxuY29uc3QgYSA9IHtcblx0YTogMyxcblx0ZnVuYzogZnVuY3Rpb24gKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMpXG5cdH1cblx0Ly8gZnVuYzogKCk9Pntcblx0Ly8gXHRjb25zb2xlLmxvZyh0aGlzKVxuXHQvLyB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjA2ZGE1MTM5Y2UxOGJjNzc0MjRcIikiXSwibmFtZXMiOlsibXlVbFJlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsIndlYnNpdGVzIiwibGlua3MiLCJwcm90b3R5cGUiLCJnZW5lcmF0ZUxpbmtzIiwiX3RoaXMiLCJmb3JFYWNoIiwiaXQiLCJwdXNoIiwiY29uY2F0IiwiaW5zZXJ0TGlua3MiLCJteUxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiYXBwIiwiYSIsImZ1bmMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==