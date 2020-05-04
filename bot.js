const Telegraph = require('telegraf');

const bot = new Telegraph('863690395:AAGmIxp11JrN3DbuQxD9L0wnph1lgs6hbAM');

const helpMessage = `
Welcome to help!
Ask something from me and I'll do my best to help you!
`;

bot.use((ctx, next)=> {
    let text = ctx.message.text;
    let username = ctx.from.username;
    let type = ctx.updateSubTypes[0];
    console.log(type);
    if (type == 'text') {
        let finale = '@' + username + ' said ' + text;
        bot.telegram.sendMessage(-447442176, finale);
    }
    else if (type == 'sticker') {
        let sticker = '@' + username + " sent an sticker";
        bot.telegram.sendMessage(-447442176, sticker);
    }
    next();
})

bot.start(ctx => {
    ctx.reply('Welcome to this bot!');
})

bot.help(ctx => {
    ctx.reply(helpMessage);
})

bot.command('echo', (ctx) => {
    let input = ctx.message.text;
    input = input.split(' ');
    let finalMessage = 'You said echo!';
    if(input.length != 1) {
        input.shift();
        finalMessage = input.join(' ');
    }
    ctx.reply(finalMessage);
})

bot.launch();