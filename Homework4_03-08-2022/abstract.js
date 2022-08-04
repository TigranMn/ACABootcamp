class Abstract {
  constructor() {
    if(this.constructor.name === 'Abstract') {
      throw new Error('Abstract class cannot be instanced');
  }
}
}
let abs = new Abstract()
console.log(abs)