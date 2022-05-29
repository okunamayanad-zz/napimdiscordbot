const Database = require("@replit/database");
const db = new Database();
const Discord = require("discord.js");

module.exports = async (client, message) => {

  if (message.author.bot) return;

  if (message.content.toLowerCase().startsWith("n ")) {
    const args = message.content
      .slice(("n ").length)
      .trim()
      .split(/ +/g);
    const mesajID = args[0];

    let member = message.author;

    let avatar = member.displayAvatarURL({ size: 1024 });
    let veri = await db.get(`mesajayari.${message.guild.id}`);
    message.channel.messages
      .fetch(mesajID)
      .then(napimed => {
          // if (napimed.author.id == "614523861429387439") return message.lineReplyNoMention("⛔ Sahibimi napimleyemezsin!")
        console.log('n kullanıldı')
        if (!veri) message.react("👍");
        napimed.react("🇳");
        napimed.react("🇦");
        napimed.react("🇵");
        napimed.react("ℹ️");
        napimed.react("🇲");
        if (veri === true) {
          const napimd = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(napimed.author.username + " HAHA NAPİMLENDİN")
            .setFooter(message.author.username + " seni napimledi", avatar);
          napimed.lineReplyNoMention(napimd);
          message.delete();
        }
      })
      .catch(err => {
        message.lineReplyNoMention("⛔ Bir mesaj IDsi belirtmelisiniz!");
      });
  } else {
    if (message.content.indexOf("!") !== 0) return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);
  }
};
