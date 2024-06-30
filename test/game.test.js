const assert = require('assert');
const Game = require('../game');
const Player = require('../player');

describe('Game', function() {
    it('should roll a die between 1 and 6', function() {
        const game = new Game(new Player('A', 100, 10, 10), new Player('B', 100, 10, 10));
        const roll = game.rollDie(6);

        assert.ok(roll >= 1 && roll <= 6);
    });

    it('should correctly evaluate the fight between two players', async function() {
        const playerA = new Player('A', 50, 5, 10);
        const playerB = new Player('B', 50, 5, 10);

        const game = new Game(playerA, playerB);
        await game.fight();

        const winner = playerA.isAlive() ? playerA : playerB;
        assert.ok(winner.isAlive());
    });
});