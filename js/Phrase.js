let keyFound = false;

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement("li");
            let listLetter = document.body.querySelector('#phrase ul').appendChild(li);
            if(this.phrase[i] !== ' ') {
                listLetter.classList.add('hide');
                listLetter.classList.add('letter');
                listLetter.classList.add(this.phrase[i].toLowerCase());
                let t = document.createTextNode(this.phrase[i]);
                li.appendChild(t);
            } else {
                listLetter.classList.add('hide');
                listLetter.classList.add('space');
                let t = document.createTextNode(this.phrase[i]);
                li.appendChild(t);
            }
                
        }
    }

    setRandomPhrase() {
        const game = new Game;
        this.phrase = game.getRandomPhrase();
        return this.phrase;
    }
    

    checkLetter(holder) {
        let keyContent = event.target.textContent;
        for(let i = 0; i < holder.length; i++) {
            if (keyContent === holder[i]) {
                keyFound = true;
            }
        }
    }

    showMatchedLetter(letter) {
        for(let i = 0; i < document.body.querySelectorAll('.letter.' + letter).length; i++) {
            document.body.querySelectorAll('.letter.' + letter)[i].className = `show letter ${letter}`;
        }
    }

    
}