var bot = require("robotjs");

setTimeout(function() {
  bot.keyToggle("space", "down")
}, 3000)

setTimeout(function() {
  bot.keyToggle("space", "up")
}, 6000)
