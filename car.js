// 1 - Batmobile

// class Car {
//     constructor (brand, speed){
//         this.brand = brand
//         this.speed = speed
//     }   

//     accelerate (numAcc) {
//         this.speed += numAcc
//     }

//     brake (numBrake) {
//         this.speed -= numBrake
//     }

//     describe = () => {
//         console.log(`${this.brand} running at ${this.speed} km/h`)
//     }
// }

// let ford = new Car("Ford", 0)
// ford.accelerate(50)
// console.log(ford)

// ford.brake(25)
// console.log(ford)

// let Renault = new Car("Renault", 0)
// Renault.accelerate(100)
// console.log(Renault)

// Renault.brake(20)
// console.log(Renault)

// 2 - TV

// class TV {
//     constructor(brand, channel, volume){
//         this.brand = brand
//         this.channel = 1
//         this.volume = 50
//     }

//     volumeUp (numUp) {
//         if(this.volume + numUp <= 100){
//             this.volume += numUp
//         }else{
//             console.log("volume too high")
//         }
//     }

//     volumeDown (numDown) {
//         if(this.volume - numDown >= 0){
//             this.volume -= numDown
//         }else{
//             console.log("volume too low")
//         }
//     }

//     channelChange (numChannel) {
//         if(numChannel >= 0 && numChannel <= 50){
//             this.channel = numChannel
//         }else{
//             this.channel = this.channel
//         }
//     }

//     reset () {
//         if(this.volume !== 50 && this.channel !== 1){
//             this.volume = 50
//             this.channel = 1
//         }
//     }

// }

// const phillips = new TV ("Phillips")
// phillips.volumeUp(70)
// console.log(phillips)

// phillips.volumeUp(10)
// console.log(phillips)

// phillips.volumeDown(30)
// console.log(phillips)

// phillips.volumeDown(10)
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

