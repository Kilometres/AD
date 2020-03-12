const token = "NTI1NjYzMjE0MDA0OTk0MDQ4.Dv57Ng.paGFNBzOZKLW8A_o6ZRcAN40YZo"
const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!";
const mentionHook = new Discord.WebhookClient('525739937773912075', 'C3Srn8U4JujVyilQULLHA5kTNuc4X0ORayOfdOi-7D-VGV57ok43EKCnK56xLYOnMhzg');

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

function embed1(y) {
return new Discord.RichEmbed()
// .setTitle("message")
//.setAuthor("Kilo's KianBot", client.avatar)
.setColor("#007FFF")
.addField("User", y.author)
.addField("Channel", "#"+y.channel.name)
.addField("message", y)
.setTimestamp()
.setThumbnail(y.author.avatarURL);
}

function embed2(msg, args, argstr, cmd, message) {
return new Discord.RichEmbed()
.setColor("#007FFF")
.addField("msg", msg)
.addField("args", args.length > 0 ? args : 'N/A')
.addField("argstr", argstr.length > 0 ? argstr : 'N/A')
.addField("cmd", cmd)
.addField("message", message);
}

function embed3(user, args) {
user2 = client.users.find("username", args[0]);
return new Discord.RichEmbed()
.setColor("#007FFF")
.addField("ID", user2)
.addField("Username", user2.name)
.addField("Avatar", user2.avatar)
.addField("Email", user2.email)
.addField("#0000", user2.discriminator);
}

client.on('message', (message) => {
  let msg = message.content.toLowerCase();
  let args = message.content.trim().split(' ');
  let argstr = args.slice(1).join(' ');
  let cmd = args.shift().toLowerCase();

  if (message.author == client.user) {
    return
  } else if (cmd == prefix+"say") {
    message.channel.send(argstr);
  } else if (cmd == prefix+"info") {
    message.channel.send(embed2(msg, args, argstr, cmd, message));
  } else if (cmd == prefix+"find") {
    message.channel.send(embed3(args[1], args));
  } else if (msg.includes("gay")) {
    message.delete();
    message.channel.send("I'm telling Mrs Brazzier!");
  } else if (msg == "!createhook") {
message.channel.createWebhook("Logs", "https://vectortoons.com/wp-content/uploads/2013/03/VectorToons-hook.jpg")

.then(webhook => webhook.edit("Name", "Logger")

.then(wb => message.author.send(`Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}`)).catch(console.error))
  }
  else if (message.author.id === client.user.id || message.author.bot) return;
  else if (message.isMentioned("269860788540407830") || message.mentions.everyone || (message.guild && message.mentions.roles.filter(r => message.guild.member("269860788540407830").roles.has(r.id)).size > 0)) {
      if (message.author.id === "269860788540407830") return;
      mentionHook.send("You were mentioned!");
  } else if (cmd == prefix+"wh") {
    mentionHook.send(argstr);
  }
});

client.login(token);
