class TV {
   constructor(brand) {
      this.brand = brand
      this.channel = 1
      this.volume = 50
      this.channelsList = ['CTC','TNT', 'H1', 'H2','TV1000 Action', 'Kinoman', 'Bazmots', 'Filmzon']
   }
   decreaseVolume(step) {
      this.volume - step >= 0 ? this.volume -= step
                              : this.volume = 0
   }
   increaseVolume(step) {
      this.volume + step <= 100 ? this.volume += step
                                : this.volume = 100
   }
   setChannel(number) {
     return number >= this.channelsList.length ? this.channel
                                               : this.channel  = number
   }
   resetTV() {
      this.channel = 1 
      this.volume = 50
   }
   statusInfo() {
      return `${this.brand} is at channel ${this.channel}, volume ${this.volume}`
   }
}
const tv = new TV('SHARP')
tv.setChannel(5)
tv.increaseVolume(45)
tv.resetTV()
console.log(tv.statusInfo())

console.log(tv)