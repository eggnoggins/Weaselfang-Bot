
module.exports = {}

callback: (message, ...args) => {
    let sum = 0

    for (const arg of args) {
        console.log(args)
        message.reply('pong')
    }

}