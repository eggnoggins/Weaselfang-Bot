
module.exports = {}
callback: (message, ...args) => {
    let sum = 0

    for (const arg of args) {
        sum += parseInt(arg)
    }

    message.reply(`The sum is ${sum}`)
},



client.on("messageCreate", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send("pong!");
    } else
  
    if (message.content.startsWith("foo")) {
      message.channel.send("bar!");
    }
  });