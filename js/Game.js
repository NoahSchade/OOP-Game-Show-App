let newPhrase2 = new Phrase;

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases() {
        newPhrase2.phrase = [];
        newPhrase2.phrase.push('phraseOne');
        newPhrase2.phrase.push('phraseTwo asfas');
        newPhrase2.phrase.push('phraseThree asfas qwe');
        newPhrase2.phrase.push('phraseFour asfas');
        newPhrase2.phrase.push('phraseFive asfas 2r');
        this.phrases = newPhrase2.phrase;
        return newPhrase2.phrase;
        
    }

    getRandomPhrase() {
       this.createPhrases();
       let randomNumber = Math.floor(Math.random() * newPhrase2.phrase.length);
       return newPhrase2.phrase[randomNumber];
    }

    
    // Begins game by selecting a random phrase and displaying it to user
    
    startGame() {
        document.body.querySelector('#overlay').style.display = 'none';
        const phrase = new Phrase;
        this.activePhrase = phrase;
        const savePhrase = this.activePhrase.setRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.activePhrase = savePhrase;
    }
}
