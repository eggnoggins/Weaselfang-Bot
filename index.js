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

 const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

 const commands = [];

 client.commands = new Collection();

 for (const file of commandFiles) {
	 const command = require (`./commands/${file}`);
	 commands.push(command.data.toJSON());
	 client.commands.set(command.data.name, command);
 }
client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	client.user.setActivity('with fire 🔥', { type: 'PLAYING' });

	const CLIENT_ID = client.user.id;

	const rest = new REST
});

client.login(token);