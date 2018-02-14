//`index.js` running and will start the game.
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Constructor-Hangman!");
console.log("Guess a name of a Chicago sports team.");
console.log("Let's Go!");
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['bears', 'bulls', 'blackhawks', 'sox', 'cubss'],
 	wordsWon: 0,
 	guessesRemaining: 12,
 	currentWrd: null,
 	
 	startGame: function (word) {
 		this.resetGuesses();
 		this.currentWord = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWord.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWord.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWord.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWord.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();