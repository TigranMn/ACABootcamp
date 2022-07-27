function Calculator(initialValue) {
   this.result = +initialValue;
   this.plus = (nmb) => this.result+= nmb
   this.minus = (nmb) => this.result-= nmb
   this.multiply = (nmb) => this.result*= nmb
   this.divide = (nmb) => this.result/= nmb
   this.getResult = () => this.result
}

let obj = new Calculator(6)
obj.divide(3)
console.log(obj.getResult())