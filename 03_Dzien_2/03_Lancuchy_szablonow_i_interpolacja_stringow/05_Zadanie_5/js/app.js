const button = {
	text: "Send message",
	id: "sendMsg",
	classes: ["btn", "btn-primary"],
	width: 100,
	padding: 20
};
console.log(`To jest button.
 Jego szerokość to ${button.width + button.padding * 2}px.
 Napis, który na nim widnieje to "${button.text}".`);

const buttonContainerRef = document.querySelector('#buttonContainer');
const textCreater = function () {
	const cl = button.classes.join(', ').replace(",", " ");

	buttonContainerRef.innerHTML = `<button style="width:${button.width}px; padding:${button.padding}px;" id="${button.id}" class="${cl}">${button.text}</button>`
	// we can doo also(if we did not add class to this element) after innerHtml
	//const newBtn = document.querySelector('#sendMsg');
	//  newBtn.classList.add(...button.classes);

}
textCreater();
