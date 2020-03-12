const Discord = require("discord.js");
const id = require("./kom.json");
const client = new Discord.Client();
const komTS = new Discord.WebhookClient(id.tswh, 'o9_tKLBuPxNqg-fBTm5SQfN-tqmQzFIKxG0bn7hOSQQmhtG8A1PTSN3r_dMtnjEItJVX');
const komLG = new Discord.WebhookClient(id.lgwh, 'sUNDJYL4_th1h5uv9qcSNI5Y09qYmSH-nSL5HY-CJUGDVqoR1gQryFSltMrsEKRHHIiY');
const komARS = new Discord.WebhookClient(id.arswh, '2amUQykTGSeMXcb_oGgzvBRZey6TXPVTQ6yCnosnnXHaeC9G0bDbsLNiKo013INtkRdL');
const komDB = new Discord.WebhookClient(id.dbwh, 'pLApveREVEVTMUT32cdOkF4SSRdssI-gGAVZ_FLn6YMjcBJ_GH1_7qcGkQyLrpN0vAFH');
const komEM = new Discord.WebhookClient(id.emwh, 'efMCsg8nOEuwjhNndsQg40h_tQifO6Vp2k2eb2PHqzHWPOVJHT358RdXsTcNgn4jv7PU');
var opt = {};
var mssg;
var mssg2;
var msg;
var long;

client.on("ready", () => {
  console.log("Online as: "+client.user.tag);
  client.channels.get(id.tsch).send('#Koms is online.')
  client.channels.get(id.lgch).send('#Koms is online.')
  client.channels.get(id.arsch).send('#Koms is online.')
  client.channels.get(id.dbch).send('#Koms is online.')
  client.channels.get(id.emch).send('#Koms is online.')
});

client.on('message', (msg) => {

function opt() {
  opt = {
    username: msg.author.tag,
    avatarURL: msg.author.avatarURL
  }
}
function ts() {
  opt()
  komLG.send(mssg, opt)
  komARS.send(mssg, opt)
  komDB.send(mssg, opt)
  komEM.send(mssg, opt)
  console.log(`${msg.author.tag}@${msg.guild.name}: ${mssg}`)
}
function lg() {
  opt()
  komTS.send(mssg, opt)
  komARS.send(mssg, opt)
  komDB.send(mssg, opt)
  komEM.send(mssg, opt)
  console.log(`${msg.author.tag}@${msg.guild.name}: ${mssg}`)
}
function ars() {
  opt()
  komTS.send(mssg, opt)
  komLG.send(mssg, opt)
  komDB.send(mssg, opt)
  komEM.send(mssg, opt)
  console.log(`${msg.author.tag}@${msg.guild.name}: ${mssg}`)
}
function db() {
  opt()
  komTS.send(mssg, opt)
  komLG.send(mssg, opt)
  komARS.send(mssg, opt)
  komEM.send(mssg, opt)
  console.log(`${msg.author.tag}@${msg.guild.name}: ${mssg}`)
}
function em() {
  opt()
  komTS.send(mssg, opt)
  komLG.send(mssg, opt)
  komARS.send(mssg, opt)
  komDB.send(mssg, opt)
  console.log(`${msg.author.tag}@${msg.guild.name}: ${mssg}`)
}

  function chan() {
    mssg = msg.content;
    if (mssg.length < 2) {
      mssg += mssg;
    } else if (mssg.length > 32) {
      long = new Discord.RichEmbed()
      .setAuthor(msg.author.tag, msg.author.avatarURL)
      .addField('Message:', mssg);

      client.channels.get(id.tsch).send(long)
      client.channels.get(id.lgch).send(long)
      client.channels.get(id.arsch).send(long)
      client.channels.get(id.dbch).send(long)
      client.channels.get(id.emch).send(long)
      console.log(`${msg.author.tag}@${msg.guild.name}: ${mssg}`)
    }
    if (mssg.length > 2 && mssg.length < 32) {
      switch (msg.channel.id) {
        case id.tsch:
          ts()
          break;
        case id.lgch:
          lg()
          break;
        case id.arsch:
          ars()
          break;
        case id.dbch:
          db()
          break;
        case id.emch:
          em()
          break;
        default:
          break;
      }
    }
  }

  switch(msg.author.id) {
    case id.tswh:
      break;
    case id.lgwh:
      break;
    case id.arswh:
      break;
    case id.dbwh:
      break;
    case id.emwh:
      break;
    case '526026685792124929':
      break;
    default:
      switch (msg.channel.id) {
        case id.tsch:
          chan()
          break;
        case id.lgch:
          chan()
          break;
        case id.arsch:
          chan()
          break;
        case id.dbch:
          chan()
          break;
        case id.emch:
          chan()
          break;
        default:
          break;
      }
      break;
    }
  });

function upd() {

}



client.login(id.token);
