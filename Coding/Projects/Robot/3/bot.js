var bot = require("robotjs");
var screenSize = bot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

setTimeout(function(){console.log('1.');}, 1000);
setTimeout(function(){console.log('2.');}, 1000);
setTimeout(function(){console.log('3.');}, 1000);
setTimeout(function(){console.log('Started.');}, 1000);

bot.typeString("Meow");
bot.keyTap("enter")
