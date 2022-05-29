const Database = require("@replit/database");
const db = new Database();

exports.run = async (client, message, [mesajID]) => {
    console.log('Yardım kullanıldı')
    let avatar = member.displayAvatarURL({ size: 1024 });
    let veri = await db.get(`mesajayari.${message.guild.id}`);

    if (!veri) { veri = 0 }
    if (veri == 0) { let asilveri = 'kapalı' }
    if (veri == 1) { let asilveri = 'açık' }

    const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Yardım')
        .setDescription('Karşında tüm komutlar:')
        .addFields(
            { name: '!ac', value: 'Botun Embed özelliğini açmak için kullanılır' },
            { name: '!kapat', value: 'Botun Embed özelliğini kapatmak için kullanılır' },
            { name: 'Şu anki değer:', value: asilveri },
            { name: '\u200B', value: '\u200B' },
            { name: '!n', value: 'yada n', inline: true },
            { name: 'İnsanları napimlemek için kullanılır', value: 'kullanımı: n <mesaj idsi>', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '!yardim', value: 'Bu komutu verir' },
        )
        .setTimestamp()
        .setFooter({ text: message.author.username, iconURL: avatar });

    message.lineReply(embed)
};
