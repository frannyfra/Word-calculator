class Calculator{
    constructor(inputSentence) {
        this.inputSentence = inputSentence.split("");
        this.operands = ["plus", "divided", "multiplied", "minus"];
        this.number = [];
        this.sentenceWithMultipleOperands = [];
    }
    calculateTheSentence() {
        this.removedElementFromSentence = this.inputSentence.splice(-1, 1);
        this.inputSentence.join("").split(" ").filter((element) => {
            if ((element !== "") && !isNaN(element) || this.operands.includes(element)) {
                this.number.push((element));
            }
        })
        this.sentenceWithMultipleOperands = this.number.map((element) => {
            if (!this.operands.includes(element)) return element;
            if (element === "plus") return element = "+";
            if (element === "multiplied") return element = "*";
            if (element === "divided") return element ="/";
            if (element === "minus") return element ="-";
        })
        this.parsedNumbers = this.number.map((number) => parseInt(number))
        if (this.number.length > 2) return this.multipleOperations();
        if (this.inputSentence.includes("plus")) return  this.parsedNumbers[0] + this.parsedNumbers[2];
        if (this.inputSentence.includes("divided")) return this.number[0] / this.number[2];
        if (this.inputSentence.includes("multiplied")) return this.number[0]  * this.number[2];
        if (this.inputSentence.includes("minus")) return this.number[0] - this.number[2];
        if (this.inputSentence.includes("power")) return  Math.pow(this.number[0], this.number[2]);
        if (!this.operands.includes(this.inputSentence)) return this.number.join();
    }
    multipleOperations = () => eval(this.sentenceWithMultipleOperands.join(" "));
}


const mySentence = new Calculator("What is 4 plus 3 multiplied by 6?");
console.log(mySentence.calculateTheSentence());
