const game = new Game;
const newPhrase = new Phrase;


document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("click", function(){
    newPhrase.checkLetter(game.activePhrase);
    console.log(game.activePhrase);
});

