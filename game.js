const Player = require('./player');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.attackDie = 6;
        this.defenseDie = 6;
    }

    rollDie(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

    async fight() {
        let attacker = this.player1.health <= this.player2.health ? this.player1 : this.player2;
        let defender = attacker === this.player1 ? this.player2 : this.player1;

        var round=1;
        while (attacker.isAlive() && defender.isAlive()) {
            console.log('');
            console.log(`Round ${round}`);
            await this.attack(attacker, defender);
            [attacker, defender] = [defender, attacker];
            await delay(3000); // 3 second delay between rounds
            round++;
        }

        const winner = attacker.isAlive() ? attacker : defender;
        console.log(`${winner.name} wins!`);
    }

    async attack(attacker, defender) {
        console.log(`${attacker.name} = ${attacker.health}    ${defender.name} = ${defender.health}`);
        console.log(' ');

        console.log(`${attacker.name} is attacking ${defender.name}...`);
        await delay(1000); // 1 second delay before rolls

        const attackRoll = this.rollDie(this.attackDie);
        console.log(`${attacker.name} rolled for attack: ${attackRoll}`);
        await delay(1000);

        const defenseRoll = this.rollDie(this.defenseDie);
        console.log(`${defender.name} rolled for defense: ${defenseRoll}`);
        await delay(1000);

        const attackDamage = attacker.attack * attackRoll;
        const defendDamage = defender.strength * defenseRoll;
        
        const damageDealt = Math.max(0, attackDamage - defendDamage);
        defender.takeDamage(damageDealt);

        console.log(`${attacker.name}'s attack damage: ${attackDamage}`);
        console.log(`${defender.name}'s defense strength: ${defendDamage}`);
        console.log(`${defender.name} takes ${damageDealt} damage; Health left: ${defender.health}\n`);
    }
}

module.exports = Game;
