
// start of game is false
const startGame = false;
const gameCategories = document.getElementsByClassName('game-categories');
const startModal = document.getElementById('myModal')
let cardiacDictionary = [
    { drugName: 'Bisoprolol',
        hint: 'Beta-blocker to slow heart rate',
    },
    {
        drugName: 'Potassium',
        hint: 'electrolyte'
    }
];

let painDictionary = [
    {
        drugName: 'oromorph',
        hint: 'painkiller',
    },
    {
        drugName: 'fentanyl',
        hint: 'painkiller',
    }
];

document.addEventListener("DOMContentLoaded", (event) => {
    for(let category of gameCategories){
        category.addEventListener("click", function(){
             {  
                let gameType = this.getAttribute('data-type');
                console.log(gameType);
                let choice;
                if (gameType === 'cardiac') {
                    choice = cardiacDictionary;

                } else if (gameType === 'pain') {
                    choice = painDictionary;
                } else {
                    alert("No items chosen");
                }
                // modal to desapear
                let word = randomIndex(choice).drugName;

                startModal.style.display = 'none'; 
                addBox(word);  
                addGuessletterBox(word);
                        
               
            }
        });
    }
    
});

// Add div per letter of word
function addBox (word) {

    for (letter of word) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box col-1";
        letterPerBox.dataset.letter = letter; // https://blog.webdevsimplified.com/2020-10/javascript-data-attributes/
        document.getElementById("game-area").appendChild(letterPerBox);
        console.log (letterPerBox);
    }
};






// https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
// function to generate a random index
function randomIndex (array) {
    // should return a random number between the array lenght
    return array[(Math.floor(Math.random() * array.length))];

}

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) { 
  
       // Generate random number 
       let j = randomIndex(array);
                  
       let temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
      
   return array;
}

function shuffle2(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }


function addGuessletterBox (word) {
    
    let shuffledWord = shuffle2(word);

    console.log(shuffledWord);

    for (letter of shuffledWord) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box col-2";
        letterPerBox.dataset.letter = letter;
        letterPerBox.innerText = letter;
        document.getElementById("letter-area").appendChild(letterPerBox);
        console.log(letterPerBox);
    }
}
module.exports = { startGame , gameCategories, addBox, randomIndex , cardiacDictionary, painDictionary};