const Database = require("@replit/database");
const db = new Database();

exports.run = async (client, message) => {
if (message.author.hasPermission('MANAGE_MESSAGES')) {
  let veri = await db.get(`mesajayari.${message.guild.id}`);
  if (!veri) return message.lineReplyNoMention("⛔ Mesaj ayarı zaten kapalı!");
  db.delete(`mesajayari.${message.guild.id}`).then(() => {
    message.react("👌");
    console.log(
            "Sunucu adı: " +
            message.guild.name +
            "\nSunucu ID si: " +
            message.guild.id +
            "\nKanal adı: " +
            message.channel.name +
            "\nKanal ID si: " +
            message.channel.id +
            "\nKullanıcı: " +
            message.author.tag +
            "\n!kapat komutunu kullandı " +
            "\n Başarılı oldu mu? " +
            "\n Evet"
        );
  });
}else{
    message.lineReplyNoMention("⛔ Bunu yapmaya yetkin yok!")
    console.log(
            "Sunucu adı: " +
            message.guild.name +
            "\nSunucu ID si: " +
            message.guild.id +
            "\nKanal adı: " +
            message.channel.name +
            "\nKanal ID si: " +
            message.channel.id +
            "\nKullanıcı: " +
            message.author.tag +
            "\n!kapat komutunu kullandı " +
            "\n Başarılı oldu mu? " +
            "\n Hayır"
        );
}

};
