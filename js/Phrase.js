class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const game = new Game;
        game.createPhrases('phrase1 wefqewf', 'phrase2 wefqewf', 'phrase3 wefqewf', 'phrase4 wefqewf', 'phrase5 wefqewf');
        this.phrase = game.getRandomPhrase();
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

    checkLetter() {

    }

    showMatchedLetter() {

    }
}