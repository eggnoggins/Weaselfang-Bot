exports.run = (client, message, args) => {
        if (message.author.bot) return
      let replies = [
        '🎲 ${message.author} rolled a 1!', 
        '🎲 ${message.author} rolled a 2!', 
        '🎲 ${message.author} rolled a 3!', 
        '🎲 ${message.author} rolled a 4!',];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.channel.send(result)
    }

exports.name = "roll";