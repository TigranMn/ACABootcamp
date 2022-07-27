const obj = {
   setSum(sum) {
      this.sum = sum
   },
   add(nmb) {
      this.sum+=nmb
   },
   getSum() {
      return this.sum
   }
}
obj.setSum(20)
obj.add(30)
console.log(obj.getSum())