const Discord = require('discord.js');
const client = new Discord.Client();
const keep_alive = require('./keep_alive.js')
const token = process.env['TOKEN']



const prefix = 'n'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');






      message.channel.messages.fetch(`${args[0]}`).then(message => {
        message.react('🇳');
        message.react('🇦');
        message.react('🇵');
        message.react('ℹ️');  
        message.react('🇲');
      }).then(message => {
        message.react('👍')
      }).then(message => {
        console.log(`sunucu: ` + message.guild.name + `   kişi: ` + message.author.tag + `        ilk arg ${args[0]}`); 
      });



});

client.login(token);