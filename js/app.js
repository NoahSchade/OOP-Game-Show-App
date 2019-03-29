const game = new Game;
const newPhrase = new Phrase;

// newPhrase.addPhraseToDisplay();
console.log(newPhrase.phrase);

document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("click", function(){
    game.createPhrases();
    newPhrase.checkLetter();
});

