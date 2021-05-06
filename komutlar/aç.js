const Database = require("@replit/database");
const db = new Database();

exports.run = async (client, message) => {
  let veri = await db.get(`mesajayari.${message.guild.id}`);
  if (veri === true) message.channel.send("⛔ Mesaj ayarı zaten açık!");
  db.set(`mesajayari.${message.guild.id}`, true).then(() => {
    message.react("👌");
  });
};
