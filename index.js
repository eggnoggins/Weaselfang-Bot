// Require the necessary discord.js classes
const { token } = require('./config.json');
const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const triggerWords = ['weasel,'];

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });
  const config = require("./config.json");
  // We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
  client.config = config;
  client.commands = new Collection();
  
  const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
  for (const file of events) {
	const eventName = file.split(".")[0];
	const event = require(`./events/${file}`);
	client.on(eventName, event.bind(null, client));
  }
  
  const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
  for (const file of commands) {
	const commandName = file.split(".")[0];
	const command = require(`./commands/${file}`);
  
	console.log(`Attempting to load command ${commandName}`);
	client.commands.set(commandName, command);
  }

client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!')
	client.user.setActivity('with fire 🔥', { type: 'PLAYING' });
});

client.login(token);