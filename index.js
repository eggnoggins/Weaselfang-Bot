// Require the necessary discord.js classes
const { token } = require('./config.json');
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Route } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const { Client, Intents, Collection } = require("discord.js")
const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS, 
		Intents.FLAGS.GUILD_MESSAGES
	]
 });

client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	client.user.setActivity('with fire 🔥', { type: 'PLAYING' });
});


client.login(token);