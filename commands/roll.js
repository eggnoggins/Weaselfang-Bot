exports.run = (client, message, args) => {
        if (message.author.bot) return
        const user = message.author;
      let replies = [
        '🎲' (message.author.id), 'rolled a 1!',
        '🎲' (message.author.id), 'rolled a 2!', 
        '🎲' (message.author.id), 'rolled a 3!', 
        '🎲' (message.author.id), 'rolled a 4!',];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.channel.send(result)
    }

exports.name = "roll";