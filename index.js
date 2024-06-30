const readline = require('readline');
const Player = require('./player');
const Game = require('./game');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function getPlayerAttributes(name) {
    console.log(`\nEnter attributes for ${name}`);

    const health = await getPositiveIntegerInput('Health: ');
    const strength = await getPositiveIntegerInput('Strength: ');
    const attack = await getPositiveIntegerInput('Attack: ');

    return new Player(name, health, strength, attack);
}

async function getPositiveIntegerInput(prompt) {
    let value;
    while (true) {
        const input = await askQuestion(prompt);
        value = parseInt(input, 10);
        if (!isNaN(value) && value > 0) {
            break;
        }
        console.log("Please enter a positive integer.");
    }
    return value;
}

async function startGame() {
    console.log("=== Welcome to the Magical Arena Game ===");

    console.log("\nInput attributes for Player A:");
    const playerA = await getPlayerAttributes('Player A');

    console.log("\nInput attributes for Player B:");
    const playerB = await getPlayerAttributes('Player B');

    rl.close();

    console.log("\n=== Starting the game ===\n");
    const game = new Game(playerA, playerB);
    await game.fight();
}

startGame();
