const { Telegraf } = require("telegraf");

const bot = new Telegraf("5578827276:AAG5FGWbVPPR8DoAoG9lPvMauLn7RELwbCo");

bot.start((ctx) => {
  //     console.log(ctx.message.from)
  //   return ctx.reply("Right Now rain is stop"); this is TELEFRAF
  console.log(ctx.message.chat);
  return ctx.telegram.sendMessage(ctx.chat.id, `سلام
  من یک ربات فروشگاهی هستم
  برای دیدن محصولات می تونید روی لینک زیر کلیک کنید.
  /products
  برای تنظیمات هم می توانید روی این دکمه کلیک کنید.
  /settings
  
  `);
});

bot.command(["products","Products","محصولات"],ctx=>{
    ctx.reply("لیست محصولات را الان برایت فرستادم")
})

bot.settings((ctx) => {
  ctx.reply("تنظیمات");
});

bot.help((ctx) => {
  ctx.reply("راهنما");
});

bot.launch();
