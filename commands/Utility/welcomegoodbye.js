module.exports = (client) => {

const channelId = "647192592479551499";
client.on("guildMemberAdd", (member) => {
  console.log(member);

  const message = `Welcome <@${
    member.id
  }> to our server!
    .toString()}`;

  const channel = member.guild.channels.cache.get(channelId);
  channel.send(message);
});
}