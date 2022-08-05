class City {
   constructor() {
      this.buildings = []
   }
}

class Building  {
   constructor() {}
}

class Hospital extends Building {
   constructor() {
      super()
      this.cars = []
   }
}

class PoliceDepartment extends Building {
   constructor() {
      super()
      this.cars = []
   }
}

class Car {

}

class PoliceCar extends Car {
   constructor() {
      super()
      this.type = 'Police'
   }
}

class AmbulanceCar extends Car {
   constructor() {
      super()
      this.type = 'Ambulance'
   }
}

const nairi = new Hospital()
const erebuni = new Hospital()
const police = new PoliceDepartment()
const city = new City()
const car = new Car()
const policeCar = new PoliceCar()
const ambulanceCar = new AmbulanceCar
city.buildings = [nairi,erebuni,police]
console.log(city)
console.log(car,policeCar,ambulanceCar)