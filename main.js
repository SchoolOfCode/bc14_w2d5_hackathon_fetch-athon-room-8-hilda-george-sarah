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

async function fetchDadJokes () {
    const jokeRequest = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
    const jokeData = await jokeRequest.json();
    console.log(jokeData);

}

fetchDadJokes();

async function getword() {
    var fetchWorld = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    var wordData = await fetchWorld.json()
    console.log(wordData)
}

getword()