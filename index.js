// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { SlashCommandBuilder } = require('@discordjs/builders');

var prefix = "w!";
var triggerWords = ['weasel,'];
var triggerWords = ['w!roll'];

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Weaselfang has been sent to the mountain!');

	client.user.setPresence({ activities: [{ name: 'with fire 🔥' }], type: 'PLAYING' });
});

function cat(name, clan, age, rank, desc, attr, strength, speed, stamina, social, intelligence, leadership, img) {
    return name + "\n" + clan + "\n" + age + "\n" + rank + "\n" + desc + "\n" + attr + "\nStrength - " + strength + "/10 \nSpeed - " + speed + "/10 \nStamina - " + stamina + "/10 \nSocial - " + social + "/10 \nIntelligence - " + intelligence + "/10 \nLeadership - " + leadership + "/10\n" + img;
}

class Trigger {
    constructor(name, lambda) {
        this.name = name;
        this.doShit = lambda;
    }
}

triggerWords.push(new Trigger("weasel,", () => {
    switch (Math.round(Math.random() * 21)) {
        case 0:
            return "Yes.";
        case 1:
            return "No.";
        case 2:
            return "Perhaps...";
        case 3:
            return "How dare you ask such a vile question, off to The Peak with you!";
        case 4:
            return "Very well...";
        case 5:
            return "I suppose not.";
        case 6:
            return "Absolutely not! Mousebrain...";
        case 7:
            return "You see this fang? **Weasel opens her maw to show off a fang the size of a bears claw.** Ask that again and it'll be lodged in your neck.";
        case 8:
            return "That may as well be the case.";
        case 9:
            return "Quit testing your luck.";
        case 10:
            return "**Weasel throws your question into the flames :fire:**";
        case 11:
            return "<:GLARES:657393420792233984>";
        case 12:
            return "Absolutely!";
        case 13:
            return "<:gUN:657393362445271050><:GLARES:657393420792233984>";
        case 14:
            return "https://cdn.discordapp.com/attachments/647204779348721684/657397252381474829/triggered.jpg";
        case 15:
            return "Of course.";
        case 16:
            return "Why not.";
        case 17:
            return "I'm unsure."
        case 18:
            return "Only StarClan knows."
        case 19:
            return "Yes!"
        case 20:
            return "I guess... 👉👈"
        case 21:
            return "I approve."            

    }
}));




client.on('message', function(message) {
    if (message.author.bot) return;
    if (message.content.toLowerCase().startsWith(prefix + "hello")) {
        message.reply("Hello!");
    }
});


// Login to Discord with your client's token
client.login(token);