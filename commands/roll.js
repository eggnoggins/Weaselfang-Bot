exports.run = (client, message, args) => {
        if (message.author.bot) return
      let replies = [
        '🎲 ${user} rolled a 1!', 
        '🎲 ${user} rolled a 2!', 
        '🎲 ${user} rolled a 3!', 
        '🎲 ${user} rolled a 4!',];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.channel.send(result)
    }

exports.name = "roll";