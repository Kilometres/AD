const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
var standard_input = process.stdin;

standard_input.on('data', function (data) {
  let args = data.trim().split(' ');
  let argstr = args.slice(1).join(' ');

  if (data.startsWith(".wh")) {
    whclient.send(argstr);
  } else if (data.startsWith(".stop")) {
    process.exit();
  } else if (data.startsWith(".emb")) {
    whclient.send(embed_1("#007FFF", argstr, "From Console"));
  }
});

var chanID = [
  "525664810139123714", // general
  "525975051284119553" // logs
]

client.on("ready", () => {
  console.log("Online as: "+client.user.tag);
  standard_input.setEncoding('utf-8');
  console.log("Stndrd Inp:");

  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log("-"+guild.name)
    guild.channels.forEach((channel) => {
      console.log("--"+channel.name+" : "+channel.type+" : "+channel.id)
    })
  })
});

const webhook = require("webhook-discord")
const Hook = new webhook.Webhook("https://canary.discordapp.com/api/webhooks/525739937773912075/C3Srn8U4JujVyilQULLHA5kTNuc4X0ORayOfdOi-7D-VGV57ok43EKCnK56xLYOnMhzg")
const whclient = new Discord.WebhookClient('525739937773912075', 'C3Srn8U4JujVyilQULLHA5kTNuc4X0ORayOfdOi-7D-VGV57ok43EKCnK56xLYOnMhzg');
const log = new Discord.WebhookClient('525981441574830080', 'jiDomh_qJmbxrQko7IU84bJmTbVcWe5Vp7b6tSrMi2KE18G9E_pd9hSl-EiXuhSBxqQR');

function embed_1(color, f, v) {
return new Discord.RichEmbed()
.setColor(color)
.setTimestamp()
.addField(f, v);
}

function embed_2(color, v1, v2, v3, v4, img) {
return new Discord.RichEmbed()
.setColor(color)
.addField("Sender", v1)
.addField("Message", v2)
.addField("Command", v3)
.addField("Time", v4)
.setThumbnail(img);
}

function embed_3(color, v1, v2, v3, v4, v5, img) {
return new Discord.RichEmbed()
.setColor(color)
.addField("Sender", v1)
.addField("Reciever", v2)
.addField("Message", v3)
.addField("Command", v4)
.addField("Time", v5)
.setThumbnail(img);
}

function help_emb() {
return new Discord.RichEmbed()
.setColor("#07FF00")
.addField(".dm <name> <msg>", "Send an embed to a user with a custom message")
.addField(".say <msg>", "Send a custom a msg from the webhook")
.addField(".emb <msg>", "Send a custom embed with a custom message")
.addField(".react <emoji>", "React the message with a :emoji:")
.setTimestamp();
}

client.on('message', (message) => {
  let msg = message.content.toLowerCase();
  let args = message.content.trim().split(' ');
  let argstr = args.slice(1).join(' ');
  let cmd = args.shift().toLowerCase();

  log.send(embed_3("#007FFF", message.author.tag, member.user.tag, argstr, message, new Date, message.author.avatarURL));
  if (com == "say") {
      whclient.send(argstr);
      console.log("------------WH------------");
      console.log('Sender: '+message.author.tag+'\nMessage: '+argstr+'\nTime: '+new Date);
      console.log("--------------------------");
      log.send(embed_2("#007FFF", message.author.tag, argstr, message, new Date, message.author.avatarURL));
    } else if (com == "emb") {
      whclient.send(embed_1("#007FFF", argstr, "From "+message.author.tag));
      console.log("------------Emb------------");
      console.log('Sender: '+message.author.tag+'\nMessage: '+argstr+'\nTime: '+new Date);
      console.log("---------------------------");
      log.send(embed_2("#007FFF", message.author.tag, argstr, message, new Date, message.author.avatarURL));
    } else if (com == "dm") {
      let args = message.content.trim().split(' ');
      let argstr = args.slice(2).join(' ');

      let member = message.guild.members.find('displayName', args[1])

      if (message.guild.members == null) {return}
      if (member == null) {return}
      if (argstr == "") {return}
      member.send(embed_1("#FF0700", argstr, "From "+message.author.tag));
      console.log("------------DM------------");
      console.log('Sender: '+message.author.username+'\nReciever: '+member.user.username+'\nMessage: '+argstr+'\nTime: '+new Date);
      console.log("--------------------------");
      log.send(embed_3("#007FFF", message.author.tag, member.user.tag, argstr, message, new Date, message.author.avatarURL));
    } else if (com == "avatar") {
      message.reply(message.author.avatarURL);
    } else if (com == "react") {
      message.react(args[0]);
    } else if (com == "stop") {
      if (message.author.id == config.ownerID) {
        Hook.warn("Alert! aBuSiVe BeHaViOuR", message.author.tag+" is shutting down the bot!")
        setTimeout(function(){
          process.exit();
        }, 2000);

      } else {
        Hook.err("Alert! aBuSiVe BeHaViOuR", message.author.tag+" tried to shutdown the bot!")
        log.send(embed_2("#FF0700", message.author.tag, message, cmd, new Date, message.author.avatarURL));
      }
    } else if (com == "average") {
      let sum = 0
      for (let i=0; i<args.length; i++) {
        sum += parseFloat(args[i])
      }
      sum = sum / args.length
      message.channel.send(sum)
    } else if (com == "help") {
      whclient.send(help_emb());
    } else if (com == "embcol") {
      let argstr = args.slice(1).join(' ');
      let col;
      switch (args[0]) {
        case "cyan":
          col = "007FFF";
          break;

        case "red":
          col = "#FF0700"
          break;

        case "green":
          col = "#07FF00"
          break;

        case "grey":
          col = "#272e38"
          break;
      }
      whclient.send(embed_1(col, argstr, "From "+message.author.tag));
    } else if (com == "gcc") {
      whclient.send("Online as: "+client.user.tag);
      whclient.send("Servers:")
      client.guilds.forEach((guild) => {
        whclient.send("-"+guild.name)
        guild.channels.forEach((channel) => {
          whclient.send("--"+channel.name+" : "+channel.type+" : "+channel.id)
        })
      })
    }
});
client.login(config.token);
