
//Word Bank
const bank = ['Puffy Shirt','Bubble Boy','Shiksappeal','Sponge Worthy','Yada Yada','Serenity Now','Festivus','Regift','Mimbo','Shrinkage','Shmoopie','Double Dip','Big Salad','Sideler','Close Talker']

//Random Choose
let randomWord = Math.floor(Math.random() * bank.length);
let chooseWord = bank[randomWord];
let underScore = [];

//test with console
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
    let convertKey = event.keyCode;
    let keyConvert = String.fromCharCode(convertKey);
//player is right

    if (keyConvert.indexOf(chooseWord) > -1) {
        console.log(true);
    }


});

