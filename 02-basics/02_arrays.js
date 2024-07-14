const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]
const nested_array = [...marvel_heros, [...dc_heros, [...marvel_heros]]]
const all_heros = marvel_heros.concat(dc_heros)
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)
console.log(nested_array)
console.log(Array.of("Ardsalan", "niziri"))
