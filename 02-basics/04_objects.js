// const tinder= new Object()

const obj1= {1: "a", 2: "b"}
const obj2= {3: "c", 4: "d"}
const obj3= {...obj1, ...obj2}
obj3.name = 'e'
console.log(obj1.hasOwnProperty(2))

console.log(obj3)
