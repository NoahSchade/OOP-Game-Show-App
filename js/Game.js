class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases(phrase1, phrase2, phrase3, phrase4, phrase5) {
        this.phrases.push(phrase1);
        this.phrases.push(phrase2);
        this.phrases.push(phrase3);
        this.phrases.push(phrase4);
        this.phrases.push(phrase5);
        return this.phrases;
    }

    getRandomPhrase() {
       let randomNumber = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomNumber];
    }

    
    // Begins game by selecting a random phrase and displaying it to user
    
    startGame() {
        document.body.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase;
        phrase.addPhraseToDisplay();
    }

}