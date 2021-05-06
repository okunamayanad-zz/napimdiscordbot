const Database = require("@replit/database");
const db = new Database();

exports.run = async (client, message) => {
  let veri = await db.get(`mesajayari.${message.guild.id}`);
  if (!veri) return message.channel.send("⛔ Mesaj ayarı zaten kapalı!");
  db.delete(`mesajayari.${message.guild.id}`).then(() => {
    message.react("👌");
  });
};
