const Discord = require('discord.js');
module.exports = {
    name: 'support',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Join my Support server")
            .setURL("https://discord.gg/cs2UxGY")
            .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
        message.channel.send(embed);
    }
}