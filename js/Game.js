newPhrase2 = new Phrase;

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases() {
        // let newPhrase2 = new Phrase;
        newPhrase2.phrase = [];
        newPhrase2.phrase.push('phrase1 asfas wef');
        newPhrase2.phrase.push('phrase2 asfas');
        newPhrase2.phrase.push('phrase3 asfas qwe');
        newPhrase2.phrase.push('phrase4 asfas');
        newPhrase2.phrase.push('phrase5 asfas 2r');
        // return newPhrase2.phrase;
    }

    getRandomPhrase() {
       this.createPhrases();
       let randomNumber = Math.floor(Math.random() * this.phrases.length);
       return newPhrase2.phrase[randomNumber];
    }

    
    // Begins game by selecting a random phrase and displaying it to user
    
    startGame() {
        document.body.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase;
        phrase.addPhraseToDisplay();
        console.log(newPhrase2.phrase);
        
    }

}