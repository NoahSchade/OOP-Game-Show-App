const game = new Game;

let heart = document.body.querySelectorAll(".tries img");
for(let i = 0; i < heart.length; i++) {
    heart[i].style.display = 'none';
}

document.getElementById("btn__reset").addEventListener("mousedown", function(){
    game.startGame();
});

document.getElementById("qwerty").addEventListener("mousedown", function() {
    for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
        if(event.target === document.querySelectorAll(".section .keyrow .key")[i]) {
            let mousedown = 'mousedown';
            newPhrase.checkLetter(game.activePhrase.toLowerCase(), mousedown);
            game.handleInteraction(mousedown);
        }
    }
});

document.addEventListener("keypress", function() {
    if(document.querySelector('#overlay').style.display === 'none') {
        let keypress = 'keypress';
        newPhrase.checkLetter(game.activePhrase.toLowerCase(), keypress);
        game.handleInteraction(keypress);    
    } 
});

document.body.style="user-select: none";
for (let i = 0; i < document.querySelectorAll('img[src = "images/liveHeart.png"]').length; i++) {
    document.querySelectorAll('img[src = "images/liveHeart.png"]')[i].style.filter = "hue-rotate(130deg)";
}