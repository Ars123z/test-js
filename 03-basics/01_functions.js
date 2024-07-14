function arbitraryParam(...rest) {
    return rest
}
const paramArray= ["1", "2", "3"]
console.log(arbitraryParam(...paramArray))