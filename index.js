const discordBot = require("discord-bot")
const client = new discord.client();

var playerCount = '2'
var player1Party = false
var player1XP = '0'
var player1ID = 'unclaimed'

var races = [
   'Gnome: +2DEX; SIZE:SMALL; RACIAL: Tinkering: Advantage on mechanic rolls.',
   'Dwarves: +2STR; SIZE:MED; RACIAL: Dark Iron: +2 armor',
   'Halfling: +2DEX; SIZE:SMALL; RACIAL: Subtle: chance to steal (DEX ROLL)',
   'Human: +1DEX, STR, and INT; SIZE:MED; RACIAL: Diplomat: Favorable trades (main stat roll)',
   'Eldyn: +2INT; SIZE:LARGE; RACIAL: Scholar: Adv on Research, Perception, and Learning roles',
   'Dragonkin: +2INT OR STR; SIZE:LARGE; RACIAL: Halfblood: Advantage on rolls clearing status effects',
   ]

client.on('ready', () => {
  console.log('Rolling to start: successful');
});

// claim player 1

client.on('message', message => {
  if (message.content === '!claim' {
    player1ID = message.author.id
  }
})

// makes a new player (hopefully lol)

client.on('message', message => {
  if (message.content === '!newChar') {
    new var 'player' + playerCount + 'Party' = false
    new var 'player' + playerCount + 'XP' = '0'
    new var 'player' + playerCount + 'ID' = message.author.id
    .then(new playerCount = playerCount + 1)
  }
});

// print classes and races

client.on('message', message => {
  if (message.content === '!races') {
    message.channel.send();
  }
}
