self["webpackHotUpdateonl_fer_s_19_es6_react_podstawy_main"](0,{

/***/ 27:
/***/ (() => {

var allProductsRef = document.querySelector('#all-products');
var newListRef = document.querySelector('#filtered-products');
var products = [{
  name: "Fiat Tipo",
  category: "car",
  price: 29900,
  condition: "new"
}, {
  name: "MacBook Pro",
  category: "computer",
  price: 9999,
  condition: "new"
}, {
  name: "Xiaomi Redmi Note 8",
  category: "phone",
  price: 2399,
  condition: "new"
}, {
  name: "Audi A6",
  category: "car",
  price: 23450,
  condition: "used"
}, {
  name: "Samsung Galaxy Note 9",
  category: "phone",
  price: 1899,
  condition: "used"
}, {
  name: "Seat Leon",
  category: "car",
  price: 66000,
  condition: "new"
}, {
  name: "Nike Sneakers",
  category: "shoes",
  price: 345,
  condition: "new"
}, {
  name: "Dacia Logan",
  category: "car",
  price: 33500,
  condition: "new"
}];
var car = products.filter(function (item) {
  if (item.category === "car" && item.condition === "new" && item.price <= 45000) ;
  return item;
});
products.forEach(function (item) {
  var li = document.createElement('li');
  var strong = document.createElement('strong');
  var span = document.createElement('span');
  span.textContent = "".concat(item.price, " - ").concat(item.condition);
  strong.textContent = "".concat(item.name);
  li.appendChild(span);
  li.appendChild(strong);
  allProductsRef.appendChild(li);
});
car.forEach(function (item) {
  var li = document.createElement('li');
  var strong = document.createElement('strong');
  var span = document.createElement('span');
  span.textContent = "".concat(item.price, " - ").concat(item.condition);
  strong.textContent = "".concat(item.name);
  li.appendChild(strong);
  li.appendChild(span);
  newListRef.appendChild(li);
});
console.log(allProductsRef);
console.dir(allProductsRef);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68d4836a3edbc8dba2c9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2EsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxJQUFNRSxJQUFJLEdBQUdmLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMzQ0UsSUFBSSxDQUFDQyxXQUFXLE1BQUFDLE1BQUEsQ0FBTVAsSUFBSSxDQUFDSixLQUFLLFNBQUFXLE1BQUEsQ0FBTVAsSUFBSSxDQUFDSCxTQUFTLENBQUU7RUFDdERPLE1BQU0sQ0FBQ0UsV0FBVyxNQUFBQyxNQUFBLENBQU1QLElBQUksQ0FBQ04sSUFBSSxDQUFFO0VBQ25DUSxFQUFFLENBQUNNLFdBQVcsQ0FBQ0osTUFBTSxDQUFDO0VBQ3RCRixFQUFFLENBQUNNLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDO0VBRXBCYixVQUFVLENBQUNnQixXQUFXLENBQUNOLEVBQUUsQ0FBQztBQUMzQixDQUNBLENBQUM7QUFDRE8sT0FBTyxDQUFDQyxHQUFHLENBQUNyQixjQUFjLENBQUM7QUFDM0JvQixPQUFPLENBQUNFLEdBQUcsQ0FBQ3RCLGNBQWMsQ0FBQzs7Ozs7Ozs7VUNuRjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25sX2Zlcl9zXzE5X2VzNl9yZWFjdF9wb2RzdGF3eS1tYWluLy4vMDFfRHppZW5fMS8wMl9PcGVyYWNqZV9uYV90YWJsaWNhY2gvMDRfWmFkYW5pZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9vbmxfZmVyX3NfMTlfZXM2X3JlYWN0X3BvZHN0YXd5LW1haW4vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFsbFByb2R1Y3RzUmVmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1wcm9kdWN0cycpO1xuY29uc3QgbmV3TGlzdFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJlZC1wcm9kdWN0cycpO1xuXG5jb25zdCBwcm9kdWN0cyA9IFtcblx0e1xuXHRcdG5hbWU6IFwiRmlhdCBUaXBvXCIsXG5cdFx0Y2F0ZWdvcnk6IFwiY2FyXCIsXG5cdFx0cHJpY2U6IDI5OTAwLFxuXHRcdGNvbmRpdGlvbjogXCJuZXdcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJNYWNCb29rIFByb1wiLFxuXHRcdGNhdGVnb3J5OiBcImNvbXB1dGVyXCIsXG5cdFx0cHJpY2U6IDk5OTksXG5cdFx0Y29uZGl0aW9uOiBcIm5ld1wiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlhpYW9taSBSZWRtaSBOb3RlIDhcIixcblx0XHRjYXRlZ29yeTogXCJwaG9uZVwiLFxuXHRcdHByaWNlOiAyMzk5LFxuXHRcdGNvbmRpdGlvbjogXCJuZXdcIlxuXHR9LFxuXHR7XG5cdFx0bmFtZTogXCJBdWRpIEE2XCIsXG5cdFx0Y2F0ZWdvcnk6IFwiY2FyXCIsXG5cdFx0cHJpY2U6IDIzNDUwLFxuXHRcdGNvbmRpdGlvbjogXCJ1c2VkXCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiU2Ftc3VuZyBHYWxheHkgTm90ZSA5XCIsXG5cdFx0Y2F0ZWdvcnk6IFwicGhvbmVcIixcblx0XHRwcmljZTogMTg5OSxcblx0XHRjb25kaXRpb246IFwidXNlZFwiXG5cdH0sXG5cdHtcblx0XHRuYW1lOiBcIlNlYXQgTGVvblwiLFxuXHRcdGNhdGVnb3J5OiBcImNhclwiLFxuXHRcdHByaWNlOiA2NjAwMCxcblx0XHRjb25kaXRpb246IFwibmV3XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiTmlrZSBTbmVha2Vyc1wiLFxuXHRcdGNhdGVnb3J5OiBcInNob2VzXCIsXG5cdFx0cHJpY2U6IDM0NSxcblx0XHRjb25kaXRpb246IFwibmV3XCJcblx0fSxcblx0e1xuXHRcdG5hbWU6IFwiRGFjaWEgTG9nYW5cIixcblx0XHRjYXRlZ29yeTogXCJjYXJcIixcblx0XHRwcmljZTogMzM1MDAsXG5cdFx0Y29uZGl0aW9uOiBcIm5ld1wiXG5cdH1cbl07XG5jb25zdCBjYXIgPSBwcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IHtcblx0aWYgKGl0ZW0uY2F0ZWdvcnkgPT09IFwiY2FyXCIgJiYgaXRlbS5jb25kaXRpb24gPT09IFwibmV3XCIgJiYgaXRlbS5wcmljZSA8PSA0NTAwMCk7XG5cdHJldHVybiBpdGVtO1xufSk7XG5wcm9kdWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0Y29uc3Qgc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdHNwYW4udGV4dENvbnRlbnQgPSBgJHtpdGVtLnByaWNlfSAtICR7aXRlbS5jb25kaXRpb259YDtcblx0c3Ryb25nLnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfWA7XG5cdGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuXHRsaS5hcHBlbmRDaGlsZChzdHJvbmcpO1xuXHRhbGxQcm9kdWN0c1JlZi5hcHBlbmRDaGlsZChsaSk7XG5cbn0pXG5cblxuY2FyLmZvckVhY2goKGl0ZW0pID0+IHtcblx0Y29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRjb25zdCBzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0c3Bhbi50ZXh0Q29udGVudCA9IGAke2l0ZW0ucHJpY2V9IC0gJHtpdGVtLmNvbmRpdGlvbn1gO1xuXHRzdHJvbmcudGV4dENvbnRlbnQgPSBgJHtpdGVtLm5hbWV9YDtcblx0bGkuYXBwZW5kQ2hpbGQoc3Ryb25nKTtcblx0bGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cblx0bmV3TGlzdFJlZi5hcHBlbmRDaGlsZChsaSk7XG59XG4pXG5jb25zb2xlLmxvZyhhbGxQcm9kdWN0c1JlZik7XG5jb25zb2xlLmRpcihhbGxQcm9kdWN0c1JlZik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OGQ0ODM2YTNlZGJjOGRiYTJjOVwiKSJdLCJuYW1lcyI6WyJhbGxQcm9kdWN0c1JlZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5ld0xpc3RSZWYiLCJwcm9kdWN0cyIsIm5hbWUiLCJjYXRlZ29yeSIsInByaWNlIiwiY29uZGl0aW9uIiwiY2FyIiwiZmlsdGVyIiwiaXRlbSIsImZvckVhY2giLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzdHJvbmciLCJzcGFuIiwidGV4dENvbnRlbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciLCJkaXIiXSwic291cmNlUm9vdCI6IiJ9