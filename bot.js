const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ'); 

let stateof = '';

bot.use((ctx, next) => {
    let msg = '';
    try {
        let msg = ctx.message.text;
    } catch(err) {
        console.log(err);
    }
    console.log(msg);
    next();
})

bot.command('start', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Welcome', {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'firstOne', callback_data: 'firstOne' },
                    { text: 'One', callback_data: 'none' }
                ],
                [
                    { text: 'One', callback_data: 'none' }
                ],[
                    { text: 'One', callback_data: 'none' },
                    { text: 'One', callback_data: 'none' },
                    { text: 'One', callback_data: 'none' }
                ]
            ]
        }
    })
})

let commands = ['97242042', '97242043'];

bot.hears(commands, ctx => {
    console.log(ctx.message.text);
})

bot.action('firstOne', async ctx => {
    ctx.answerCbQuery('Tnx');
    stateof = 'firstOne';
    bot.telegram.sendMessage(ctx.chat.id,'Enter the number: ');
})

function log(ctx) {
    console.log(ctx);
}

bot.launch();