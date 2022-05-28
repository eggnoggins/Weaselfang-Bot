// Require the necessary discord.js classes
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require("@discordjs/rest");
const { prefix } = "w!"

const { Client, Intents, Collection } = require("discord.js")
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES
	]
 });

 client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
 
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	client.user.setActivity('with fire 🔥', { type: 'PLAYING' });
});

client.on('message', message => {
	if(!message.content.startsWith(PREFIX)|| message.author.bot) return 
	const arg = message.content.slice(PREFIX.length).split(/ +/)
	const command= arg.shift().toLowerCase()
	if (command === 'ping'){
		client.commands.get('ping').execute(message,arg)

	}
   
});

client.login(token);