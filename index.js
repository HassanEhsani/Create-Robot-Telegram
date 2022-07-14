const { Telegraf } = require("telegraf");

const bot = new Telegraf("5578827276:AAG5FGWbVPPR8DoAoG9lPvMauLn7RELwbCo");

bot.start((ctx) => {
//     console.log(ctx.message.from)
//   return ctx.reply("Right Now rain is stop"); this is TELEFRAF
    console.log(ctx.message.chat);
    return ctx.telegram.sendMessage(ctx.chat.id,"hi")
});

bot.launch();
