// Require the necessary discord.js classes
const DJS = require('discord.js')
const { Intents } = DJS
const { token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');

// Create a new client instance
const client = new DiscordJS.Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES
	]
 });

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	let handler = require('./command-handler')
	if (handler.default) handler = handler.default

	handler(client)
});


client.login(token);