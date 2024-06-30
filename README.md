### Input
The game requires the user to input attributes for two players: Player A and Player B. The attributes are as follows:

1. **Health**: The starting health of the player (a positive integer).
2. **Strength**: The player's defense strength (a positive integer).
3. **Attack**: The player's attack power (a positive integer).

The program will prompt the user to input these attributes for both players. If the user inputs a non-numeric value or a negative number, the program will prompt the user again to enter a valid positive integer.

### How the Game Works

1. The game starts by asking the user to provide the attributes for Player A and Player B.

2. **Input Prompts**:
    - Enter attributes for Player A:
      - Health: 
      - Strength: 
      - Attack: 
    - Enter attributes for Player B:
      - Health: 
      - Strength: 
      - Attack: 

3. The game proceeds with players taking turns to attack each other until one player's health reaches zero.
    - The player with the lower health starts attacking first.
    - Each player rolls an attacking die (a 6-sided die) and the defending player rolls a defending die (also a 6-sided die).

4. **Attack and Defense Calculation**:
    - Attack Damage: `attack attribute * attacking die roll outcome`
    - Defense Damage: `strength attribute * defending die roll outcome`
    - Actual damage dealt: `Max(0, Attack Damage - Defense Damage)`
    - The defender's health is reduced by the actual damage dealt.

5. The game ends when any player's health reaches zero, and the surviving player is declared the winner.

### Expected Output

The output consists of step-by-step play-by-play narration of each turn, showing the players' actions, die rolls, and the results of attacks and defenses.
