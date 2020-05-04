const Telegraph = require('telegraf');

const bot = new Telegraph('1139511873:AAFNoMjslfc0e0v9d0uhVSC_7iWoZg8ZLuQ'); 

const axios = require('axios');
const fs = require('fs');

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

bot.command('dogbreed', ctx => {
    let rawdata = fs.readFileSync("./dogbreed.json", "utf-8");
    let data = JSON.parse(rawdata);
    let message = '';
    data.forEach(element => {
        message += ` - ${element}\n`
    });
    ctx.reply(message);
})

bot.command('dog', async ctx => {
    let input = ctx.message.text;
    input = input.split(' ');
    
    if (input.length == 1) {
        return
    }
    input.shift();
    let final = input.join(' ');
    let rawdata = fs.readFileSync("./dogbreed.json", "utf-8");
    let data = JSON.parse(rawdata);
    
    if (data.includes(final)) {
        let res = await axios.get(`https://dog.ceo/api/breed/${final}/images/random`)
        ctx.replyWithPhoto(res.data.message);
    }
    else {
        let suggestions = data.filter( e => {
            return e.startsWith(final)
        })
        if (suggestions.length) {
            let message = 'Did you mean:\n';
            suggestions.forEach(e => message += ` - ${e} \n`);
            ctx.reply(message);
        }
        else ctx.reply('Sorry no dog breed starts with that!');
    }


})

bot.launch();