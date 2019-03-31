let newPhrase = new Phrase;

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases() {
        newPhrase.phrase = [];
        newPhrase.phrase.push('phraseOne');
        newPhrase.phrase.push('phraseTwo asfas');
        newPhrase.phrase.push('phraseThree asfas qwe');
        newPhrase.phrase.push('phraseFour asfas');
        newPhrase.phrase.push('phraseFive asfas r');
        this.phrases = newPhrase.phrase;
        return newPhrase.phrase;
        
    }

    getRandomPhrase() {
       this.createPhrases();
       let randomNumber = Math.floor(Math.random() * newPhrase.phrase.length);
       return newPhrase.phrase[randomNumber];
    }

    handleInteraction() {
        let key = event.target;
        key.disabled = true;
        if(keyFound === false) {
            key.classList.add("wrong");
            this.removeLife();
        }
        keyFound = false;

    }

    removeLife() {
        let liveHeart = document.body.querySelectorAll(".tries img[src = 'images/liveHeart.png']");
        let heart = document.body.querySelectorAll(".tries img");

        for(let i = heart.length - 1; i >= 0; i--) {
            if(liveHeart[i]) {
               return heart[i].setAttribute("src", "images/lostHeart.png");
            }
        }

        // if(liveHeart[4]) {
        //     heart[4].setAttribute("src", "images/lostHeart.png");
        // } else if (liveHeart[3]) {
        //     heart[3].setAttribute("src", "images/lostHeart.png");
        // }
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
