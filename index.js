// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { prefix } = "w!";

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
 });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!');
	client.user.setPresence({ activities: [{ name: 'with fire 🔥' }], type: 'PLAYING' });

	let handler = require('./command-handler')
	if (handler.default) handler = handler.default

	handler(client)
});



// Login to Discord with your client's token
client.login(token);