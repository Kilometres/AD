const Discord = require('discord.js')
const config = require("./config.json");
const client = new Discord.Client()

const webhook = require("webhook-discord")
const Hook = new webhook.Webhook("https://canary.discordapp.com/api/webhooks/525739937773912075/C3Srn8U4JujVyilQULLHA5kTNuc4X0ORayOfdOi-7D-VGV57ok43EKCnK56xLYOnMhzg")
const whclient = new Discord.WebhookClient('525739937773912075', 'C3Srn8U4JujVyilQULLHA5kTNuc4X0ORayOfdOi-7D-VGV57ok43EKCnK56xLYOnMhzg');
const log = new Discord.WebhookClient('525981441574830080', 'jiDomh_qJmbxrQko7IU84bJmTbVcWe5Vp7b6tSrMi2KE18G9E_pd9hSl-EiXuhSBxqQR');

var standard_input = process.stdin;
standard_input.setEncoding('utf-8');

standard_input.on('data', function (data) {
  let args = data.trim().split(' ');
  let argstr = args.slice(2).join(' ');

  if (data.startsWith(".stop")) {
    process.exit();
  } else if (data.startsWith(".emb")) {
    whclient.send(emb1(args[1], args[2], argstr));
    console.log(args);
  }
});

function emb1(col, f, v) {
if (col == "") {
  col = "#FFFFFF"
} else if (col == "red") {
  col = "#FF0700"
} else if (col == "green") {
  col = "#07FF00"
} else if (col == "blue") {
  col = "#007FFF"
} else if (col == "black") {
  col = "#000000"
} else if (col == "white") {
  col = "#FFFFFF"
}
if (f == "") {
  f = "[None]"
}
if (v == "") {
  v = "[None]"
}

return new Discord.RichEmbed()
.setColor(col)
.setTimestamp()
.addField(f, v);
}

client.on('ready', () => {
  console.log("Online as: "+client.user.tag)
  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log("-"+guild.name)
    guild.channels.forEach((channel) => {
      console.log("--"+channel.name+" : "+channel.type+" : "+channel.id)
    })
  })
})

client.on('message', (message) => {
  let msg = message.content.toLowerCase();
  let args = message.content.trim().split(' ');
  let argstr = args.slice(1).join(' ');
  let cmd = args.shift().toLowerCase();

  if (message.author == client.user) {
    return
  }
  else if (message=="!loop") {
    message.channel.send("!loop")
  }
})

client.login(config.token)
