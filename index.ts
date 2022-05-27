import DiscordJS, { ClientUser, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Weaselfang has been sent to the mountain!')

})

client.login(process.env.token)

// Set the client user's presence
client.user?.setPresence({ activities: [{ name: 'with discord.js' }], status: 'idle' });