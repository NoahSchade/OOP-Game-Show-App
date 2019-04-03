const game = new Game;

document.getElementById("btn__reset").addEventListener("mousedown", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("mousedown", function() {
    for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
        if(event.target === document.querySelectorAll(".section .keyrow .key")[i]) {
            console.log(event.target);
            console.log(typeof(event.target));
            newPhrase.checkLetter(game.activePhrase.toLowerCase());
            let mousedown = 'mousedown';
            game.handleInteraction(mousedown);
        }
    }
});

document.addEventListener("keypress", function() {
    // let x = String.fromCharCode(event.which || event.keyCode);
        // for(let i = 0; i < document.querySelectorAll('.key').length; i++) {
            // if(x === document.querySelectorAll('.key')[i].textContent){
                let keypress = 'keypress';
                game.handleInteraction(keypress);
            // }
        // } 
    });


//     for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
//         if(event.target === document.querySelectorAll(".section .keyrow .key")[i]) {
//             console.log(event.target);
//             console.log(typeof(event.target));
//             newPhrase.checkLetter(game.activePhrase.toLowerCase());
//             let mousedown = 'mousedown';
//             game.handleInteraction(mousedown);
//         }
//     }
// });

















// document.addEventListener("keypress", function() {
//     let x = String.fromCharCode(event.which || event.keyCode);
//     console.log(x);
//     let html = JSON.parse('<button class="key">' + x + '</button>');
//     console.log(html);
//     for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
//         let y = document.querySelectorAll(".section .keyrow .key")[i].parentNode.innerHTML = html;
//         console.log(y);
//         if(html === y) {
//             console.log("test");
//             newPhrase.checkLetter(game.activePhrase.toLowerCase());
//             game.handleInteraction();
//         }
//     }
// });
