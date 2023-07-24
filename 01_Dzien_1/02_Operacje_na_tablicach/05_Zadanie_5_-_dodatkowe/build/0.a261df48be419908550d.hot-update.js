self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (() => {

function randomize(param1, param2, callback) {
  if (typeof callback !== "function") {
    console.error("It is not a function");
    return;
  }
  var min = Math.min(param1, param2);
  var max = Math.max(param1, param2);
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return callback(randomNumber);
}
console.log(randomize(1, 5, function (num) {
  return "Wylosowana liczba to ".concat(num);
}));
// моё не правильное решение
// function randomize(param1, param2, callback) {
// 	const a = param1;
// 	const b = param2;

// 	if (typeof callback === "function") {
// 		return callback(a, b);

// 	}
// 	else {
// 		console.log("It is not a function");
// 	}
// }

// console.log(randomize(1, 5, function (min, max) {
// 	return Math.round(Math.random() * max + min);
// }))

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d416fa5fb87e816344fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMjYxZGY0OGJlNDE5OTA4NTUwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsU0FBU0EsU0FBU0EsQ0FBQ0MsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtFQUM1QyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7SUFDbkNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDO0VBQ0Q7RUFFQSxJQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBRyxDQUFDTCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTSxHQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTyxZQUFZLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0YsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDdEUsT0FBT0gsUUFBUSxDQUFDTSxZQUFZLENBQUM7QUFDOUI7QUFFQUwsT0FBTyxDQUFDUSxHQUFHLENBQUNaLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVVhLEdBQUcsRUFBRTtFQUMxQywrQkFBQUMsTUFBQSxDQUErQkQsR0FBRztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDaENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDFfRHppZW5fMS8wMl9PcGVyYWNqZV9uYV90YWJsaWNhY2gvMDVfWmFkYW5pZV81Xy1fZG9kYXRrb3dlL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiByYW5kb21pemUocGFyYW0xLCBwYXJhbTIsIGNhbGxiYWNrKSB7XHJcblx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKFwiSXQgaXMgbm90IGEgZnVuY3Rpb25cIik7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBtaW4gPSBNYXRoLm1pbihwYXJhbTEsIHBhcmFtMik7XHJcblx0Y29uc3QgbWF4ID0gTWF0aC5tYXgocGFyYW0xLCBwYXJhbTIpO1xyXG5cdGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0cmV0dXJuIGNhbGxiYWNrKHJhbmRvbU51bWJlcik7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHJhbmRvbWl6ZSgxLCA1LCBmdW5jdGlvbiAobnVtKSB7XHJcblx0cmV0dXJuIGBXeWxvc293YW5hIGxpY3piYSB0byAke251bX1gXHJcbn0pKVxyXG4vLyDQvNC+0ZEg0L3QtSDQv9GA0LDQstC40LvRjNC90L7QtSDRgNC10YjQtdC90LjQtVxyXG4vLyBmdW5jdGlvbiByYW5kb21pemUocGFyYW0xLCBwYXJhbTIsIGNhbGxiYWNrKSB7XHJcbi8vIFx0Y29uc3QgYSA9IHBhcmFtMTtcclxuLy8gXHRjb25zdCBiID0gcGFyYW0yO1xyXG5cclxuLy8gXHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcclxuLy8gXHRcdHJldHVybiBjYWxsYmFjayhhLCBiKTtcclxuXHJcbi8vIFx0fVxyXG4vLyBcdGVsc2Uge1xyXG4vLyBcdFx0Y29uc29sZS5sb2coXCJJdCBpcyBub3QgYSBmdW5jdGlvblwiKTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKHJhbmRvbWl6ZSgxLCA1LCBmdW5jdGlvbiAobWluLCBtYXgpIHtcclxuLy8gXHRyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogbWF4ICsgbWluKTtcclxuLy8gfSkpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDQxNmZhNWZiODdlODE2MzQ0ZmFcIikiXSwibmFtZXMiOlsicmFuZG9taXplIiwicGFyYW0xIiwicGFyYW0yIiwiY2FsbGJhY2siLCJjb25zb2xlIiwiZXJyb3IiLCJtaW4iLCJNYXRoIiwibWF4IiwicmFuZG9tTnVtYmVyIiwiZmxvb3IiLCJyYW5kb20iLCJsb2ciLCJudW0iLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9