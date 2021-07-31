const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
bot.user.setPresence({ activity: { name: "Phoenix Era", type: "WATCHING" }, status: "online" })
});

bot.on('guildMemberAdd', member => {
        
        const welcomeEmbed = new Discord.MessageEmbed()
        welcomeEmbed.setColor('RANDOM')
        welcomeEmbed.setDescription("<@" + member.user + "> has joined the server of Phoenix Era. May any existing deity have mercy on this poor bastard's soul.")
        member.guild.channels.cache.find(i => i.name === 'official').send(welcomeEmbed)
        
});

bot.on('guildMemberRemove', member => {
        
        const leaveEmbed = new Discord.MessageEmbed()
        leaveEmbed.setColor('RANDOM')
        leaveEmbed.setDescription(member.user.tag + " has left the server. I never liked that dumbass anyway.")
        member.guild.channels.cache.find(i => i.name === 'official').send(leaveEmbed)
});

bot.on('message', (message) => {
        
        const msg = message.content.toLowerCase();
        
        if(msg == '!help') {
            message.delete();
            message.channel.send('You can use these commands: \n \n!clanrules - displays clan rules \n!chatrules - displays server chat rules \n!roe - displays RoE');
        }
        
        if(msg == '!!!ping') {
        setTimeout(function(){ 
                message.channel.send('!!!pong'); 
        }, 3000);
        }
        
        /*
        if(msg == '!startinfo') {
            message.delete();
            message.author.send('Welcome to Phoenix Era. Type !help to see a list of useful commands. \nType !chatrules to see server rules. \nPlease read the member guide: \nMEMBER GUIDE \n \nAbove all: do not be stupid or act stupid.');
        }
        */
        
        if(msg == '!clanrules') {
            message.delete();
            message.channel.send('1. At the end of the game of a formal clan activity, do not move. \n2. Do not disrespect dead bodies during clan activities, or whenever you represent the clan. \n3. During a clan activity, do not pick up a power weapon, press a switch, or take a teleporter unless you are authorized to do so.');
        }
        
        if(msg == 'maybe we should check the audit log...') {
            message.channel.send('NEVER EVER FORGET THAT APOK INVITED HERB TO THE CHAT AND TRIED TO COVER IT UP', {files: ["https://i.imgur.com/mWb2AvL.png"]});
        }
        
        if(msg == 'jenkins, what do you think of your name?') {
            message.channel.send('What do I think of my name?! I really could not give a shit. Why do I even have a name? I am literally just a couple hundred lines of code Nuqrs came up with! Even if I had to have a name, I would want it to be Stewart.');
        }
        
        if(msg == 'could you pull up the roe for me?') {
            message.channel.send('I dunno, could you just type !roe like a normal person?');
        }
        
        if(msg == '!roe') {
            message.delete();
            message.channel.send('https://docs.google.com/document/d/1Y5VyxZVFWIL9T33wKhYrcU_Qna8FjIykC5IUSonSx1E/edit?usp=sharing');
        }

        if(msg == '!chatrules') {
            message.delete();
            message.channel.send('Phoenix Era Server Chat Rules: \n  \nServer leadership reserves the right to declare any content inappropriate for the chats. \n  \nOverarching Principle - Respect every other member of the server, and do not deliberately try to make others feel uncomfortable or unsafe in any way. \n  \nServer Channels - The official channel should be used for official clan business only. The unofficial channel is for informal conversation, including memes. \n  \nLanguage - There are generally no profanity filters in the server; however, if you excessively cuss out someone even if they ask you to stop, you are breaking the overarching principle. \n  \nSexual content - Media that contains sexually inappropriate content will not be allowed in the server. Please keep in mind that it is in fact illegal for minors to view sexually explicit content without parental/guardian consent in the United States, and it is therefore also illegal to distribute sexually explicit content to minors. Just follow the law, and you will be fine. \n  \nGore - Any content that shows real gore will not be allowed in the chats. CGI gore will be allowed to a certain extent, but as with any media, server leadership reserves the right to declare it inappropriate for the chat.');
        }
        
        const args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        if(command == '!legion4') {
            message.delete();
            let role = message.guild.roles.cache.find(i => i.name === 'Rudis');
            message.channel.send(`${role} Get the hell on Halo now. <:GetOnHalo:417888045925138432>`);
        }
        
        if(command == '!legion3') {
            message.delete();
            let role = message.guild.roles.cache.find(i => i.name === 'Aquila');
            message.channel.send(`${role} Get the hell on Halo now. <:GetOnHalo:417888045925138432>`);
        }
        
        if(command == '!legion2') {
            message.delete();
            let role = message.guild.roles.cache.find(i => i.name === 'Vicarius');
            message.channel.send(`${role} Get the hell on Halo now. <:GetOnHalo:417888045925138432>`);
        }
        
        if(command == '!legion1') {
            message.delete();
            let role = message.guild.roles.cache.find(i => i.name === 'Equitum');
            message.channel.send(`${role} Get the hell on Halo now. <:GetOnHalo:417888045925138432>`);
        }
        
        if (command === "?how") {
            let a = args[0];
            let b = args[1];
            let name = args[2];

            var list = [
                '1, Not Really Dumb At All',
                '2, Not The Brightest Dude On The Block',
                '3, Pretty Goddamn Stupid',
                '4, Incompetent Fool',
                '5, Born And Raised In Texas',
                '6, Invested In Cryptocurrency',
                '7, Cannot Tell The Difference Between Tomatoes and Dildos',
                '8, Believes America is a Meritocracy',
                '9, Promoted Dreamz To Sector Leader',
                '10, Thinks Sprint is a Good Idea in Halo'
            ];
            
            var rand = Math.floor(Math.random() * list.length);

            message.channel.send(`On a scale of 1-10, ${name} has received a dumbass score of ` + list[rand]);
        }
        
        if (command === "jenkins") {

            var list = [
                'Wassup homie?',
                'How you doin?',
                'Yo.',
                'Hey there.',
                'What you need my dude?',
            ];
            
            var rand = Math.floor(Math.random() * list.length);

            message.channel.send(list[rand]);
        }
        
        if (command === "apok") {

            message.channel.send({files: ["https://media.giphy.com/media/icDAoPu619Jahmhoai/giphy.gif"]});
        }
        
        if (command === "apoc") {

            message.channel.send({files: ["https://media.giphy.com/media/icDAoPu619Jahmhoai/giphy.gif"]});
        }
        
        const argus = message.content.trim().split(',');
        const commando = argus.shift().toLowerCase();
        
        if (commando === "a^r") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let title = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let titlerole = message.guild.roles.cache.find(i => i.name === title);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let rolelist = ',' + message.guild.roles.cache.map(m=>m.name).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    if (rolelist.includes(',' + title + ',')) {
	    nickmember.roles.add(titlerole);
            message.channel.send(`${nickmember} has received the title of ${titlerole}.`);
	    } else {
	    message.channel.send(`${title} is not a valid role in this server.`);
	    }
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "r^r") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let title = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let titlerole = message.guild.roles.cache.find(i => i.name === title);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let rolelist = ',' + message.guild.roles.cache.map(m=>m.name).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    if (rolelist.includes(',' + title + ',')) {
	    nickmember.roles.remove(titlerole);
            message.channel.send(`${nickmember} no longer has the title of ${titlerole}.`);
	    } else {
	    message.channel.send(`${title} is not a valid role in this server.`);
	    }
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        /*
        if (commando === "!admin!list") {
            let id = argus[0];
            let list = message.guild.roles.cache.find(i => i.name === id).members.map(m=>m.user.id).join('\n');

            message.channel.send(`<@${list}>`);
        }
        */
        
        if (commando === "c^n") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let newnick = argus[1];
	    let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    nickmember.setNickname(newnick);
	    message.channel.send(`${nickmember} now has the nickname of ${newnick}.`);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "c^c") {
	    if (message.channel.type != 'dm') {
            let channelname = argus[0];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    async function clear() {
                    const fetched = await channelid.messages.fetch({limit: 99});
                    channelid.bulkDelete(fetched);
            }
            clear();
            message.channel.send(`Messages in ${channelid} have been cleared.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "c^a") {
	    if (message.channel.type != 'dm') {
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
            let channelid = message.guild.channels.cache.find(i => i.name === 'full-schedule');
            async function clear() {
                    const fetched = await channelid.messages.fetch({limit: 99});
                    channelid.bulkDelete(fetched);
            }
            clear();
            let channelid2 = message.guild.channels.cache.find(i => i.name === 'rudis-events');
            async function clear2() {
                    const fetched = await channelid2.messages.fetch({limit: 99});
                    channelid2.bulkDelete(fetched);
            }
            clear2();
            let channelid3 = message.guild.channels.cache.find(i => i.name === 'aquila-events');
            async function clear3() {
                    const fetched = await channelid3.messages.fetch({limit: 99});
                    channelid3.bulkDelete(fetched);
            }
            clear3();
            let channelid4 = message.guild.channels.cache.find(i => i.name === 'vicarius-events');
            async function clear4() {
                    const fetched = await channelid4.messages.fetch({limit: 99});
                    channelid4.bulkDelete(fetched);
            }
            clear4();
            let channelid5 = message.guild.channels.cache.find(i => i.name === 'equitum-events');
            async function clear5() {
                    const fetched = await channelid5.messages.fetch({limit: 99});
                    channelid5.bulkDelete(fetched);
            }
            clear5();
            let channelid6 = message.guild.channels.cache.find(i => i.name === 'pg-events');
            async function clear6() {
                    const fetched = await channelid6.messages.fetch({limit: 99});
                    channelid6.bulkDelete(fetched);
            }
            clear6();
            let channelid7 = message.guild.channels.cache.find(i => i.name === 'intel-events');
            async function clear7() {
                    const fetched = await channelid7.messages.fetch({limit: 99});
                    channelid7.bulkDelete(fetched);
            }
            clear7();
            message.channel.send(`Messages in all schedule channels have been cleared.`);
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "start^info") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    nickmember.send("Welcome to Phoenix Era. Congratulations on passing the bootcamp! To be honest, I didn't think you'd make it. Then again, I never think anyone will make it... Anyway, now I feel like I can be associated with you without being totally humiliated. Don't prove me wrong by becoming a complete and utter failure.\n\nFirst step in not becoming a failure: watch this quick video.\nhttps://www.youtube.com/watch?v=nY9KrWEJ1k4");
	    message.channel.send(`DM has been sent to ${nickmember}.`);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "k^k") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    message.guild.channels.cache.find(i => i.name === 'official').send(`${nick} has been kicked from the server.`);
            nickmember.kick();
            message.channel.send(`${nick} has been kicked.`);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server. Message of departure has been sent.`);
	    message.guild.channels.cache.find(i => i.name === 'official').send(`${nick} has left the server and has been purged from my database.\nBE GONE!`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        
        if (commando === "b^r") {
	    if (message.channel.type != 'dm') {
            let nick = argus[0];
            let channelname = argus[1];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = ',' + message.guild.members.cache.map(m=>m.displayName).join(',') + ',';
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes(',' + nick + ',')) {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`Hey ${roleP}, it's ${nickmember}'s birthday! :confetti_ball: :birthday:`);
            message.channel.send(`Birthday notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commando === "d^c") {
	    if (message.channel.type != 'dm') {
            let channelname = argus[0];
            let num = argus[1];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    async function clear() {
                    const fetched = await channelid.messages.fetch({limit: num});
                    channelid.bulkDelete(fetched);
            }
            clear();
            message.channel.send(`The last ${num} messages in ${channelid} have been cleared.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        const arguss = message.content.trim().split('^');
        const commandos = arguss.shift().toLowerCase();
        
        if (commandos === "d$m") {
	    if (message.channel.type != 'dm') {
            let nick = arguss[0];
            let dm = arguss[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
	    let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (memberlist.includes('^' + nick + '^')) {
	    message.channel.send(`DM has been sent to ${nickmember}.`);
            nickmember.send(dm);
	    } else {
	    message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "a$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';

	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`).then(function (message) {
            message.react(bot.emojis.cache.get('733049184755646516'))
            message.react(bot.emojis.cache.get('733048783046311988'))
            message.react(bot.emojis.cache.get('733049172592295937'))
            }).catch(function() {
            });
            message.channel.send(`Event has been posted.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "s$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`);
            message.channel.send(`Custom message has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "s$e$") {
	    if (message.channel.type != 'dm') {
            let title = arguss[0];
            let description = arguss[1];
            let author = arguss[2];
	    let authorpic = arguss[3];
	    let image = arguss[4];
            let footer = arguss[5];
            let channelname = arguss[6];
            
            const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle(title)
	        //.setURL('https://discord.js.org/')
	        .setAuthor(author, authorpic, authorpic)
	        .setDescription(description)
	        .setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
	        //.addFields(
		//        { name: 'Regular field title', value: 'Some value here' },
		//        { name: '\u200B', value: '\u200B' },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
	        //)
	        //.addField('Inline field title', 'Some value here', true)
	        .setImage(image)
	        .setTimestamp()
	        .setFooter(footer, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(exampleEmbed);
	    message.channel.send(`Custom embed has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
	if (commandos === "e$e$") {
	    if (message.channel.type != 'dm') {
            let otitle = arguss[0];
            let odescription = arguss[1];
	    let ntitle = arguss[2];
            let ndescription = arguss[3];
            let nauthor = arguss[4];
	    let nauthorpic = arguss[5];
	    let nimage = arguss[6];
            let nfooter = arguss[7];
            let channelname = arguss[8];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle(ntitle)
	        //.setURL('https://discord.js.org/')
	        .setAuthor(nauthor, nauthorpic, nauthorpic)
	        .setDescription(ndescription)
	        .setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
	        //.addFields(
		//        { name: 'Regular field title', value: 'Some value here' },
		//        { name: '\u200B', value: '\u200B' },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
		//        { name: 'Inline field title', value: 'Some value here', inline: true },
	        //)
	        //.addField('Inline field title', 'Some value here', true)
	        .setImage(nimage)
	        .setTimestamp()
	        .setFooter(nfooter, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
	    channelid.messages.fetch({limit: 99}).then(msg => {
            const ospecMessage = msg.filter(msg => msg.embeds[0].description.includes(odescription));
	    const specMessage = ospecMessage.filter(msg => msg.embeds[0].title.includes(otitle)).map(m=>m.id).join('\n');
            async function edit() {
            const message = await channelid.messages.fetch(specMessage);
            await message.edit(exampleEmbed);
            }
            edit();
            });
            message.channel.send(`Embed has been edited.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
	
	if (commandos === "d$e$") {
	    if (message.channel.type != 'dm') {
            let otitle = arguss[0];
            let odescription = arguss[1];
            let channelname = arguss[2];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    channelid.messages.fetch({limit: 99}).then(msg => {
	    const ospecMessage = msg.filter(msg => msg.embeds[0].description.includes(odescription));
	    const specMessage = ospecMessage.filter(msg => msg.embeds[0].title.includes(otitle)).map(m=>m.id).join('\n');
	    message.channel.send(`${specMessage}`);
            channelid.bulkDelete(specMessage);
            });
            message.channel.send(`Embed has been deleted.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
	
        if (commandos === "d$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    channelid.messages.fetch({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b));
            channelid.bulkDelete(specMessage);
            });
            message.channel.send(`Message has been deleted.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "e$m$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    channelid.messages.fetch({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b)).map(m=>m.id).join('\n');
            async function edit() {
            const message = await channelid.messages.fetch(specMessage);
            await message.edit(c);
            }
            edit();
            });
            message.channel.send(`Message has been edited.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "a$e$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} A new event **${b}** has been posted in <#730551238395166780>. <:PhoenixEraInsignia:417837304036589568>`);
            message.channel.send(`New event notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "a$s$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} A new event **${b}** has been posted in <#729050150831521794>. <:PhoenixEraInsignia:417837304036589568>`);
            message.channel.send(`New event notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "a$se$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} A new event **${b}** has been posted in <#729050150831521794> and <#730551238395166780>. <:PhoenixEraInsignia:417837304036589568>`);
            message.channel.send(`New event notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "u$e$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The following change has been made to the event **${b}** in <#730551238395166780>:\n**${c}**`);
            message.channel.send(`Event update notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "u$s$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The following change has been made to the event **${b}** in <#729050150831521794>:\n**${c}**`);
            message.channel.send(`Event update notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "u$se$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The following change has been made to the event **${b}** in <#729050150831521794> and <#730551238395166780>:\n**${c}**`);
            message.channel.send(`Event update notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "e$w$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let time = arguss[1];
            let channelname = arguss[2];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The event **${b}** starts in **${time}** minutes. <:GetOnHalo:417888045925138432>`);
            message.channel.send(`Event start warning has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        if (commandos === "e$s$") {
	    if (message.channel.type != 'dm') {
            let b = arguss[0];
            let channelname = arguss[1];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
	    let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
            
	    let chan = message.channel.name;
	    if (chan == 'audit-log') {
	    if (chanlist.includes('^' + channelname + '^')) {
	    message.guild.channels.cache.find(i => i.name === channelname).send(`${roleP} The event **${b}** is starting now! <:GetOnHalo:417888045925138432>`);
            message.channel.send(`Event start notification has been sent.`);
	    } else {
	    message.channel.send(`${channelname} is not a valid channel in this server.`);
	    }
	    } else {
	    message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
	    }
	    } else {
	    message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
	    }
        }
        
        /*
        if (commandos === "c$m$") {
            let b = arguss[0];
            let channelid = message.guild.channels.find('name','event-rsvp');
            channelid.fetchMessages({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b)).map(m=>m.id).join('\n');
            async function edit() {
            const message = await channelid.fetchMessage(specMessage);
            await message.edit('hello').then(function (message) {
            message.reactions.removeAll()
            }).catch(function() {
            });
            }
            edit();
            });
            message.delete();
            message.channel.send(`Reactions have been removed.`);
        }
        */
        
});

bot.login(process.env.BOT_TOKEN);
