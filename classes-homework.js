/*Creating Classes
You will be working with this class

class Cat {}
give the class at least 3 properties
give the class at least 3 methods
create two instances of the class (two cats)
log both instances to see their properties
invoke each method from both instances
Links to an external site.Constructors
here is a class to work with*/

class Cat {
    constructor (legs, color, type, name){
        this.hasLegs = legs || 4;
        this.addColor = color;
        this.addType = type;
        this.hasName = name;
    }
    sound (){
        console.log("meow")
    }
    stray (){
        console.log("I'm your pet")
    }
    eats () {
        console.log('I like pizza')
    }
}

const calico = new Cat ('3', 'brown', 'persian', 'Garfield')
console.log(calico)
calico.eats()
calico.sound()
calico.stray()

const tabby = new Cat ('4', 'black', 'persian', 'ms kitty')
console.log(tabby)
tabby.eats()
tabby.sound()
tabby.stray()


/*
create 3 properties that are set by the constructor
create 3 methods
instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
loop over each array and print 3 properties of each pirate*/

class Pirate {

    constructor(name, weapon){
        this.addName = name;
        this.hasWeapon = weapon ;
    }

    speaks (){
        console.log("Yo ho ho!")
    }

    drinks () {
        console.log('I love Rum!')
    }

    sails () {
        console.log("Welcome aboard!")
    }
 
  }



  const jollyRogers = []
  const blackPearl = []

  jollyRogers[0] = new Pirate('Black Beard', 'pistol')
  console.log(jollyRogers[0])

  blackPearl[0] = new Pirate('Black Beard', 'sword')
  console.log(blackPearl[0])

  jollyRogers[0].sails()
  jollyRogers[0].drinks()
  jollyRogers[0].speaks()

  blackPearl[0].sails()
  blackPearl[0].drinks()
  blackPearl[0].speaks()

  jollyRogers[1] = new Pirate('Jack Sparrow', 'compass')
  console.log(jollyRogers[1])

  blackPearl[1] = new Pirate('Jack Sparrow', 'pistol')
  console.log(blackPearl[1])

  jollyRogers[1].sails()
  jollyRogers[1].drinks()
  jollyRogers[1].speaks()

  blackPearl[1].sails()
  blackPearl[1].drinks()
  blackPearl[1].speaks()

  jollyRogers[2] = new Pirate('Barbosa', 'sword')
  console.log(jollyRogers[2])

  blackPearl[2] = new Pirate('Barbosa', '2 pistols')
  console.log(blackPearl[2])
  
  jollyRogers[2].sails()
  jollyRogers[2].drinks()
  jollyRogers[2].speaks()

  blackPearl[2].sails()
  blackPearl[2].drinks()
  blackPearl[2].speaks()

