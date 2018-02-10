function Letter(letterInput){

	this.value = letterInput;
	this.maskedValue = '_';
	this.guessed = false;

	this.checkGuess = function(letterInput){
		if(this.value === letterInput){
			this.guessed = true;
		}
	};

	this.updateLetterMask = function(){

		if(this.guessed){

			return this.value;
		}		
	};

}