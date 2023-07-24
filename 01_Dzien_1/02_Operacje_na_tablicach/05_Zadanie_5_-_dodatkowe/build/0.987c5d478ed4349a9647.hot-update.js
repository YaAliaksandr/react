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
randomize(1, 5, function (num) {
  console.log("Wylosowana liczba to ".concat(number));
});
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
/******/ 	__webpack_require__.h = () => ("4a02cf037d839a6b8d90")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ODdjNWQ0NzhlZDQzNDlhOTY0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsU0FBU0EsU0FBU0EsQ0FBQ0MsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtFQUM1QyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7SUFDbkNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDO0VBQ0Q7RUFFQSxJQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBRyxDQUFDTCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTSxHQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTyxZQUFZLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0YsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDdEVILFFBQVEsQ0FBQ00sWUFBWSxDQUFDO0FBQ3ZCO0FBRUFULFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVVZLEdBQUcsRUFBRTtFQUM5QlIsT0FBTyxDQUFDUyxHQUFHLHlCQUFBQyxNQUFBLENBQXlCQyxNQUFNLENBQUUsQ0FBQztBQUM5QyxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztVQ2hDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi8uLzAxX0R6aWVuXzEvMDJfT3BlcmFjamVfbmFfdGFibGljYWNoLzA1X1phZGFuaWVfNV8tX2RvZGF0a293ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gcmFuZG9taXplKHBhcmFtMSwgcGFyYW0yLCBjYWxsYmFjaykge1xyXG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihcIkl0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgbWluID0gTWF0aC5taW4ocGFyYW0xLCBwYXJhbTIpO1xyXG5cdGNvbnN0IG1heCA9IE1hdGgubWF4KHBhcmFtMSwgcGFyYW0yKTtcclxuXHRjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG5cdGNhbGxiYWNrKHJhbmRvbU51bWJlcik7XHJcbn1cclxuXHJcbnJhbmRvbWl6ZSgxLCA1LCBmdW5jdGlvbiAobnVtKSB7XHJcblx0Y29uc29sZS5sb2coYFd5bG9zb3dhbmEgbGljemJhIHRvICR7bnVtYmVyfWApXHJcbn0pXHJcbi8vINC80L7RkSDQvdC1INC/0YDQsNCy0LjQu9GM0L3QvtC1INGA0LXRiNC10L3QuNC1XHJcbi8vIGZ1bmN0aW9uIHJhbmRvbWl6ZShwYXJhbTEsIHBhcmFtMiwgY2FsbGJhY2spIHtcclxuLy8gXHRjb25zdCBhID0gcGFyYW0xO1xyXG4vLyBcdGNvbnN0IGIgPSBwYXJhbTI7XHJcblxyXG4vLyBcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4vLyBcdFx0cmV0dXJuIGNhbGxiYWNrKGEsIGIpO1xyXG5cclxuLy8gXHR9XHJcbi8vIFx0ZWxzZSB7XHJcbi8vIFx0XHRjb25zb2xlLmxvZyhcIkl0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gY29uc29sZS5sb2cocmFuZG9taXplKDEsIDUsIGZ1bmN0aW9uIChtaW4sIG1heCkge1xyXG4vLyBcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBtYXggKyBtaW4pO1xyXG4vLyB9KSkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YTAyY2YwMzdkODM5YTZiOGQ5MFwiKSJdLCJuYW1lcyI6WyJyYW5kb21pemUiLCJwYXJhbTEiLCJwYXJhbTIiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJlcnJvciIsIm1pbiIsIk1hdGgiLCJtYXgiLCJyYW5kb21OdW1iZXIiLCJmbG9vciIsInJhbmRvbSIsIm51bSIsImxvZyIsImNvbmNhdCIsIm51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=