const Board = require("./board");

class Game {
  constructor() {
    this.board = new Board();
    this.players = [new Player("x"), new Player("o")];
  }
}

module.exports = Game;