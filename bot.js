const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ'); 

bot.command('newyork', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, "https://media.gettyimages.com/photos/aerial-view-of-lower-manhattan-new-york-picture-id946087016?s=612x612", {
        reply_to_message_id: ctx.message.message_id
    })
})

bot.launch();