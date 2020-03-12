const con = require("./dconfig.json");
const Discord = require('discord.js')
const client = new Discord.Client()
var fs = require('fs')

client.on('ready', () => {
  console.log("Online as: "+client.user.tag)

  client.user.setActivity("people on there phone.", {type: "WATCHING"})

  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log("-"+guild.name)
    guild.channels.forEach((channel) => {
      console.log("--"+channel.name+" : "+channel.type+" : "+channel.id)
    })
  })
})

client.on('message', (msg) => {
  var low = msg.content.toLowerCase();
  let args = msg.content.split(' ');
  let args2 = msg.content.split(' ').splice(1).join(' ').split(' | ')
  let cmd = args[0].split('').slice(con.prefix.length).join('').toLowerCase();
  let argstr = args.slice(1).join(' ');
  let argstr2 = args.slice(2).join(' ');

  if (msg.author == client.user) {
    return
  } else {
    if (low.startsWith(con.prefix)) {
      switch(args[1]) {
        case "phones":
          msg.reply(`Ah hell nah!`)
          break;
        case "user":
          let usr = client.users.find("username", argstr2);
          if (!usr) {
            usr = client.users.find("discriminator", args[2]);
            if (!usr) {
              msg.channel.send(`*<@${msg.author.id}>, Cannot find the user '${argstr2}'*`)
            }
          }
          if (usr) {
            msg.channel.send(usr.tag)
          }
          break;
        case "file":
        fs.readFile(args[2], 'utf8', function(err, data) {
          if (err) throw err;
          short1 = data.split(``).slice(0, 2000).join(``)
          short2 = data.split(``).slice(2000, 4000).join(``)
          short3 = data.split(``).slice(4000, 6000).join(``)
          msg.channel.send(short1)
          msg.channel.send(short2)
          if (short3 != ``) {
            msg.channel.send(short3)
          }

        });

          break;
        default:
          msg.reply(`Nah`)
      }
    }
  }
})

client.login(con.token)
