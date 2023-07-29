
import Calculator from "./Calculator";

class DecCalculator extends Calculator {

	add(numberX, numberY) {
		let result = [];
		let carry = 0;

		for (let i = numberX.length - 1; i >= 0; i--) {
			let sum = numberX[i] + numberY[i] + carry;
			result[i] = sum % 10;
			carry = Math.floor(sum / 10);
		}

		return result;
	}
	changeNumber(root) {
		const input = root.firstElementChild;
		let currentValue = parseInt(input.innerText);
		let newValue = (currentValue + 1) % 10;

		input.innerText = newValue;

		this.checkNumber();
		this.updateResult();
	}
	checkNumber() {
		super.checkNumber();
		return this.resultNumberArray;
	}

	initEvents() {
		super.initEvents();
		const plusRef = this.$calculatorDOMElement.querySelector('.operator-bar');
		// console.log(plusRef);
		plusRef.addEventListener('click', () => {
			this.checkNumber();
			this.updateResult();
			this.showTooltip("kliknij na + abu zobachuc wunik")

		})
	}
	showTooltip(text) {
		const toltipRef = this.$calculatorDOMElement.querySelector('.popover');
		toltipRef.classList.add('show');
		toltipRef.querySelector('div:nth-child(2)').textContent = text;
		toltipRef.querySelector('div:nth-child(1)').textContent = text;

		console.log(text);
	}
	hideTooltip() {

	}
}

export default DecCalculator;

