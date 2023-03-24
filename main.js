async function fetchPoke () {
var pokeRequest = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
var pokeData = await pokeRequest.json()
console.log(pokeData)
}

fetchPoke()