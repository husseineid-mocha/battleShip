class Board {
    constructor(numRos, numCols, numShips, grid) {
        this.numRos = numRos
        this.numCols = numCols
        this.numShips = numShips
        this.grid = this.populateGrid()
    }

    populateGrid() {
        let myGrid = []
        for (let i = 0; i < this.numRos; i++) {
            let row = []
            for (let j = 0; j < this.numCols; j++) {
                row.push(null)
            }
            myGrid.push(row)
            this.randomNum()
        }
    }

    randomNum() {
        const rand = (min, max) => Math.floor(Math.random() * max) + min

        let shipCount = 0;
        while (shipCount < this.numships) {
            const randX = rand(0, this.numRows);
            const randY = rand(0, this.numCols);

            // Only add ship if there isn't one here already
            if (myGrid[randX][randY] == null) {
                myGrid[randX][randY] = "S"
                shipCount++;
            }
        }
        return this.grid
    }

    display() {
        // TODO: Print the game board with marks on any spaces that have been fired
        // upon. Be sure not to display the unhit ships to the user! Hint: you might
        // be able to use console.table()
    }

    count() {
        // TODO: Return the number of valid targets (ships) remaining.
    }

    isValidMove(pos) {
        // TODO: Take in an attack position (in the form of an array [row, col]) and
        // return true if the position is a valid move.
    }

    isGameOver() {
        // TODO: Return true if the game is over (when all ships are hit).
    }

    attack() {
        // TODO: Take in an attack position in the form of an array, [row, col], as
        // a parameter. Update this.grid depending on if the position is an empty
        // space or a damaged ship.
    }
}

let board = new Board(5, 5, 1)
console.table(board.grid)

module.exports = Board;