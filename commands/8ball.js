exports.run = (client, message, args) => {
    client.on('messageCreate', async message => {
        if (message.author.bot) return
        if (message.content.toLowerCase().startsWith("weasel,")) {
          let replies = ['answer', 'yet another answer', 'wow another answer', 'you guessed it, another answer'];
          let result = replies[Math.floor(Math.random() * (replies.length))]
    
          message.reply(result)
        }
      })
    message.channel.send("pong!").catch(console.error);
}

  exports.name = "8ball";