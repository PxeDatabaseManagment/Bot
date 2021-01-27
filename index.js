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
            message.author.send('Welcome to Phoenix Era. Type !help to see a list of useful commands. \nType !chatrules to see server rules. \nPlease read the member guide: \nhttps:// \n \nAbove all: do not be stupid or act stupid.');
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
                '8, Suffering From The Jslayer Disease',
                '9, Promoted Dreamz To Sector Leader',
                '10, Has Already Pre-Ordered Battlefront III'
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
        
        let auditlog = message.guild.channels.cache.find(i => i.name === 'audit-log');
        let auditlogid = auditlog.id;
        
        if (commando === "a^r") {
            let nick = argus[0];
            let title = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);
            let titlerole = message.guild.roles.cache.find(i => i.name === title);
            memberid.roles.add(titlerole);

            message.channel.send(`${nickmember} has received the title of ${titlerole}.`);
        }
        
        if (commando === "r^r") {
            let nick = argus[0];
            let title = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);
            let titlerole = message.guild.roles.cache.find(i => i.name === title);
            memberid.roles.remove(titlerole);

            message.channel.send(`<@${nickmemberid}> no longer has the title of ${titlerole}.`);
        }
        
        /*
        if (commando === "!admin!list") {
            let id = argus[0];
            let list = message.guild.roles.find('name',id).members.map(m=>m.user.id).join('\n');

            message.channel.send(`<@${list}>`);
        }
        */
        
        if (commando === "c^n") {
            let nick = argus[0];
            let newnick = argus[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);
            memberid.setNickname(newnick);
            
            message.channel.send(`${nickmember} now has the nickname of ${newnick}.`);
        }
        
        if (commando === "c^c") {
            let channelname = argus[0];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
            async function clear() {
                    const fetched = await channelid.messages.fetch({limit: 99});
                    channelid.bulkDelete(fetched);
            }
            clear();
            message.channel.send(`Messages in ${channelid} have been cleared.`);
        }
        
        if (commando === "start^info") {
            let nick = argus[0];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);
            message.channel.send(`DM has been sent to ${nickmember}.`);
            memberid.send("Welcome to Phoenix Era. Congratulations on passing the bootcamp! To be honest, I didn't think you'd make it. Then again, I never think anyone will make it... Anyway, now I feel like I can be associated with you without being totally humiliated. Don't prove me wrong by becoming a complete and utter failure.\n\nFirst step in not becoming a failure: watch this quick video.\nhttps://www.youtube.com/watch?v=nY9KrWEJ1k4");
        }
        
        if (commando === "k^k") {
            let nick = argus[0];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);
            memberid.kick();

            message.channel.send(`${nick} has been kicked.`);
        }
        
        
        if (commando === "b^r") {
            let nick = argus[0];
            let channelname = argus[1];
            let roleP = message.guild.roles.cache.find(i => i.name === 'Phoenix Era');
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);

            message.guild.channels.cache.find(i => i.name === channelname).send(`Hey ${roleP}, it's ${nickmember}'s birthday! :confetti_ball: :birthday:`);
            message.channel.send(`Birthday notification has been sent.`);
        }
        
        if (commando === "d^c") {
            let channelname = argus[0];
            let num = argus[1];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
            async function clear() {
                    const fetched = await channelid.messages.fetch({limit: num});
                    channelid.bulkDelete(fetched);
            }
            clear();
            message.channel.send(`The last ${num} messages in ${channelid} have been cleared.`);
        }
        
        const arguss = message.content.trim().split('^');
        const commandos = arguss.shift().toLowerCase();
        
        if (commandos === "d$m") {
            let nick = arguss[0];
            let dm = arguss[1];
            let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
            let nickmemberid = nickmember.id;
            let memberid = message.guild.members.cache.get(nickmemberid);
            message.channel.send(`DM has been sent to ${nickmember}.`);
            memberid.send(dm);
        }
        
        if (commandos === "a$m$") {
            let b = arguss[0];
            let channelname = arguss[1];
            
            message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`).then(function (message) {
            message.react(bot.emojis.cache.get('733049184755646516'))
            message.react(bot.emojis.cache.get('733048783046311988'))
            message.react(bot.emojis.cache.get('733049172592295937'))
            }).catch(function() {
            });
            message.channel.send(`Event has been posted.`);
        }
        
        if (commandos === "s$m$") {
            let b = arguss[0];
            let channelname = arguss[1];
            
            message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`);
            message.channel.send(`Custom message has been sent.`);
        }
        
        if (commandos === "d$m$") {
            let b = arguss[0];
            let channelname = arguss[1];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
            
            channelid.messages.fetch({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b));
            channelid.bulkDelete(specMessage);
            });
            message.channel.send(`Event has been deleted.`);
        }
        
        if (commandos === "e$m$") {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            let channelid = message.guild.channels.cache.find(i => i.name === channelname);
            channelid.messages.fetch({limit: 99}).then(msg => {
            const specMessage = msg.filter(msg => msg.content.includes(b));
            const specMessageid = specMessage.id
            async function edit() {
            const message = await channelid.message.fetch(specMessageid);
            await message.edit(c);
            }
            edit();
            });
            message.channel.send(`Event has been edited.`);
        }
        
        if (commandos === "a$e$") {
            let b = arguss[0];
            let channelname = arguss[1];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> A new event **${b}** has been posted in <#730551238395166780>. <:PhoenixEraInsignia:417837304036589568>`);
            message.channel.send(`New event notification has been sent.`);
        }
        
        if (commandos === "a$s$") {
            let b = arguss[0];
            let channelname = arguss[1];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> A new event **${b}** has been posted in <#729050150831521794>. <:PhoenixEraInsignia:417837304036589568>`);
            message.channel.send(`New event notification has been sent.`);
        }
        
        if (commandos === "a$se$") {
            let b = arguss[0];
            let channelname = arguss[1];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> A new event **${b}** has been posted in <#729050150831521794> and <#730551238395166780>. <:PhoenixEraInsignia:417837304036589568>`);
            message.channel.send(`New event notification has been sent.`);
        }
        
        if (commandos === "u$e$") {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> The following change has been made to the event **${b}** in <#730551238395166780>:\n**${c}**`);
            message.channel.send(`Event update notification has been sent.`);
        }
        
        if (commandos === "u$s$") {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> The following change has been made to the event **${b}** in <#729050150831521794>:\n**${c}**`);
            message.channel.send(`Event update notification has been sent.`);
        }
        
        if (commandos === "u$se$") {
            let b = arguss[0];
            let c = arguss[1];
            let channelname = arguss[2];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> The following change has been made to the event **${b}** in <#729050150831521794> and <#730551238395166780>:\n**${c}**`);
            message.channel.send(`Event update notification has been sent.`);
        }
        
        if (commandos === "e$w$") {
            let b = arguss[0];
            let time = arguss[1];
            let channelname = arguss[2];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> The event **${b}** starts in **${time}** minutes. <:GetOnHalo:417888045925138432>`);
            message.channel.send(`Event start warning has been sent.`);
        }
        
        if (commandos === "e$s$") {
            let b = arguss[0];
            let channelname = arguss[1];
            
            message.guild.channels.find('name',channelname).send(`<@&689275374139605145> The event **${b}** is starting now! <:GetOnHalo:417888045925138432>`);
            message.channel.send(`Event start notification has been sent.`);
        }
        */
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
