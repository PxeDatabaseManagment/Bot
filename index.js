const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

        if(message.content == '!help') {
            message.channel.send('You can use these commands: \n \n!chatrules - displays server chat rules \n!roe - displays RoE');
        }

        if(message.content == '!roe') {
            message.channel.send('1. 1 of each power weapon: \n   1 Hydra or Grenade Launcher, Sniper, Laser, Railgun, Rocket, Saw, Shotgun, CE pistol \n2. 1 OP vehicle (OP vehicles are Mantis, Tank, Wraith, or 1 rocket turret). \n3. At least one way into base. \n4. Good cover that can cover you from regular bullets, but not necessarily splash damage. \n5. No switch spamming or teleporter blocking. \n6. Spawn killing is banned, but spawn rumbling is okay (spawn rumbling is killing at spawn with loadout weapons to get out of spawn). Spawn time must be 3 seconds. \n7. Spawn is completely blocked from view of the base. \n8. Loadout is Pistol and AR, at least one frag grenade. \n9. No gauss anything. \n10. Only one vehicle allowed to guard the base. \n11. Only UNSC and Covenant weapons are allowed. Covenant weapons must substitute a UNSC weapon listed above and must be agreed upon before the raid. \n12. No air vehicles. \n13. If a base is taken over in a war, it cannot be reused/edited and used again in the war. \n14. 2 chaingun turrets allowed in base. \n15. No req weapons, loadout weapons with attachments are allowed (except bayonets, which must replace shotgun and be agreed upon). \n16. In a war, a surrender ends with the assassination of the leader who lost the war. \n17. Defenders get a 5 minute head start to the base to set up (attackers must stay at the spawn for the entire 5 minutes). Raid starts at the 5 minute mark. \n18. No team game modes. \n19. No secret teleporters, armories, weapons, vehicles, or entrances. \n20. There must be a way to enter the base without having anyone inside of the base at all times. \n21. No modded guns. \n22. No modded vehicles. \n23. All Spartan abilities are on. \n24. No bottomless clip. \n25. No powerups (invisibility included). \n26. No machinima mode or blinding lights. \n27. Invisible walls only used for keeping players on the map.');
        }

        if(message.content == '!chatrules') {
            message.channel.send('Phoenix Server Chat Rules: \n  \nServer leadership reserves the right to declare any content inappropriate for the chats. \n  \nOverarching Principle - Respect every other member of the server, and do not deliberately try to make others feel uncomfortable or unsafe in any way. \n  \nServer Channels - The official channel should be used for official clan business only. The unofficial channel is for informal conversation, including memes. \n  \nLanguage - There are generally no profanity filters in the server; however, if you excessively cuss out someone even if they ask you to stop, you are breaking the overarching principle. \n  \nSexual content - Media that contains sexually inappropriate content will not be allowed in the server. Please keep in mind that it is in fact illegal for minors to view sexually explicit content without parental/guardian consent in the United States, and it is therefore also illegal to distribute sexually explicit content to minors. Just follow the law, and you will be fine. \n  \nGore - Any content that shows real gore will not be allowed in the chats. CGI gore will be allowed to a certain extent, but as with any media, server leadership reserves the right to declare it inappropriate for the chat.');
        }

});

bot.login('MzkxMTg5MzkxNzI2NDc3MzEy.DRYS8w.5qejZT9MlRCgJN2nPgIynrvTp0w');