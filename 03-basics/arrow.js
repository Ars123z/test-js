const user = {
    username: "Arsalan",
    price: 999,
    welcomeMessage: function() {
        console.log(this)
    }

}
// console.log(user.welcomeMessage())
// user.username = "Athar"
// console.log(user.welcomeMessage())

var name= "Hitesh"
console.log(this.name)

// function chai() {
//     var username= "Arsalan"
//     console.log(this.username)
// }

// chai()

// const chai= function() {
//     username = "hitesh"
//     console.log(thhis.username)

// }

// chai()

// const chai= ()=> {
//     username = "hitesh"
//     console.log(this)

// }

// chai()

const func= (number1, number2)=> (
number1 ** number2
)

console.log(func(2, 3))