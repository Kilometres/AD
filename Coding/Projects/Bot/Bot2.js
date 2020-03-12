const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
  console.log("Online as: "+client.user.tag);
  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log("-"+guild.name)
    guild.channels.forEach((channel) => {
      console.log("--"+channel.name+" : "+channel.type+" : "+channel.id)
    })
  })
});

client.on('message', (msg) => {
  if (msg.author != client) {
    var low = msg.content.toLowerCase();
    let args = msg.content.split(' ');
    let argstr = args.slice(1).join(' ');

    if (low == ".cmds") {
      msg.channel.send(".t (truth), .d (dare), .q <user> (question)")
      msg.delete()
    } else if (low.startsWith(".t")) {
      if (argstr == "") {
        msg.channel.send(msg.author.tag+" has chosen **__Truth__**.")
        msg.delete()
      }
      else {
        msg.channel.send("The **__Truth__** is: "+argstr)
        msg.delete()
      }
    } else if (low.startsWith(".d")) {
      if (argstr == "") {
      msg.channel.send(msg.author.tag+" has chosen **__Dare__**.")
      msg.delete()
    } else {
      msg.channel.send("The **__Dare__** is: "+argstr)
      msg.delete()
    }
    } else if (low.startsWith(".q")) {
      let name = args[1];
      msg.delete()
      if (name == undefined) {
        name = "Question";
      }
      msg.channel.send(`${name}, **__Truth__** or **__Dare__**?`)
    } else if (low.includes('adrian') || low.includes('adrien') || low.includes('naidra') || low.includes('neidra')) {
      if (msg.author.id != config.ownerID) {
      msg.delete()
    }
    } else if (low.startsWith(".say")) {
      msg.channel.send(argstr)
      msg.delete()
    } else if (low.startsWith(".ping")) {
      let usr = client.users.find("username", argstr);
      if (usr == undefined) {
        msg.channel.send(`Cannot find the user '${args[1]}'`)
      } else {
        msg.channel.send("<@"+usr.id+">")
        msg.delete()
      }
    } else if (low.startsWith(".pic")) {
      let usr = client.users.find("username", argstr);
      if (usr == undefined) {
        msg.channel.send(`Cannot find the user '${args[1]}'`)
      } else {
        msg.channel.send(usr.avatarURL)
        msg.delete()
      }
    }
  }
})

client.login(config.token);
