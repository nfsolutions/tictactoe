const Board = require("./board");
const Square = require("./square");

describe("checkWinner", () => {

    it("returns null when empty board", function () {
        const emptyBoard = new Board([]);
        expect(emptyBoard.checkWinner()).toEqual(null);
    });

    it("returns 'x' when Player x covered the first row with 'x'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('x'), new Square('x'), new Square('x'),
            new Square('o'), new Square('o'), new Square('x'),
            new Square('o'), new Square('x'), new Square('o')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('x');
    });

    it("returns 'o' when player o covered the first row with 'o'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('o'), new Square('o'), new Square('o'),
            new Square('x'), new Square('x'), new Square('o'),
            new Square('x'), new Square('o'), new Square('x')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('o');
    });

    it("returns 'x' when Player x covered the second row with 'x'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('o'), new Square('x'), new Square('x'),
            new Square('x'), new Square('x'), new Square('x'),
            new Square('o'), new Square('x'), new Square('o')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('x');
    });

    it("returns 'x' when Player x covered the third row with 'x'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('o'), new Square('x'), new Square('x'),
            new Square('o'), new Square('o'), new Square('x'),
            new Square('x'), new Square('x'), new Square('x')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('x');
    });


    it("returns 'o' when Player o covered the third col with 'o'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('o'), new Square('x'), new Square('o'),
            new Square('x'), new Square('x'), new Square('o'),
            new Square('x'), new Square('x'), new Square('o')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('x');
    });

    it("returns 'x' when Player x covered the upper left to lover right diagonal with 'x'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('x'), new Square('o'), new Square('o'),
            new Square('o'), new Square('x'), new Square('o'),
            new Square('o'), new Square('o'), new Square('x')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('x');
    });

    it("returns 'o' when Player o covered the upper right to lover left diagonal with 'o'", function () {
        // prepare grid, player 'x' wins because it covers the first row with 'x'
        const grid = [new Square('x'), new Square('x'), new Square('o'),
            new Square('x'), new Square('o'), new Square('x'),
            new Square('o'), new Square('x'), new Square('x')];
        const xBoard = new Board(grid);
        expect(xBoard.checkWinner()).toEqual('o');
    });

    //TODO Implementieren Sie Unit Tests für die verschiedenen Fälle von checkWinner

});
