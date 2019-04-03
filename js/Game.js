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
       let randomNumber = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomNumber];
    }

    handleInteraction(e) {
        if(e === 'mousedown') {
            let key = event.target;
            console.log(key);
            let keyContent = event.target.textContent;
            key.disabled = true;
            if(keyFound === false) {
                key.classList.add("wrong");
                this.removeLife();
            } else {
                newPhrase.showMatchedLetter(keyContent);
                key.classList.add("chosen");
                this.checkForWin();
            }
            keyFound = false;
        }

        if(e === 'keypress') {
            let x = String.fromCharCode(event.which || event.keyCode);
            let key = document.querySelectorAll('.key');
            for(let i = 0; i < document.querySelectorAll(".section .keyrow .key").length; i++) {
                if (key[i].textContent === x) {
                 console.log(key[i]);
                }
            }
        }
            // let keyContent = event.target.textContent;
            // key.disabled = true;
            // if(keyFound === false) {
            //     key.classList.add("wrong");
            //     this.removeLife();
            // } else {
            //     newPhrase.showMatchedLetter(keyContent);
            //     key.classList.add("chosen");
            //     this.checkForWin();
            // }
            // keyFound = false;
        }

    removeLife() {
        let liveHeart = document.body.querySelectorAll(".tries img[src = 'images/liveHeart.png']");
        let heart = document.body.querySelectorAll(".tries img");

        if(liveHeart.length !== 0) {
            heart[liveHeart.length - 1].setAttribute("src", "images/lostHeart.png");
            this.missed++;
            if (this.missed === heart.length) {
                this.gameOver();
            }
        }
    }

    
    checkForWin() { 
        let hide = document.querySelectorAll('.hide.letter');
        if(hide.length === 0){
            this.gameOver();
        }
    }

    gameOver() {
        const overlay = document.body.querySelector('#overlay');
        const game_over_massage = document.body.querySelector('#game-over-message');
        let heart = document.body.querySelectorAll(".tries img");

        if(this.missed === heart.length) {
            overlay.className = 'lose';
            game_over_massage.innerHTML = 'You lost!';
        } else {
            overlay.className = 'win';
            game_over_massage.innerHTML = 'You won!';
        }

        overlay.style.display = '';
        this.missed = 0;
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
