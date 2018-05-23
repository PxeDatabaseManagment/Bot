var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('ready', () => {
        bot.user.setStatus('Online')
        bot.user.setPresence({ game: { name: 'Phoenix Era', type: 0 } })
});

bot.on('guildMemberAdd', member => {
        const welcomechannel = member.guild.channels.find('name','unofficial')
        
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(member.user + " has joined the server of Phoenix Era. May any existing deity have mercy on this poor bastard's soul.")
        return welcomechannel.send(embed)
});

bot.on('guildMemberRemove', member => {
        const leave = member.guild.channels.find('name','unofficial')
        
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(member.user.tag + " has left the server. I never liked that dumbass anyway.")
        return leave.send(embed)
});

bot.on("message", function (message)
{
    var input = message.content.toUpperCase();

    if(input === "!SENTINEL")
    {
        let classRoleObject = message.server.roles.get('name', 'sentinel');
        bot.sendMessage(message, `${classRoleObject} is on the way!`);
    }

});

bot.login(process.env.BOT_TOKEN);
