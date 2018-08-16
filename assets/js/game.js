
//Word Bank
const bank = ['Puffy Shirt','Bubble Boy','Shiksappeal','Sponge Worthy','Yada Yada','Serenity Now','Festivus','Regift','Mimbo','Shrinkage','Shmoopie','Double Dip','Big Salad','Sideler','Close Talker']

//Random Choose
let randomWord = Math.floor(Math.random() * bank.length);
let chooseWord = bank[randomWord];
let underScore = [];
let rightWord=[];
let wrongWord=[];

//dom variable
let domUnderScore = document.getElementsByClassName('inputDash');
let domUsed = document.getElementsByClassName('rightGuess');



console.log(chooseWord);
//Underscore matching
let createUnderscore = () => {
    for(let i = 0; i < chooseWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(createUnderscore());


//player choice
document.addEventListener('keypress', (event) => {
    let keyConvert = String.fromCharCode(event.keyCode);
    
//player is right, add to the use words array

    if (chooseWord.indexOf(keyConvert) > -1) {
       rightWord.push(keyConvert);

       underScore[chooseWord.indexOf(keyConvert)] = keyConvert;
       domUnderScore[0].innerHTML = underScore.join(' ');
       console.log(keyConvert);
       
       
       if (underScore.join('') == chooseWord) {
           alert('Well, Well, Well. Looks like you know your stuff...');
       }

    }
    else { 
        
        wrongWord.push(keyConvert);
        domUsed[0].innerHTML = wrongWord;
       }
    
});



