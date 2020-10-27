require('dotenv').config();


// sec-api
const api = require('sec-api')(process.env.SEC_API_KEY);
api.on('filings', filings => console.log(filings), namespaces=['/all-filings']);


// Discord
const Discord = require('discord.js');
const bot = new Discord.Client();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;


bot.login(DISCORD_TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
