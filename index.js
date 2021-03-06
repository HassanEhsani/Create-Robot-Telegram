const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("5578827276:AAG5FGWbVPPR8DoAoG9lPvMauLn7RELwbCo");

const getUserRole = (user) => {
  const roles = ["برنزی", "نقره ای", "طلایی"];
  const index = Math.floor(Math.random() * roles.length);
  return roles[index];
};

bot.on( "text",ctx => {
  
  ctx.reply("پیام", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "click",
            callback_data: "button click",
          },
        ],
      ],
    },
  });

  const role = getUserRole(ctx.message.from);
  ctx.state.role = role;
  console.log("new message");
  
});

bot.start((ctx) => {
  //     console.log(ctx.message.from)
  //   return ctx.reply("Right Now rain is stop"); this is TELEFRAF
  console.log(ctx.message.chat);
  return ctx.telegram.sendMessage(
    ctx.chat.id,
    `سلام
  من یک ربات فروشگاهی هستم
  لیست محصولات را می توانید از دکمه پایین ببینید.
  /products
  
  /settings
  
  `
  );
});

bot.command(["products", "Products", "محصولات"], (ctx) => {
  // ctx.reply("لیست محصولات را الان برایت فرستادم");
  const role = ctx.state.role;
  ctx.reply(`شما طرح ${role} را خریداری کردید پس`);
});

bot.action("button click", (ctx) => {
  ctx.reply("you clicked the button");
});

bot.hears(/^محصول/, (ctx) => {
  ctx.reply("محصولات ارایشی");
});
// bot.command(["yes","Yes"],ctx=>{
//     ctx.reply("خوبه ادامه می دیم")
// });
// bot.command(["no","No"],ctx=>{
//     ctx.reply("پس ادامه نمی دیم")
// });

bot.settings((ctx) => {
  ctx.reply("تنظیمات");
});

bot.help((ctx) => {
  ctx.reply("راهنما");
});

// bot.on("text", (ctx) => ctx.reply("سلام شما یک متن فرستادید"));
bot.on("voice", (ctx) => ctx.reply("سلام شما یک صدا فرستادید"));
bot.on("edited_message", (ctx) => {
  console.log(ctx);
  return ctx.reply("سلام شما ویرایش کردید");
});

bot.mention("@HassanEhsani_am", (ctx) =>
  ctx.reply("سلام شما یک نفر را منشن کردید")
);
bot.hashtag("تبلیغ", async (ctx) => {
  console.log(ctx.message);
  await ctx.deleteMessage(ctx.message.message_id);
  const tempMessage =
    await ctx.reply(`کاربر عزیز  ${ctx.message.from.first_name} ارسال هشتگ در این گروه ممنوع است!
  در صورت تکرار شما از این گروه حذف می شوید!
  `);
  setTimeout(() => {
    ctx.deleteMessage(tempMessage.message_id);
  }, 2500);
});

bot.launch();
