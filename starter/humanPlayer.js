const readline = require("readline");

class HumanPlayer {
    constructor() {
        this.rl = readline.createInterface(process.stdin, process.stdout);
    }

    getMove(processMove) {
        this.rl.question(
            "Choose a coordinate to hit. \n> ",
            (answer) => {
                const [row, col] = answer.split(",");
                processMove([row, col]);
            }
        );
        // TODO: Ask the user for their move and process the answer using the rl
        // interface.Invoke the callback function (processMove), passing in
        // the given answer in the form of an array representing [row, col]
    }

    processGameOver(isWon, turns) {
            if (isWon) {
                console.log(`Nice job, you won in ${turns} turns!`);
            } else {
                console.log("You lose!");
            }
            this.rl.close();
        }
        // TODO: Display a different message depending on if the player won or lost
        // the game. Close the rl interface.
}


module.exports = HumanPlayer;