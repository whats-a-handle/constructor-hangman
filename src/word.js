function Word(wordInput){

	this.answer = wordInput;
	this.answerArray = this.answer.split('');
	this.maskedAnswer = wordInput.split('').map(function(letter){return '_'});
	this.lettersRemaining = this.answerArray;
	this.isGuessed = false;

	this.checkIsGuessed = () =>{

		if(this.maskedAnswer.join('') === this.answer){

			return true;
		}
		else{
			return false;
		}
	}
	this.checkLetter = (guessedLetter) =>{

		const Word = this;
		let letterExists = false;
		if(Word.lettersRemaining.includes(guessedLetter)){
				letterExists = true;

			Word.answerArray.map((letter,position) =>{

				if(letter === guessedLetter){
					Word.maskedAnswer[position] = guessedLetter;
					Word.isGuessed = Word.checkIsGuessed();
				}
			});
					
		}
				
		return letterExists;
	}


}

module.exports = Word;