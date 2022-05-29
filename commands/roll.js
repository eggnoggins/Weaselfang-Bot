exports.run = (client, message, args) => {
        if (message.author.bot) return
      let replies = [
        message.channel.send('<@' + message.author.id + '> pong'),
        '🎲 <@${user.id}> rolled a 1!',
        '🎲 <@${user.id}> rolled a 2!', 
        '🎲 <@${user.id}> rolled a 3!', 
        '🎲 <@${user.id}> rolled a 4!',];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.channel.send(result)
    }

exports.name = "roll";