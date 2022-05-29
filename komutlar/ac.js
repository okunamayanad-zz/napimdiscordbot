const Database = require("@replit/database");
const db = new Database();

exports.run = async (client, message) => {
    console.log('aç kullanıldı')
if (message.author.hasPermission('MANAGE_MESSAGES') || message.author.id == "614523861429387439") {
	let veri = await db.get(`mesajayari.${message.guild.id}`);
  if (veri === true) return message.lineReplyNoMention("⛔ Mesaj ayarı zaten açık!");
  db.set(`mesajayari.${message.guild.id}`, true).then(() => {
    message.react("👌");
  });
}else{
    message.lineReplyNoMention("⛔ Bunu yapmaya yetkin yok!")
}
};
