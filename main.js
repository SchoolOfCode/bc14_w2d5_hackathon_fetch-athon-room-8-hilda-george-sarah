async function fetchPoke () {
var pokeRequest = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
var pokeData = await pokeRequest.json()
console.log(pokeData)
}

fetchPoke()

async function fetchTrivia () {
    const triviaRequest = await fetch("https://opentdb.com/api.php?amount=10");
    const triviaData = await triviaRequest.json();
    console.log(triviaData)
}

fetchTrivia()
