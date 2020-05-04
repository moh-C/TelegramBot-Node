const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ'); 

const axios = require('axios');

bot.command('fortune', ctx => {
    axios.get('http://yerkee.com/api/fortune')
        .then(res => {
            ctx.reply(res.data.fortune);
        })
        .catch(e => console.log(e))
})

bot.command('cat', async ctx => {
    let input = ctx.message.text;
    input = input.split(' ');
    if (input.length == 1)
    {
        let res = await axios.get('http://aws.random.cat/meow');
        ctx.replyWithPhoto(res.data.file);
    }
    else {
        input.shift();
        ctx.replyWithPhoto(`https://cataas.com/cat/says/${input.join(' ')}`)
    }
})

bot.launch();