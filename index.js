// Require the necessary discord.js classes
const { token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require("@discordjs/rest");
const { SlashCommandBuilder } = require('@discordjs/builders');

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
	 // Set a new item in the Collection
	 // With the key as the command name and the value as the exported module
	 client.commands.set(command.data.name, command);
 }
client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	client.user.setActivity('with fire 🔥', { type: 'PLAYING' });

	const CLIENT_ID = client.user.id;

	const rest = new REST
});

client.login(token);