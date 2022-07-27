const obj = {
   setName(name) {
      this.name = name
   },
   getName() {
      return this.name
   }
}

obj.setName('Tiko')
console.log(obj.getName())