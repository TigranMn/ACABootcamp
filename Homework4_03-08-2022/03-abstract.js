class Abstract {
  constructor() {
    if(this.constructor.name === 'Abstract') {
      throw new Error('Abstract class cannot be instanced');
  }
}
}
const abstract = new Abstract()
console.log(abstract)