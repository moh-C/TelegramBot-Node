const Telegraph = require('telegraf');

const bot = new Telegraph('1224771643:AAHpQ1pU5YvDeKDh4_McnxxComFTQMswZ9k');

// code
bot.use((ctx, next) => {
    ctx.state.apple = new Date();
    ctx.reply('You used the bot mofo!');
    next(ctx);
})

bot.start(ctx => {
    //ctx.reply('This is reply part');
    ctx.reply(ctx.state.apple);
})

bot.launch();