const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ'); 

bot.command(['start', 'help'], ctx => {
    let helpMessage = `
    Help command
    /newyork - new york city pic
    /cities - return the list of cities
    `;

    ctx.reply(helpMessage);
})

bot.command('newyork', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo');
    bot.telegram.sendPhoto(ctx.chat.id, "https://media.gettyimages.com/photos/city-lights-in-dubai-at-sunrise-picture-id911607822?s=612x612", {
        reply_to_message_id: ctx.message.message_id
    })
})

bot.command('cities', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, 'upload_photo')
    let cities = [
        'extras/1.jpg',
        'extras/2.jpg',
        'extras/3.jpg',
        'extras/4.jpg'
    ];

    let result = cities.map(city =>{
        return {
            type: 'photo',
            media: {
                source: city
            }
        }
    })
    ctx.telegram.sendMediaGroup(ctx.chat.id, result, {
        reply_to_message_id: ctx.message.message_id
    });
})

bot.command('tehran', ctx => {
    bot.telegram.sendLocation(ctx.chat.id, 35.6892, 51.3890);
})

bot.on('message', async ctx => {
    if (ctx.updateSubTypes[0] == 'document')
        ctx.reply(await bot.telegram.getFileLink(ctx.message.document.file_id));
    else if (ctx.updateSubTypes[0] == 'photo')
        ctx.reply(await bot.telegram.getFileLink(ctx.message.photo[0].file_id));
})

bot.launch();