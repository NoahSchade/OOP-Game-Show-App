// const game = new Game();
// game.createPhrases('phrase1 aSDSsdf', 'phrase2 asasdfdf', 'pasdfhrase3 asdf', 'phrasdfase4 asdf', 'phrasadfe5 asdf');
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase}`);

let game;
document.getElementById("btn__reset").addEventListener("click", function(){
    game = new Game;
    game.startGame();
});