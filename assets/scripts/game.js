
// start of game is false
const startGame = false;
const gameCategories = document.getElementsByClassName('game-categories');
const startModal = document.getElementById('myModal')
let cardiacDictionary = [
    { drugName: 'Bisoprolol',
        hint: 'Beta-blocker to slow heart rate',
    },
    {
        drugName: 'Amlodopine',
        hint: 'Decrease blood pressure'
    }
]

$(document).ready(function (){
    for(let category of gameCategories){
        category.addEventListener("click", function(){
             {  
                let gameType = this.getAttribute('data-type');
                console.log(gameType);
                // modal to desapear
                startModal.style.display = 'none'; 
                addBox();              
               
            }
        });
    }
})

function addBox () {
    let word = cardiacDictionary[0].drugName;

    for (letter of word) {
        let letterPerBox = document.createElement('div');
        letterPerBox.className = "letter-box col-1";
        document.getElementById("game-area").appendChild(letterPerBox);
        console.log (letterPerBox);
    }
};



module.exports = { startGame , gameCategories};