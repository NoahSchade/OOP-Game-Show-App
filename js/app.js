const game = new Game;

document.getElementById("btn__reset").addEventListener("mousedown", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("mousedown", function() {
    for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
        if(event.target === document.querySelectorAll(".section .keyrow .key")[i]) {
            newPhrase.checkLetter(game.activePhrase.toLowerCase());
            game.handleInteraction();
        }
    }
});

