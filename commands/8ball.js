exports.run = (client, message, args) => {
    if (message.author.bot) return
    if (message.content.toLowerCase().startsWith("komaeda,")) {
      let replies = ['answer', 'yet another answer', 'wow another answer', 'you guessed it, another answer'];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.reply(result)
    }
}

  exports.name = "8ball";