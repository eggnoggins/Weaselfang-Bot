// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { prefix } = "w!";

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!');

	client.user.setPresence({ activities: [{ name: 'with fire 🔥' }], type: 'PLAYING' });
});


// Login to Discord with your client's token
client.login(token);