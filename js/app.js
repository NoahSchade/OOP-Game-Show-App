const game = new Game;


document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("click", function() {
    for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
        if(event.target === document.querySelectorAll(".section .keyrow .key")[i]) {
            newPhrase.checkLetter(game.activePhrase.toLowerCase());
            game.handleInteraction();
        }
    }
});

