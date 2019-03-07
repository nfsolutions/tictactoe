const Square = require("./square");

class Board {

    constructor(grid) {
        this.playerX = 'x';
        this.playerO = 'o';
        this.grid = grid || [
            new Square(), new Square(), new Square(),
            new Square(), new Square(), new Square(),
            new Square(), new Square(), new Square()
        ];
    }

    /*
     * Return 'x' or 'o' depending on the winner.
     * If there is a tie, return '-'.
     * If there is no winner yet, return null.
     */
    checkWinner() {
        // if the grid is non existent or size of array is 0
        if (this.grid === undefined || this.grid === [] || this.grid.length == 0) {
            return null;
        } else {
            let i;
            for (i = 0; i < this.grid.length; i++) {
                if (!this.grid[i].state) {
                    return '-';
                }
            }
        }
        // the array consists on 9 fields with index 0 to 8
        // winning horizontals cells are 0,1,2 and 3,4,5 and 6,7,8
        if (this.isRowEqual(0) === this.playerX
            || this.isRowEqual(1) === this.playerX || this.isRowEqual(2) === this.playerX) {
            return this.playerX;
        }
        if (this.isRowEqual(0) === this.playerO
            || this.isRowEqual(1) === this.playerO
            || this.isRowEqual(2) === this.playerO) {
            return this.playerO;
        }

        // winning vertical cells are 0,3,6 and 1,4,7 and 2,5,8
        if (this.isColEqual(0) === this.playerX
            || this.isColEqual(1) === this.playerX
            || this.isColEqual(2) === this.playerX) {
            return this.playerX;
        }
        if (this.isColEqual(0) === this.playerO
            || this.isColEqual(1) === this.playerO
            || this.isColEqual(2) === this.playerO) {
            return this.playerO;
        }
        if (this.isDiagonalEqual() === this.playerX) {
            return this.playerX;
        }
        if (this.isDiagonalEqual() === this.playerO) {
            return this.playerO;
        }


        return '-';
    }

    isRowEqual(numberOfRow) {
        if (this.grid[0 + 3 * numberOfRow].state === this.playerX
            && this.grid[1 + 3 * numberOfRow].state === this.playerX
            && this.grid[2 + 3 * numberOfRow].state === this.playerX) {
            return this.playerX
        } else if
        (this.grid[0 + 3 * numberOfRow].state === this.playerO
            && this.grid[1 + 3 * numberOfRow].state === this.playerO
            && this.grid[2 + 3 * numberOfRow].state === this.playerO) {
            return this.playerO;
        } else {
            return null;
        }
    }

    isColEqual(numberOfCol) {
        if (this.grid[0 + numberOfCol].state === this.playerX
            && this.grid[3 + numberOfCol].state === this.playerX
            && this.grid[6 + numberOfCol].state === this.playerX) {
            return this.playerX
        } else if (this.grid[0 + numberOfCol].state === this.playerO
            && this.grid[3 + numberOfCol].state === this.playerO
            && this.grid[6 + numberOfCol].state === this.playerO) {
            return this.playerO
        } else {
            return null;
        }
    }

    /**
     * winning diagonal values in the array are
     * 0,4,8 or 2,4,6
     */
    isDiagonalEqual() {
        if (this.grid[0].state === this.playerX &&
            this.grid[4].state === this.playerX &&
            this.grid[8].state === this.playerX
        ) {
            return this.playerX;
        }
        if (this.grid[2].state === this.playerO &&
            this.grid[4].state === this.playerO &&
            this.grid[6].state === this.playerO
        ) {
            return this.playerO;
        }
    }
}

module
    .exports = Board;
