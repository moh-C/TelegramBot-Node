const Telegraph = require('telegraf');

const bot = new Telegraph('863690395:AAGmIxp11JrN3DbuQxD9L0wnph1lgs6hbAM');

const helpMessage = `
Welcome to help!
Ask something from me and I'll do my best to help you!
`;

bot.start(ctx => {
    logger(ctx);
    ctx.reply('Welcome to this bot!');
})

bot.help(ctx => {
    logger(ctx);
    ctx.reply(helpMessage);
})

bot.command('echo', (ctx) => {
    logger(ctx);
    let input = ctx.message.text;
    input = input.split(' ');
    let finalMessage = 'You said echo!';
    if(input.length != 1) {
        input.shift();
        finalMessage = input.join(' ');
    }
    ctx.reply(finalMessage);
})

let logger = (ctx) => {
    let text = ctx.message.text;
    let username = ctx.from.username;
    console.log(username + ' said ' + text);
}

bot.launch();