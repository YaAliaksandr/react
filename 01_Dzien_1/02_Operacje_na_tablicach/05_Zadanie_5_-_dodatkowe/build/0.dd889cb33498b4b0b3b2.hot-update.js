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
  console.log("hey  " + num);
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
/******/ 	__webpack_require__.h = () => ("4ccb2fe1d49067d5e232")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZDg4OWNiMzM0OThiNGIwYjNiMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsU0FBU0EsU0FBU0EsQ0FBQ0MsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRTtFQUM1QyxJQUFJLE9BQU9BLFFBQVEsS0FBSyxVQUFVLEVBQUU7SUFDbkNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0lBQ3JDO0VBQ0Q7RUFFQSxJQUFNQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0QsR0FBRyxDQUFDTCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTSxHQUFHLEdBQUdELElBQUksQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLEVBQUVDLE1BQU0sQ0FBQztFQUNwQyxJQUFNTyxZQUFZLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxDQUFDSCxJQUFJLENBQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUlILEdBQUcsR0FBR0YsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7RUFDdEVILFFBQVEsQ0FBQ00sWUFBWSxDQUFDO0FBQ3ZCO0FBRUFULFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFVBQVVZLEdBQUcsRUFBRTtFQUM5QlIsT0FBTyxDQUFDUyxHQUFHLENBQUMsT0FBTyxHQUFHRCxHQUFHLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUNoQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vLi8wMV9Eemllbl8xLzAyX09wZXJhY2plX25hX3RhYmxpY2FjaC8wNV9aYWRhbmllXzVfLV9kb2RhdGtvd2UvanMvYXBwLmpzIiwid2VicGFjazovL29ubF9mZXJfc18xOV9lczZfcmVhY3RfcG9kc3Rhd3ktbWFpbi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIHJhbmRvbWl6ZShwYXJhbTEsIHBhcmFtMiwgY2FsbGJhY2spIHtcclxuXHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXCJJdCBpcyBub3QgYSBmdW5jdGlvblwiKTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IG1pbiA9IE1hdGgubWluKHBhcmFtMSwgcGFyYW0yKTtcclxuXHRjb25zdCBtYXggPSBNYXRoLm1heChwYXJhbTEsIHBhcmFtMik7XHJcblx0Y29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuXHRjYWxsYmFjayhyYW5kb21OdW1iZXIpXHJcbn1cclxuXHJcbnJhbmRvbWl6ZSgxLCA1LCBmdW5jdGlvbiAobnVtKSB7XHJcblx0Y29uc29sZS5sb2coXCJoZXkgIFwiICsgbnVtKTtcclxufSlcclxuLy8g0LzQvtGRINC90LUg0L/RgNCw0LLQuNC70YzQvdC+0LUg0YDQtdGI0LXQvdC40LVcclxuLy8gZnVuY3Rpb24gcmFuZG9taXplKHBhcmFtMSwgcGFyYW0yLCBjYWxsYmFjaykge1xyXG4vLyBcdGNvbnN0IGEgPSBwYXJhbTE7XHJcbi8vIFx0Y29uc3QgYiA9IHBhcmFtMjtcclxuXHJcbi8vIFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbi8vIFx0XHRyZXR1cm4gY2FsbGJhY2soYSwgYik7XHJcblxyXG4vLyBcdH1cclxuLy8gXHRlbHNlIHtcclxuLy8gXHRcdGNvbnNvbGUubG9nKFwiSXQgaXMgbm90IGEgZnVuY3Rpb25cIik7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyYW5kb21pemUoMSwgNSwgZnVuY3Rpb24gKG1pbiwgbWF4KSB7XHJcbi8vIFx0cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIG1heCArIG1pbik7XHJcbi8vIH0pKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRjY2IyZmUxZDQ5MDY3ZDVlMjMyXCIpIl0sIm5hbWVzIjpbInJhbmRvbWl6ZSIsInBhcmFtMSIsInBhcmFtMiIsImNhbGxiYWNrIiwiY29uc29sZSIsImVycm9yIiwibWluIiwiTWF0aCIsIm1heCIsInJhbmRvbU51bWJlciIsImZsb29yIiwicmFuZG9tIiwibnVtIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==