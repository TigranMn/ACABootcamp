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
let sub = new Subabstract()
console.log(sub)
console.log(sub.constructor.name)