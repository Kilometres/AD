const token = "NTE1OTQ2Mjk3Nzk1MjgwOTA2.DtsgCw._qCYfj-N09gAuX5-AqvHnmwnMrU"
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log("Online as: "+client.user.tag)

  client.user.setActivity("Jyde!", {type: "WATCHING"})

  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log("-"+guild.name)
    guild.channels.forEach((channel) => {
      console.log("--"+channel.name+" : "+channel.type+" : "+channel.id)
    })
  })
})

client.on('message', (recievedMessage) => {
  if (recievedMessage.author == client.user) {
    return
  }
  else if (recievedMessage=="!spam") {
    while (1 == 1) {
      recievedMessage.channel.send("I prefer meat!")
    }
  }

  else {
    return
  }
})

client.login(token)
