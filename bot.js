const Telegraph = require('telegraf');

const bot = new Telegraph('1224771643:AAHpQ1pU5YvDeKDh4_McnxxComFTQMswZ9k');

// code
bot.start((ctx) => {
    ctx.reply('Holas!');
})

bot.help((ctx) => {
    ctx.reply('You entered help!')
})

bot.settings((ctx) => {
    ctx.reply('Settings?! Yummy!')
})

bot.launch();