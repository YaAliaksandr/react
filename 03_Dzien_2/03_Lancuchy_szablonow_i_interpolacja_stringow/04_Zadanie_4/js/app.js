const func = function () {
	return `"Myślę, że jest wiele piękna
	w posiadaniu problemów.
	To jeden ze sposobów w jaki się uczymy"
	Herbie Hancock
	`
}
const quoteRef = document.querySelector('#quote');
quoteRef.textContent = func();


