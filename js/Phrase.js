

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
    }
    

    checkLetter() {
        this.addPhraseToDisplay2();
        let key = event.target.textContent;
        // console.log(this.phrase);
        for(let i = 0; i < this.phrase.length; i++) {
            if (key === this.phrase[i]) {
                console.log("match");
            }
        }
    }

    showMatchedLetter() {

    }
}

