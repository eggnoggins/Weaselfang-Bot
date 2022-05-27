// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');



// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

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

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!');

	client.user.setPresence({ activities: [{ name: 'with fire 🔥' }], type: 'PLAYING' });
});

const prefix = "w!";
client.on("messageCreate", (message) => {
  // our new check:
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send("pong!");
});

// Login to Discord with your client's token
client.login(token);