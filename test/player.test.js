const assert = require('assert');
const Player = require('../player');

describe('Player', function() {
    it('should reduce health when taking damage', function() {
        const player = new Player('TestPlayer', 100, 10, 10);
        player.takeDamage(30);

        assert.strictEqual(player.health, 70);
    });

    it('should not reduce health below zero', function() {
        const player = new Player('TestPlayer', 50, 10, 10);
        player.takeDamage(60);

        assert.strictEqual(player.health, 0);
    });

    it('should be alive if health is greater than zero', function() {
        const player = new Player('TestPlayer', 10, 10, 10);
        
        assert.strictEqual(player.isAlive(), true);
    });

    it('should not be alive if health is zero', function() {
        const player = new Player('TestPlayer', 10, 10, 10);
        player.takeDamage(10);

        assert.strictEqual(player.isAlive(), false);
    });
});