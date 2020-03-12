var bot = require("robotjs");
var screenSize = bot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;

console.log(bot.getMousePos());

// bot.moveMouseSmooth(1892, 192);
// bot.mouseClick();
// bot.moveMouseSmooth(29, 150);
// bot.mouseClick();

bot.moveMouseSmooth(screenSize.width / 2, screenSize.height / 2);
