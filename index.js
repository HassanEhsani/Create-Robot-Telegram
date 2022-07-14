const { Telegraf } = require("telegraf");

const bot = new Telegraf("5578827276:AAG5FGWbVPPR8DoAoG9lPvMauLn7RELwbCo");

bot.start(ctx => ctx.reply("I'm a robot"));

bot.launch();
