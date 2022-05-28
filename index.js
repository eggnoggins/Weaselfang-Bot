// Require the necessary discord.js classes
const DJS = require('discord.js');
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Route } = require('discord-api-types/v9');
const { Intents } = DJS;
const { token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');

// Create a new client instance
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES
	]
 });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	let handler = require('./command-handler')
	if (handler.default) handler = handler.default
	handler(client)
	console.log('Weaselfang has been sent to the mountain!')
});


client.login(token);