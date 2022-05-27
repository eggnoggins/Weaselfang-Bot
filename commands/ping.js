const { SlashCommandBuilder } = require('@discordjs/builders');

client.on("messageCreate", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send("pong!");
    } else
  
    if (message.content.startsWith("foo")) {
      message.channel.send("bar!");
    }
  });