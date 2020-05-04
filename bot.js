const Telegraph = require('telegraf');

const bot = new Telegraph('1224771643:AAHpQ1pU5YvDeKDh4_McnxxComFTQMswZ9k');

// code
bot.use((ctx, next) => {
    //ctx.reply('You used the bot!');
    next(ctx);
})

bot.start(ctx => {
    //ctx.reply('This is reply part');
    //ctx.reply(ctx.state.apple);
    bot.telegram.sendMessage(ctx.chat.id, 'Yo!', {
        parse_mode: 'Markdown',
        disable_notification: true
    })
})

bot.launch();