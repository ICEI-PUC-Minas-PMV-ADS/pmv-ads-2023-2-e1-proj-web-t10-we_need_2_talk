let levelZero = document.getElementById('level-zero'); 
let levelOne = document.getElementById('level-um');
let levelTwo = document.getElementById('level-dois');
let levelThree = document.getElementById('level-tres');
let levelFour = document.getElementById('level-quatro');
let levelFive = document.getElementById('level-cinco');

function level(level) {
    switch(level) {
        case "level-zero":
            levelOne.checked = false;
            levelTwo.checked = false;
            levelThree.checked = false;
            levelFour.checked = false;
            levelFive.checked = false;
            break;
        case "level-um":
            levelZero.checked = true;
            levelTwo.checked = false;
            levelThree.checked = false;
            levelFour.checked = false;
            break;
        case "level-dois":
            levelZero.checked = true;
            levelOne.checked = true;
            levelThree.checked = false;
            levelFour.checked = false;
            levelFive.checked = false;
            break;
        case "level-tres":
            levelZero.checked = true;
            levelOne.checked = true;
            levelTwo.checked = true;
            levelFour.checked = false;
            levelFive.checked = false;
            break;
        case "level-quatro": 
            levelZero.checked = true;
            levelOne.checked = true;
            levelTwo.checked = true;
            levelThree.checked = true;
            levelFive.checked = false;
            break;
        case "level-cinco":
            levelZero.checked = true;
            levelOne.checked = true;
            levelTwo.checked = true;
            levelThree.checked = true;
            levelFour.checked = true;
            
            break;
    }
    
}

const btc = document.querySelector('button')

btc.addEventListener('click', function(){
    alert("Enviado com Sucesso");
});