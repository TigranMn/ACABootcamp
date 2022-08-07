class Abstract {
  constructor() {
    if(this.constructor.name === 'Abstract') {
      throw new Error('Abstract class cannot be instanced');
  }
}
}

class Subabstract extends Abstract {
  constructor() {
    super()
    this.type = 'subabstract'
  }
}
let s = new Subabstract()
console.log(s)
console.log(s.constructor.name)