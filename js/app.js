const game = new Game();
game.createPhrases('phrase1 aSDSsdf', 'phrase2 asasdfdf', 'pasdfhrase3 asdf', 'phrasdfase4 asdf', 'phrasadfe5 asdf');

const phrase = new Phrase;
phrase.addPhraseToDisplay()
console.log(phrase.phrase);


document.getElementById("btn__reset").addEventListener("click", function(){
    game.startGame();
});



document.getElementById("qwerty").addEventListener("click", function(){
    let key = event.target.textContent;
    for(let i = 0; i < phrase.phrase.length; i++) {
        if (key === phrase.phrase[i]) {
            console.log("match");
        }
    }
});