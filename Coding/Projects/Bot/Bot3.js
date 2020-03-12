const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const wh = new Discord.WebhookClient('545625670026395668', 'q_kZfpdI49OjWlfxNOswCt6bPMmwfi5wiIUtgHz5hehl7NhXkmBvAWs3sOC918BOqK9p');
//const wh = new Discord.WebhookClient('545663496780775425', 'cl0ruwsbrpoWMXIaukJcyEmmcldVR80_x5j6UPBpefpObr0FQjRoMYJ-1vcLBg31BTfK');
// const wh = new Discord.WebhookClient('545953221089296385', 'pCV8ADxS3MhEhq-9IzQ8N3zyqRom0q42TJrAeiFfG602u14QpxJ4L9PIWrcSZhXVt9Xe');

var pre = config.prefix
const logsID = "544805666620047364"


var help_embed;
var tod_embed;
var col = "#007FFF";

function uphelp () {
  help_embed = new Discord.RichEmbed()
  .setColor(col)
  .setTimestamp()
  .addField(`Current Prefix`, `${pre}`)
  .addField(`${pre}help`, `Returns this list of commands`)
  .addField(`${pre}prefix`, `Returns the prefix`)
  .addField(`${pre}prefix <prefix>`, `Changes the prefix`)
  .addField(`${pre}color`, `Returns the color`)
  .addField(`${pre}color <color>`, `Changes the color`)
  .addField(`${pre}tod help`, `Brings up a help menu for Truth or Dare`)
  .addField(`${pre}stop`, `Shuts down the bot, can only be ran by Kilo#0624`);

  tod_embed = new Discord.RichEmbed()
  .setColor(col)
  .setTimestamp()
  .addField(`ToD`, `Truth or Dare?`)
  .addField(`${pre}tod t`, `Select truth.`)
  .addField(`${pre}tod t <truth>`, `Set the truth.`)
  .addField(`${pre}tod d`, `Select dare.`)
  .addField(`${pre}tod d <dare>`, `Set the dare.`)
  .addField(`${pre}tod q <user>`, `Asks 'Truth or Dare?'.`)
  .addField(`${pre}tod help`, `Brings up this menu.`);
}

client.on("ready", () => {
  client.user.setActivity("Beep!", {type: "LISTENING"})
  console.log("Online as: "+client.user.tag);
  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log("-"+guild.name)
    guild.channels.forEach((channel) => {
      console.log("--"+channel.name+" : "+channel.type+" : "+channel.id)
    })
  })
  uphelp();
});


client.on('message', (msg) => {
  var ment = msg.mentions.users.first();
  function upment() {
    ment = msg.mentions.users.first();
  }
  if (msg.author != client) {
    var low = msg.content.toLowerCase();
    let args = msg.content.split(' ');
    let args2 = msg.content.split(' ').splice(1).join(' ').split(' | ')
    let cmd = args[0].split('').slice(pre.length).join('').toLowerCase();
    let argstr = args.slice(1).join(' ');
    let argstr2 = args.slice(2).join(' ');

    if (low.startsWith(pre)) {
      switch (cmd) {
        case "help":
          msg.channel.send(help_embed)
          break;
        case "prefix":
          if (args[1]) {
            pre = args[1]
            uphelp()
            msg.channel.send(`*<@${msg.author.id}>, the prefix is now set to '${pre}'*`)
          } else {
            msg.channel.send(`*<@${msg.author.id}>, the current prefix is '${pre}'*`)
          }
          break;
        case "user":
          let usr = client.users.find("username", argstr);
          if (!usr) {
            usr = client.users.find("discriminator", args[1]);
            if (!usr) {
              msg.channel.send(`*<@${msg.author.id}>, Cannot find the user '${args[1]}'*`)
            }
          }
          if (usr) {
            msg.channel.send(usr.tag)
          }
          break;
        case "stop":
          if (msg.author.id == config.ownerID) {
            msg.channel.send(`*<@${msg.author.id}>, Shutting down the bot.*`)
            setTimeout(function(){
              process.exit();
            }, 2000);
          } else {
            msg.channel.send(`*<@${msg.author.id}>, attempted denied. You are not my father (Kilo).*`)
          }
          break;
        case "color":
          if (args[1]) {
            switch (args[1].toLowerCase()) {
              case "red":
                col = "#FF0000"
                break;
              case "blue":
                col = "#0000FF"
                break;
              case "green":
                col = "#00FF00"
                break;
              case "default":
                col = "#007FFF"
                break;
              default:
                col = args[1]
              }
            uphelp()
            msg.channel.send(`*<@${msg.author.id}>, The color is now set to '${col}'*`)
            break;
          } else {
            msg.channel.send(`*<@${msg.author.id}>, The color is set to '${col}'*`)
          }
          break;
        case "tod":
          if (args[1]) {
            switch (args[1].toLowerCase()) {
              case "t":
                if (args[2]) {
                  msg.channel.send(`*The truth is '${argstr2}'*`)
                } else {
                  msg.channel.send(`*<@${msg.author.id}> has chose **__Truth__***.`)
                }
                break;
              case "d":
                if (args[2]) {
                  msg.channel.send(`*The dare is '${argstr2}'*`)
                } else {
                  msg.channel.send(`*<@${msg.author.id}> has chose **Dare***.`)
                }
                break;
              case "q":
                if (!args[1]) {
                  msg.channel.send(`*<@${msg.author.id}>, please select a user.`)
                } else {
                  let usr = client.users.find("username", argstr2);
                  if (!usr) {
                    usr = client.users.find("discriminator", args[2]);
                    if (!usr) {
                      msg.channel.send(`*<@${msg.author.id}>, Cannot find the user '${args[2]}'*`)
                    }
                  }
                  if (usr) {
                    msg.channel.send(`*<@${usr.id}>, **__Truth__** or **__Dare__***.`)
                  }
                }
                break;
              case "help":
                msg.channel.send(tod_embed)
                break;
              case "a":
                if (args[2]) {
                  msg.channel.send(`*The answer is '${argstr2}'*`)
                } else {
                  msg.channel.send(`*<@${msg.author.id}> has chose not to **Answer***.`)
                }
                break;

              msg.delete()

              default:
                msg.channel.send(`*<@${usr.id}>, do '${pre}tod help' for a list of commands. *.`)
              }
            }
          break;
        case "summon":
          if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join()
              .then(connection => {
                msg.channel.send(`*<@${msg.author.id}>, summoned into #${msg.member.voiceChannel.name}.*`)
              })
          } else {
            msg.channel.send(`*<@${msg.author.id}>, you need to be in a voice channel to do that.*`)
          }

          break;
        case "disconnect":
          if (msg.guild.voiceConnection) {
            msg.guild.voiceConnection.disconnect()
            msg.channel.send(`*<@${msg.author.id}>, disconnected from the voice channel.*`)
          } else {
            msg.channel.send(`*<@${msg.author.id}>, the bot needs to be in a voice channel to do that.*`)
          }

          break;
        case "mim":
          if (!args[1]) {
            msg.channel.send(`*<@${msg.author.id}>, that command requireds a second field. Do ${pre}wh <message>*`)
          } else {
            let opt = {
              username: args[1],
              avatarURL: msg.author.avatarURL
            }

            let usr = client.users.find("username", args[1]);
            if (!usr) {
              usr = client.users.find("discriminator", args[1]);
              if (!usr) {
                msg.channel.send(`*<@${msg.author.id}>, Cannot find the user '${args[2]}'*`)
              }
            }
            if (usr) {
              opt.username = usr.username;
              opt.avatarURL = usr.avatarURL;
            }
            wh.send(argstr2, opt)
          }
          break;

        case "123bertscrush456":
          msg.channel.send("Shhh! Its Aksel")
          break;
        case "wh":
          if (!args2[0]) {
            msg.channel.send(`*<@${msg.author.id}>, that command requireds a field. Do ${pre}wh <name> | <message>*`)
          } else if (!args2[1]) {
            msg.channel.send(`*<@${msg.author.id}>, that command requireds a second field. Do ${pre}wh <name> | <message>*`)
          }
          else {
            let opt = {
              username: args2[0],
              avatarURL: msg.author.avatarURL
            }
            if (opt.username.length > 32) {
              msg.channel.send(`*<@${msg.author.id}>, The username must be between 2 and 32 characters.*`)
            } else if (opt.username.length < 2) {
              msg.channel.send(`*<@${msg.author.id}>, The username must be between 2 and 32 characters.*`)
            } else {
              wh.send(args2[1], opt)
            }
          }
          break;
        case "tts":
          if (!args2[0]) {
            msg.channel.send(`*<@${msg.author.id}>, that command requireds a field. Do ${pre}tts <message>*`)
          } else {
              let opt = {
                username: 'TTS - '+msg.author.username,
                avatarURL: msg.author.avatarURL,
                tts: true
              }
              wh.send(argstr, opt)
            }
          break;
        case "123bertscrush456":
          msg.channel.send("Shhh! Its Aksel")
          break;
        case "dm":
          if (!args[1]) {
            msg.channel.send(`*<@${msg.author.id}>, please select a user.`)
          } else {
            let usr = client.users.find("id", args2[0]);
            if (!usr) {
              usr = client.users.find("discriminator", args2[0]);
              if (!usr) {
                msg.channel.send(`*<@${msg.author.id}>, Cannot find the user '${args2[0]}'*`)
              }
            }
            if (usr) {
              usr.send(`*<@${usr.id}>,* ${argstr2}`)
            }
          }
        case "tag":
          msg.delete()
          msg.channel.send(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate, ante scelerisque euismod egestas, lectus velit sollicitudin mauris, non vulputate lacus sem sit amet nisi. Cras et porttitor tortor, rhoncus pellentesque neque. Nunc rutrum dolor sed aliquet fringilla. Donec nibh odio, consectetur vel dui sit amet, fringilla laoreet massa. Pellentesque vel posuere ligula. Etiam quis diam vitae ipsum efficitur fringilla condimentum id nulla. Nunc sit amet aliquam massa. Vestibulum eget tellus bibendum, malesuada augue vitae, semper tortor. Praesent laoreet libero ut urna accumsan condimentum. Suspendisse potenti.

Cras aliquet feugiat nibh et tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam placerat velit sed pellentesque interdum. Vestibulum non aliquam nulla, a cursus nibh. Maecenas et euismod dui. In non vehicula lectus. Morbi iaculis, ex vel lacinia porttitor, tortor elit vehicula lacus, ut mollis nulla lacus ut felis. Phasellus feugiat sollicitudin tortor sed gravida. Sed consectetur tincidunt dolor ac varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Mauris ac auctor est. Cras eu molestie orci, eu iaculis nunc. Nulla a aliquam nunc, ut congue velit. Sed ac consequat arcu. Suspendisse sem lectus, condimentum quis magna sed, gravida viverra dui. Nunc ornare, nunc in porttitor aliquam, sem augue fermentum velit, nec interdum ipsum augue quis ligula. Maecenas cursus, risus quis feugiat scelerisque, est elit molestie urna, et blandit tortor ex efficitur risus.

Nunc non luctus elit. Sed eu ex vitae risus congue convallis. In ultricies mi lectus, eget fringilla diam accumsan sit amet. Nunc aliquam turpis id aliquet finibus. Nullam ut pellentesque metus. Etiam fringilla, libero sit amet maximus egestas, risus justo iaculis ipsum, id aliquet est turpis et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`)
msg.channel.send(`Nam fermentum, ante a fringilla faucibus, nibh neque iaculis augue, non rutrum ligula sem a erat. Donec eu metus laoreet, lobortis diam hendrerit, posuere metus. Nunc sit amet quam vehicula, tincidunt est at, suscipit nisl. Morbi sed risus quis metus malesuada aliquam eget vitae massa. Maecenas eu velit vitae quam ultrices porttitor sed ac ipsum. Etiam vestibulum velit purus, quis laoreet massa iaculis non. Vestibulum sagittis lectus id neque maximus mattis. Cras et nunc non metus pharetra pharetra. Suspendisse justo nisl, faucibus sit amet vulputate vel, placerat eu ligula. Morbi egestas urna velit, vitae hendrerit erat pellentesque nec. Morbi id dui lacus. Fusce viverra tincidunt urna tincidunt aliquet. Suspendisse eros sapien, viverra eu euismod vehicula, feugiat id mi. Quisque venenatis lorem a suscipit accumsan.

Pellentesque convallis nunc a purus pellentesque, a sollicitudin quam accumsan. Etiam non lectus sit amet ligula molestie suscipit. Aliquam eu volutpat erat. Curabitur diam arcu, porttitor eu elit vitae, condimentum maximus sapien. Quisque et euismod elit, a dapibus eros. Morbi et sagittis augue, quis elementum nisi. Donec eget blandit sem. Suspendisse finibus accumsan gravida. Vestibulum non tincidunt nisi. Sed finibus id tortor et porttitor. Vivamus ut nunc mi. Nunc dapibus sollicitudin bibendum. In in eros sapien.`)
          break;
        default:
          msg.channel.send(`*<@${msg.author.id}>, '${cmd}' is not a valid command. Do ${pre}help for a list of commands.*`)
      }
    }
  }
})

client.login(config.token);
