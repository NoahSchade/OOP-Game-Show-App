

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        for (let i = 0; i < this.phrase.length; i++) {
            var li = document.createElement("li");
            let listLetter = document.body.querySelector('#phrase ul').appendChild(li);
            if(this.phrase[i] !== ' ') {
                listLetter.classList.add('hide');
                listLetter.classList.add('letter');
                listLetter.classList.add(this.phrase[i]);
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

    addPhraseToDisplay2() {
        const game2 = new Game;
        game2.createPhrases();
        this.phrase = game2.getRandomPhrase();
        return this.phrase;
    }
    

    checkLetter(holder) {
        let key = event.target.textContent;
        for(let i = 0; i < holder.length; i++) {
            if (key === holder[i]) {
                console.log("match");
                this.showMatchedLetter(key);
            }
        }
    }

    showMatchedLetter(letter) {
        for(let i = 0; i < document.body.querySelectorAll('.letter.' + letter).length; i++) {
            document.body.querySelectorAll('.letter.' + letter)[i].className = `show letter ${letter}`;
        }
    }
}

