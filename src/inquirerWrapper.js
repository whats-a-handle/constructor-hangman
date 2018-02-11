const Word = require('../src/word.js');
const FS = require('fs');

function Game(){
	this.inquirer = require('inquirer');
	this.currentWord = undefined;
	this.attempts = 3;
	this.wordList = ['hello','goodbye','pokemon','goose','cactus'];

	this.nextRound = () =>{
		const Game = this;
		Game.currentWord = Game.randomWord();
		Game.attempts = 3;
		Game.playGame();
	}
	this.randomWord = () => {
		const Game = this;
		const randomIndex = Math.floor(Math.random() * Game.wordList.length);
		const randomWord = new Word(Game.wordList[randomIndex]);
		Game.wordList.splice(randomIndex,1);
		return randomWord;

	}

	this.tryAgain = () =>{

		const Game = this;
		const message = Game.currentWord.maskedAnswer;

		return message;
	}

	this.playGame = () =>{
		const Game = this;
		console.log('Guess each letter');

		this.inquirer.prompt([{

			name:'guess',
			message: Game.currentWord.maskedAnswer,
								 
			
			validate : (guessedLetter) =>{

				const correctGuess = Game.currentWord.checkLetter(guessedLetter);

				if(!correctGuess){
					Game.attempts--;
					console.log('Attempts Left: ' + Game.attempts);
				}

				if(Game.attempts < 1){
					console.log('you lose');
					//console.log(Game.currentWord);
					return true;		
				}



				return Game.currentWord.checkIsGuessed();
			}
		}]).then(answers =>{

			if(Game.wordList.length > 0){
				console.log('Next Round!');
				Game.nextRound();

			}
			else{
				console.log('No more words to guess!');
			}
			
		});

	}	
}


module.exports = Game;