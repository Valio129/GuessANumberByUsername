function guessANumber() {
    let tries = 10
    win = false
    let triesCounter = tries
    console.log(`You have ${triesCounter} attepts to beat the game.`);
    var readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let computerGuess = Math.floor(Math.random() * 180)
    let guess
    let recursiveAsyncReadLine = function () {
        if (triesCounter === 0) {
            if (win !== true) {
                console.log('Sorry, you lost :(');
            }
            readline.question('Play again? (y/n):', answer => {

                if (answer === 'y') {
                    // guessANumber()
                    console.log('Okay!');
                    triesCounter = tries
                    win = true
                    console.log(`You have ${triesCounter} attepts to beat the game.`);
                    recursiveAsyncReadLine()
                } else {
                    console.log('Okay, bye!');
                    return readline.close()
                }
            })
        } else {

            readline.question('Guess the number (0-100): ', number => {
                guess = Number(number)
                if (guess <= 100 && guess >= 0) {
                    if (guess === computerGuess) {
                        console.log('You guess it!')
                        win = true
                        triesCounter = 0
                        return

                    } else if (guess < computerGuess) {
                        console.log('Too Low!');
                        triesCounter--
                        console.log(`${triesCounter} attepts left`);
                        recursiveAsyncReadLine()
                    } else if (guess > computerGuess) {
                        console.log('Too High!');
                        triesCounter--
                        console.log(`${triesCounter} attepts left`);
                        recursiveAsyncReadLine()
                    }

                } else {
                    console.log('Invalid input! Try again...');
                    recursiveAsyncReadLine()

                }
            })
        }

    }
    recursiveAsyncReadLine();

}
guessANumber()