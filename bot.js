const Telegraph = require('telegraf');

const bot = new Telegraph('1224771643:AAHpQ1pU5YvDeKDh4_McnxxComFTQMswZ9k');

// code
bot.use(ctx => {
    ctx.reply('You used the bot mofo!');
})


bot.launch();