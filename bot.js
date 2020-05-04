const Telegraph = require('telegraf');

const bot = new Telegraph('1224771643:AAHpQ1pU5YvDeKDh4_McnxxComFTQMswZ9k');

// code
/*bot.start((ctx) => {
    ctx.reply(`Holas ${ctx.from.first_name}!`);
})

bot.help((ctx) => {
    ctx.reply('You entered help!')
})

bot.settings((ctx) => {
    ctx.reply('Settings?! Yummy!')
})

bot.command(["test", "tests", "Test"],(ctx)=>{
    ctx.reply('Yo!');
})*/

bot.hears('Cat', (ctx)=>{
    ctx.reply('Fuck you!');
})

bot.on('sticker', (ctx)=>{
    ctx.reply('That was a sticker!');
})

bot.on('photo', (ctx)=>{
    ctx.reply('That was a photo!');
})



bot.launch();