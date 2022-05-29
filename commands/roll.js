exports.run = (client, message, args) => {
        if (message.author.bot) return
      let replies = [
        "🎲 <@" + message.author.id + "> rolled a 1!",
        "🎲 <@" + message.author.id + "> rolled a 2!", 
        "🎲 <@" + message.author.id + "> rolled a 3!", 
        "🎲 <@" + message.author.id + "> rolled a 4!",
        "🎲 <@" + message.author.id + "> rolled a 5!",
        "🎲 <@" + message.author.id + "> rolled a 6!",
        "🎲 <@" + message.author.id + "> rolled a 7!",
        "🎲 <@" + message.author.id + "> rolled a 8!",
        "🎲 <@" + message.author.id + "> rolled a 9!",
        "🎲 <@" + message.author.id + "> rolled a 10!",
        "🎲 <@" + message.author.id + "> rolled a 11!",
        "🎲 <@" + message.author.id + "> rolled a 12!",
        "🎲 <@" + message.author.id + "> rolled a 13!",
        "🎲 <@" + message.author.id + "> rolled a 14!",
        "🎲 <@" + message.author.id + "> rolled a 15!",
        "🎲 <@" + message.author.id + "> rolled a 16!",
        "🎲 <@" + message.author.id + "> rolled a 17!",
        "🎲 <@" + message.author.id + "> rolled a 18!",
        "🎲 <@" + message.author.id + "> rolled a 19!",
        "🎲 <@" + message.author.id + "> rolled a 20!",];
      let result = replies[Math.floor(Math.random() * (replies.length))]

      message.channel.send(result)
    }

exports.name = "roll";