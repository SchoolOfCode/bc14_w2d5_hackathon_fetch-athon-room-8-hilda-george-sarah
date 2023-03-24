/* async function fetchPoke () {
var pokeRequest = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
var pokeData = await pokeRequest.json()
console.log(pokeData)
}

fetchPoke()
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
*/
/*
HTML/ CSS
- Black background😀
- Green, computery text😀
- Create a Heading that says "Computerwiz Quiz"😀
- Entire page like a computer screen
- Buttons looking like keyboard keys (animate if we have time)

- Create a fetch request for one multiple choice question at a time, for the computer category, with a difficulty of easy😀
- Display the text content of the question on the page. 😀
- Randomize answer order 😀
- Create buttons for each possible answer 😀

    - Link each button to an answer index.😀
    - Display text content above each button.😀
- Get input from user for the answer.😀
- After user has answered, the correct answer button becomes green.

- Create a progress bar
- If answer is correct progress bar goes up by 10%.
- If anser is incorrect progress bar goes down by 10%, unless it is already at 0%.
- If answer is correct, display a message saying "Correct!".
- If answer is incorrect, display a message saying "Incorrect!".

- When user has answered 10 questions, display a gif showing celebration
- When user has answered 10 questions, display a message saying "You're a computerwiz!"
*/
let question = document.querySelector("h2");
const buttonOne = document.querySelector("#buttonOne")
const buttonTwo = document.querySelector("#buttonTwo")
const buttonThree = document.querySelector("#buttonThree")
const buttonFour = document.querySelector("#buttonCorrect")
let score = 0;
let correctAnswer = 0;
let incorrectAnswer = 0;
const displayScore = document.querySelector("h4");
displayScore.textContent = `Score: ${score}`
var maxScore = 10;
var containerWidth = 500;
var percentage = 0
var progressBarWidth = 0;
var instructions = document.querySelector(".instructions");

async function fetchTrivia () {
    const triviaRequest = await fetch("https://opentdb.com/api.php?amount=1&category=18&type=multiple");
    const triviaData = await triviaRequest.json();
    console.log(triviaData)
//this gives us the question.
    console.log(triviaData.results[0].question);
    let uncodedQuestion = triviaData.results[0].question;

    question.innerHTML = uncodedQuestion;
    correctAnswer = triviaData.results[0].correct_answer;
    incorrectAnswers = triviaData.results[0].incorrect_answers;
    incorrectAnswers.push(correctAnswer);
        let currentIndex = incorrectAnswers.length,  randomIndex;
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [incorrectAnswers[currentIndex], incorrectAnswers[randomIndex]] = [
            incorrectAnswers[randomIndex], incorrectAnswers[currentIndex]];
        console.log(incorrectAnswers);
    
        buttonOne.innerHTML = incorrectAnswers[0] 
        buttonTwo.innerHTML = incorrectAnswers[1] 
        buttonThree.innerHTML = incorrectAnswers[2]
        buttonFour.innerHTML = incorrectAnswers[3]
            
        
    
    
    }
        fetchTrivia()
//buttonOne.textContent 

function scoreCount1 () {
    if (correctAnswer === incorrectAnswers[0]){
        score ++
        percentage = score / maxScore;
        progressBarWidth = percentage * containerWidth;
        document.getElementById("progress-bar").style.width = progressBarWidth + "px";
    }
    if (score === 10) {
        instructions.textContent = "Congratulations! You're a computerwiz!"
        instructions.style.fontSize = "50px"
    }
    console.log(score)
    displayScore.textContent = `Score: ${score}`;
    fetchTrivia()
}
function scoreCount2 () {
    if (correctAnswer == incorrectAnswers[1]){
        score ++
        percentage = score / maxScore;
        progressBarWidth = percentage * containerWidth;
        document.getElementById("progress-bar").style.width = progressBarWidth + "px";
    }
    if (score === 10) {
        instructions.textContent = "Congratulations! You're a computerwiz!"
        instructions.style.fontSize = "50px"
    }
    console.log(score)
    displayScore.textContent = `Score: ${score}`;
    fetchTrivia()
}
function scoreCount3 () {
    if (correctAnswer == incorrectAnswers[2]){
        score ++
        percentage = score / maxScore;
        progressBarWidth = percentage * containerWidth;
        document.getElementById("progress-bar").style.width = progressBarWidth + "px";
    }
    if (score === 10) {
        instructions.textContent = "Congratulations! You're a computerwiz!"
        instructions.style.fontSize = "50px"
    }
    console.log(score)
    displayScore.textContent = `Score: ${score}`;
    fetchTrivia()
}
function scoreCount4 () {
    if (correctAnswer == incorrectAnswers[3]){
        score ++
        percentage = score / maxScore;
        progressBarWidth = percentage * containerWidth;
        document.getElementById("progress-bar").style.width = progressBarWidth + "px";
    }
    if (score === 10) {
        instructions.textContent = "Congratulations! You're a computerwiz!"
        instructions.style.fontSize = "50px"
    }
    console.log(score)
    displayScore.textContent = `Score: ${score}`;
    fetchTrivia()
}

buttonOne.addEventListener("click", scoreCount1);
buttonTwo.addEventListener("click", scoreCount2);
buttonThree.addEventListener("click", scoreCount3);
buttonFour.addEventListener("click", scoreCount4);

