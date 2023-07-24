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
  callback(randomNumber);
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
/******/ 	__webpack_require__.h = () => ("987c5d478ed4349a9647")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYjdkZTZmMTgyY2JiNTQ0NGM4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsU0FBU0EsU0FBU0EsQ0FBQ0MsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtFQUM1QyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7SUFDbkNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDO0VBQ0Q7RUFFQSxJQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBRyxDQUFDTCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTSxHQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTyxZQUFZLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0YsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDdEVILFFBQVEsQ0FBQ00sWUFBWSxDQUFDO0FBQ3ZCO0FBRUFMLE9BQU8sQ0FBQ1EsR0FBRyxDQUFDWixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVYSxHQUFHLEVBQUU7RUFDMUMsK0JBQUFDLE1BQUEsQ0FBK0JELEdBQUc7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ2hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAxX0R6aWVuXzEvMDJfT3BlcmFjamVfbmFfdGFibGljYWNoLzA1X1phZGFuaWVfNV8tX2RvZGF0a293ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gcmFuZG9taXplKHBhcmFtMSwgcGFyYW0yLCBjYWxsYmFjaykge1xyXG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihcIkl0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWluID0gTWF0aC5taW4ocGFyYW0xLCBwYXJhbTIpO1xyXG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHBhcmFtMSwgcGFyYW0yKTtcclxuXHRjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdGNhbGxiYWNrKHJhbmRvbU51bWJlcik7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHJhbmRvbWl6ZSgxLCA1LCBmdW5jdGlvbiAobnVtKSB7XHJcblx0cmV0dXJuIGBXeWxvc293YW5hIGxpY3piYSB0byAke251bX1gO1xyXG59KSlcclxuLy8g0LzQvtGRINC90LUg0L/RgNCw0LLQuNC70YzQvdC+0LUg0YDQtdGI0LXQvdC40LVcclxuLy8gZnVuY3Rpb24gcmFuZG9taXplKHBhcmFtMSwgcGFyYW0yLCBjYWxsYmFjaykge1xyXG4vLyBcdGNvbnN0IGEgPSBwYXJhbTE7XHJcbi8vIFx0Y29uc3QgYiA9IHBhcmFtMjtcclxuXHJcbi8vIFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbi8vIFx0XHRyZXR1cm4gY2FsbGJhY2soYSwgYik7XHJcblxyXG4vLyBcdH1cclxuLy8gXHRlbHNlIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwiSXQgaXMgbm90IGEgZnVuY3Rpb25cIik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyYW5kb21pemUoMSwgNSwgZnVuY3Rpb24gKG1pbiwgbWF4KSB7XHJcbi8vIFx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heCArIG1pbik7XHJcbi8vIH0pKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk4N2M1ZDQ3OGVkNDM0OWE5NjQ3XCIpIl0sIm5hbWVzIjpbInJhbmRvbWl6ZSIsInBhcmFtMSIsInBhcmFtMiIsImNhbGxiYWNrIiwiY29uc29sZSIsImVycm9yIiwibWluIiwiTWF0aCIsIm1heCIsInJhbmRvbU51bWJlciIsImZsb29yIiwicmFuZG9tIiwibG9nIiwibnVtIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==