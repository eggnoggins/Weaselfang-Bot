// Require the necessary discord.js classes
const { token } = require('./config.json');
const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const { userMention, memberNicknameMention, channelMention, roleMention } = require('@discordjs/builders');

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

//8ball

client.on('messageCreate', async message => {
    if (message.author.bot) return
    if (message.content.toLowerCase().startsWith("weasel,")) {
      let replies = 
	  ["Yes.", 
	  "No.", 
	  "It really depends.", 
	  "I wouldn't think so.",
	  "As if it ever could.",
	  "You shouldn't test your luck.",
	  "Very well.",
	  "If it makes you happy, yes.",
	  "I don't see why not.",
	  "Only StarClan knows.",
	  "``Weaselfang lets out a yawn, blinking at you.`` I'm a bit busy right now, ask someone else.",
	  "I'd like to believe so.",
	  "It's possible.",
	  "Absolutely.",];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.reply(result)
    }
  })

client.login(token);