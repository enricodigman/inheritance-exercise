const character = {
    name: this.name,
    attack(target) {
      console.log(`${this.name} attacked ${target.name}`)
    },
    heal(char) {
      console.log(`${this.name} healed ${char.name}`)
    },
  }
  
  const player1 = Object.create(character)
  
  const player2 = Object.create(character)
  
  player1.name = 'Player1'
  player2.name = 'Player2'
  player1.attack(player2)
  player2.heal(player1)
  