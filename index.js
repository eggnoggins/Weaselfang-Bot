// Require the necessary discord.js classes
const DJS = require('discord.js')
const { Intents } = DJS
require('dotenv/config')
const { SlashCommandBuilder } = require('@discordjs/builders');

// Create a new client instance
const client = new Client({ 
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
 });

// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	let handler = require('./command-handler')
	if (handler.default) handler = handler.default
	client.user.setPresence({ activities: [{ name: 'with fire 🔥' }], type: 'PLAYING' });

	handler(client)
});

client.login(process.env.TOKEN);