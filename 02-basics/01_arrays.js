const myArray = [0, 1, 2, 3, 4, 5]
const newArray = myArray
myArray.map((val)=> val*2)
myArray.push(6)
myArray.pop()
console.table([myArray, newArray])




