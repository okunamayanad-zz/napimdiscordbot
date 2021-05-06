const Discord = require("discord.js");
require("discord-reply");
const client = new Discord.Client();
const keep_alive = require("./keep_alive.js");
const fs = require("fs");

fs.readdir("./eventler/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./eventler/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./komutlar/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Komut yükleniyor: ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env["TOKEN"]);
