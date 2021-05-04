const Discord = require('discord.js');
 require('discord-reply');
const client = new Discord.Client();
const keep_alive = require('./keep_alive.js')
const TOKEN = process.env['TOKEN']



const prefix = 'n'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');





    let member = message.author 

    let avatar = member.displayAvatarURL({size: 1024}) 

      message.channel.messages.fetch(`${args[0]}`).then(napimed => {
        napimed.react('🇳');
        napimed.react('🇦');
        napimed.react('🇵');
        napimed.react('ℹ️');  
        napimed.react('🇲');
            const napimd = new Discord.MessageEmbed() 
	.setColor('RANDOM') 
    .setTitle('HAHA NAPİMLENDİN') 
    .setFooter(message.author.username + ' seni napimledi', avatar) 
    napimed.lineReplyNoMention(napimd)
    message.delete()
      });



});

client.login("ODI4OTY4ODMxNDkzOTk2NTU3.YGxTYg.DUzf_l0J99wYrfr6t7aomBvDleM");