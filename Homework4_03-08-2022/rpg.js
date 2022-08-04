const CHARACTER_TYPES = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
class Character {
   constructor(name,type) {
      if(name.length < 2 || name.length > 10) {
         throw new Error('Invalid name length')
      } else {
         this.name = name
      }
      if(!CHARACTER_TYPES.includes(type)) {
         throw new Error('Invalid character type')
      } else {
         this.type =  type
      }
      
   }
   levelUp() {
      if(this.health > 0) {
         this.level += 1
         this.attack += this.attack * 20 / 100
         this.defence += this.defence * 20 / 100
         this.health = 100
      } else {
         throw new Error (`${this.name} is  dead`)
      }
   }
   damage(points) {
      if(this.health > 0) {
      this.health -= points * (1 - this.defence / 100)
      } else {
         throw new Error(`${this.name} is already dead`)
      }
   }
}

class Bowerman extends Character {
   constructor(name,type) {
      super(name,type)
      this.health = 100
      this.level = 1
      this.attack = 25
      this.defence = 25
   }
}

class Zombie extends Character {
   constructor(name,type) {
      super(name,type)
      this.health = 100
      this.level = 1
      this.attack = 40
      this.defence = 10
   }
}

class Swordsman extends Character {
   constructor(name,type) {
      super(name,type)
      this.health = 100
      this.level = 1
      this.attack = 40
      this.defence = 10
   }
}

class Magician extends Character {
   constructor(name,type) {
      super(name,type)
      this.health = 100
      this.level = 1
      this.attack = 10
      this.defence = 40
   }
}

class Daemon extends Character {
   constructor(name,type) {
      super(name,type)
      this.health = 100
      this.level = 1
      this.attack = 10
      this.defence = 40
   }
}

class Undead extends Character {
   constructor(name,type) {
      super(name,type)
      this.health = 100
      this.level = 1
      this.attack = 25
      this.defence = 25
   }
}

let swordsman = new Swordsman('sword','Swordsman')
let daemon = new Daemon('daem','Daemon')
let magician = new Magician('magic','Magician')
let undead = new Undead('undead','Undead')
let zombie = new Zombie('zombie','Zombie')
daemon.damage(50)
daemon.damage(70)
daemon.damage(20)
daemon.levelUp()

console.log(daemon)