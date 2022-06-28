// 1 - Batmobile

// class Car {
//     constructor (brand, speed){
//         this.brand = brand
//         this.speed = speed
//     }   

//     accelerate = (numAcc) => {
//         this.speed += numAcc
//     }

//     brake = (numBrake) =>{
//         this.speed -= numBrake
//     }

//     describe = () => {
//         console.log(`${this.brand} running at ${this.speed} km/h`)
//     }
// }

// let ford = new Car("Ford", 0)
// ford.accelerate(50)
// ford.describe()

// ford.brake(25)
// ford.describe()

// let renault = new Car("Renault", 0)
// renault.accelerate(100)
// renault.describe()

// renault.brake(20)
// renault.describe()

// 2 - TV

// class TV {
//     constructor(brand, channel, volume){
//         this.brand = brand
//         this.channel = 1
//         this.volume = 50
//     }

//     volumeUp = () => {
//         if(this.volume < 100){
//             this.volume = this.volume + 1
//         }else{
//             console.log("volume too high")
//         }
//     }

//     volumeDown = (numDown) => {
//         if(this.volume > 0){
//             this.volume = this.volume - 1
//         }else{
//             console.log("volume too low")
//         }
//     }

//     channelChange = (numChannel) => {
//         if(numChannel >= 1 && numChannel <= 50){
//             this.channel = numChannel
//         }
//     }

//     reset = () => {
//             this.volume = 50
//             this.channel = 1
//     }

// }

// const phillips = new TV ("Phillips")

// for (let i = 0; i < 5; i++){
//     phillips.volumeUp()
// }
// console.log(phillips)

// for (let i = 0; i < 10; i++){
//     phillips.volumeDown()
// }
// console.log(phillips)

// phillips.channelChange(41)
// console.log(phillips)
// phillips.channelChange(21)
// console.log(phillips)
// phillips.channelChange(90)
// console.log(phillips)

// phillips.reset()
// console.log(phillips)


// 3 - Video games

// Mario Kart 

// class Player {
//     constructor(name, car, speed){
//         this.name = name
//         this.car = car
//         this.speed = speed
//     }

//     accelerate = (numAcceleration) => {
//         this.speed += numAcceleration
//     }

//     brake = (numBrake) => {
//         this.speed -= numBrake
//     }

//     bonusAcceleration = (numBonus) => {
//         this.speed = this.speed * numBonus
//     }

//     bananaSlowdown = (numSlowdown) => {
//         this.speed = this.speed - numSlowdown
//     }

// }

// const mario = new Player ("Mario", "Mushroom Car", 0)
// mario.accelerate(40)
// mario.brake(10)
// mario.bonusAcceleration(4)
// mario.bananaSlowdown(30)
// console.log(mario)

// class Race {
//     constructor(road, level, players){
//         this.road = road
//         this.level = level
//     }

//     roadTurnNumber = (numTurn) => {
//         if(numTurn > 5){
//             this.level = this.level + 2
//         }
//     }

//     roadTrap = (numTrap) => {
//         if(numTrap > 3) {
//             this.level = this.level + 4
//         }
//     }

//     roadLocation = (inTheAir) => {
//         if(inTheAir){
//             this.level = this.level + 3
//         }else {
//             this.level = this.level - 2
//         }
//     }

//     raceDuration = (minutes) => {
//         if(minutes < 2){
//             this.level = this.level + 1
//         }
//     }

// }

// const rainbowRace = new Race ("Rainbow", 0)
// rainbowRace.roadTurnNumber(4)
// rainbowRace.roadTrap(2)
// rainbowRace.roadLocation(true)
// rainbowRace.raceDuration(1)

// console.log(rainbowRace)
