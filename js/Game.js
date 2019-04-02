let newPhrase = new Phrase;
let letter = document.querySelectorAll('.letter');
const hide = document.querySelector('.hide');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null;
    }

    createPhrases() {
        newPhrase.phrase = [];
        newPhrase.phrase.push('I like computer programming');
        newPhrase.phrase.push('Gyros are my favorite');
        newPhrase.phrase.push('We walked to the beach');
        newPhrase.phrase.push('Have you ever seen a double rainbow');
        newPhrase.phrase.push('I am on my way');
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
        } else {
            key.classList.add("chosen");
            this.checkForWin();
        }
        keyFound = false;
        // console.log(newPhrase);
        // newPhrase.phrase.showMatchedLetter();
    }

    removeLife() {
        let liveHeart = document.body.querySelectorAll(".tries img[src = 'images/liveHeart.png']");
        let heart = document.body.querySelectorAll(".tries img");

        for(let i = heart.length - 1; i >= 0; i--) {
            if(liveHeart[i]) {
               return heart[i].setAttribute("src", "images/lostHeart.png");
            }
        }
    }

    // checkForWin() { 
    //     let letter = document.querySelectorAll('.letter');
    //     console.log(letter.length);
    //     for(let i = 0; i < letter.length; i++) {
    //         if(letter[i] === hide){
    //             console.log('test');
    //         }
    //     }
    // }

    
    checkForWin() { 
        let hide = document.querySelectorAll('.hide.letter');
        if(hide.length === 0){
            this.gameOver();
        }
    }

    gameOver() {
        const overlay = document.body.querySelector('#overlay');
        const game_over_massage = document.body.querySelector('#game-over-message');
        game_over_massage.innerHTML = 'You won';
        overlay.style.display = '';
        overlay.className = 'win';
    }
    
    // Begins game by selecting a random phrase and displaying it to user
    
    startGame() {
        let phraseUl = document.querySelector('#phrase ul');
        let key = document.querySelectorAll('.key');
        let lostHeart = document.querySelectorAll('[src = "images/lostHeart.png"]');
        
        phraseUl.innerHTML = '';
        
        for(let i = 0; i < key.length; i++) {
            key[i].className = "key";
            key[i].disabled = false;
        }

        for(let i = 0; i < lostHeart.length; i++) {
            lostHeart[i].setAttribute("src", "images/liveHeart.png");
        }

        document.body.querySelector('#overlay').style.display = 'none';
        const phrase = new Phrase;
        this.activePhrase = phrase;
        const savePhrase = this.activePhrase.setRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        this.activePhrase = savePhrase;
    }
}
