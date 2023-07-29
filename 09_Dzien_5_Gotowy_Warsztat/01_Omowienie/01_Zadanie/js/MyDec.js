
import Calculator from "./Calculator";

class DecCalculator extends Calculator {
	constructor(selector) {
		super(selector);
		this.tooltip = this.$calculatorDOMElement.querySelector(".popover");
	}

	changeNumber(parentElement) {
		const input = parentElement.firstElementChild;
		input.contentEditable = true;
		input.focus();
		this.showTooltip("Press + to check result of summ numbers");
	}

	add(numbersX, numbersY) {
		let prevVal = 0;

		const sumNumbers = numbersX.reduceRight((acc, itX, index) => {
			const itY = numbersY[index];
			const sum = itX + itY + prevVal;
			console.log(`acc===${acc} summ===${itX}+${itY}+${prevVal}`)
			prevVal = Math.floor(sum / 10);
			console.log(`new prevVal===${sum}/10 =>${prevVal}  ${prevVal}`)
			acc.unshift(sum % 10);

			return acc;
		}, []);

		return sumNumbers;
	}



	checkNumber() {
		super.checkNumber();
		const checkRes = this.firstNumberArray.concat(this.secondNumberArray).every(function (it) {
			return typeof it === 'number' && it >= 0 && it <= 9;
		})
		return checkRes;
	}

	initEvents() {
		super.initEvents();

		this.$calculatorDOMElement.querySelector(".operator-bar").addEventListener("click", () => {
			this.hideTooltip();

			if (this.checkNumber()) {
				this.updateResult();
			} else {
				this.showTooltip("The numbers must be from 0 to 9");
			}
		});
	}
	showTooltip(text) {
		this.tooltip.children[1].innerText = text;
		this.tooltip.classList.add("show");
	}

	hideTooltip() {
		this.tooltip.classList.remove("show");
	}
}

export default DecCalculator;