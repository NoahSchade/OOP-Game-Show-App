const game = new Game;


document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("click", function(){
    newPhrase.checkLetter(game.activePhrase.toLowerCase());
    game.handleInteraction();
});

