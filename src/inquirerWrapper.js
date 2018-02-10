function Game(){
	
	this.inquirer = require('inquirer');
	


	this.startInquirer = function(){

		this.inquirer.prompt([
		{
			name:'guess',
			message:'Guess the remaining letters.',
			type : 'input'
		}

			]).then(answers => {
		    console.log(answers.guess);
		});
	};
}


module.exports = Game;