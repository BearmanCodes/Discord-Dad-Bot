const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Hi ready, im dad');
})

client.on('message', message => {
    const Bot = message.member.user.bot == true;

    async function play()
    {
        if (message.content.startsWith("!p") || message.content.startsWith("!play")){
            if (message.member.voice.channel)
            {
                const fs = require('fs');

                const connection = await message.member.voice.channel.join();

                const dispatcher = connection.play("Dang Son Where'd You Find This.wav");

                dispatcher.on('start', () => {
                    console.log('audio is now playing!');
                });
                
                dispatcher.on('finish', () => {
                    console.log('audio has finished playing!');
                });
                
                dispatcher.on('error', console.error);
            }
        }
    }

    if (message.member.hasPermission(['SEND_MESSAGES']))
    {
        play();

        if (Bot == false)
        {

            if (message.content.startsWith("im") || message.content.startsWith("Im")){
                var restMessage = message.content.toLowerCase().replace("im", "");
                message.reply("Hi," + restMessage + ". I'm Dad!");
            } else if (message.content.startsWith("i'm") || message.content.startsWith("I'm")){
                var restMessage = message.content.toLowerCase().replace("i'm", "");
                message.reply("Hi," + restMessage + ". I'm Dad!");
            }
            
            if (message.content.startsWith(`${prefix}joke`)){
                var jokes = 
                [
                    "No i did not get a haricut. I got them all cut.",
                    "My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!",
                    "How do you get a squirrel to like you? Act like a nut.",
                    "Why don't eggs tell jokes? They'd crack each other up.",
                    "I don't trust stairs. They're always up to something.",
                    "What do you call someone with no body and no nose? Nobody knows.",
                    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
                    "Why couldn't the bicycle stand up by itself? It was two tired.",
                    "Why can't a nose be 12 inches long? Because then it would be a foot.",
                    "This graveyard looks overcrowded. People must be dying to get in.",
                    "What time did the man go to the dentist? Tooth hurt-y.",
                    "How many tickles does it take to make an octopus laugh? Ten tickles.",
                    "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
                    "How do you make a tissue dance? You put a little boogie in it.",
                    "Why did the math book look so sad? Because of all of its problems!",
                    "What do you call cheese that isn't yours? Nacho cheese.",
                    "What kind of shoes do ninjas wear? Sneakers!",
                    "How does a penguin build its house? Igloos it together.",
                    "I'm on a seafood diet. I see food and I eat it.",
                    "Why did the scarecrow win an award? Because he was outstanding in his field.",
                    "I made a pencil with two erasers. It was pointless.",
                    "I'm reading a book about anti-gravity. It's impossible to put down!",
                    "Did you hear about the guy who invented the knock-knock joke? He won the 'no-bell' prize.",
                    "I've got a great joke about construction, but I'm still working on it.",
                    "I used to hate facial hair...but then it grew on me.",
                    "I decided to sell my vacuum cleaner—it was just gathering dust!",
                    "I had a neck brace fitted years ago and I've never looked back since.",
                    "You know, people say they pick their nose, but I feel like I was just born with mine.",
                    "What's brown and sticky? A stick.",
                    "Why can't you hear a psychiatrist using the bathroom? Because the 'P' is silent.",
                    "What do you call an elephant that doesn't matter? An irrelephant.",
                    "What do you get from a pampered cow? Spoiled milk.",
                    "Did I tell you the time I fell in love during a backflip? I was heels over head!",
                    "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
                    "I ordered a chicken and an egg online. I’ll let you know.",
                    "It takes guts to be an organ donor.",
                    "If you see a crime at an Apple Store, does that make you an iWitness?",
                    "I'm so good at sleeping, I can do it with my eyes closed!",
                    "I was going to tell a time-traveling joke, but you guys didn't like it.",
                    "A burger walks into a bar. The bartender says 'Sorry, we don't serve food here'.",
                    "I was wondering why the baseball was getting bigger. Then it hit me.",
                    "To the guy who invented zero: Thanks for nothing!",
                    "What did the grape say when it was stepped on? Nothing, it just let out a little wine.",
                    "What’s more amazing than a talking dog? A spelling bee.",
                    "",
                ];
                var joke = jokes[(Math.floor(Math.random() * jokes.length))];
                message.channel.send(joke);
            }

            if (message.content.startsWith(`${prefix}embarrass`)){
                const member = message.mentions.members.first();

                if (member == null)
                {
                    message.reply("Child please specify a person.");
                    return;
                }
                
                const memberName = member.user.username;

                var messages_can_send = 
                [
                    "Hey " + memberName + ", remember when you drank straight from a cow to get milk?",

                    "Hey " + memberName + ", remember when we got you that Anime Body Pillow for christmas?",

                    "Hey " + memberName + ", did you remember to take your daily pepto bismol for your stomach issues?",

                    "Hey " + memberName + ", remember when you tried to tame that horse and got your front teeth knocked out?",

                    "Hey " + memberName + ", remember your appointment with the Proctologist is at 7:00.",

                    "Hey " + memberName + ", remember when you took a bath in a public pool?",

                    "Hey " + memberName + ", how many times do i got to tell you to stop licking chairs?",

                    "Hey " + memberName + ", remember when you got those beans stuck in your butt?",

                    "Hey " + memberName + ", you've got to stop eating the candles!",

                    "Hey " + memberName + ", you've got to stop drinking the toilet water!",

                    "Hey " + memberName + ", how is that Anime blanket we got you?",

                    "Hey " + memberName + ", remember you got to take a bath to get those beans off of you.",

                    "Hey " + memberName + ", how many times do i got to tell you to not take a bath in the public well!",

                    "Hey " + memberName + ", did you remember to unclog the toliet that you took a crap in?",

                    "Hey " + memberName + " why did you need that sock again?",

                    "Hey " + memberName + " this is a weird Dance Show.",

                    "Hey " + memberName + " when do I call something lit again.",

                    "Hey " + memberName + " we got to go bruh.",

                    "Hey " + memberName + " your shirt is way to small for me",

                    "Hey " + memberName + " when do I call something lit again",
                ];

                var messageThing = messages_can_send[Math.floor(Math.random() * messages_can_send.length)];
                message.channel.send(messageThing);
            }

            if (message.content.startsWith(`${prefix}help`) || message.content.startsWith(`${prefix}cmds`) || message.content.startsWith(`${prefix}?`)){
                const exampleEmbed = new Discord.MessageEmbed()
	            .setColor('#0099ff')
	            .setTitle('Dad Bot Commands')
	            .setAuthor('Dad Bot')
	            .setDescription('list of commands')
	            .addFields(
		                { name: 'd!joke', value: 'tells a dad joke' },
		                { name: 'd!embarrass + @person', value: 'embarrass a person'},
		                { name: 'start sentence with Im', value: 'He responds'},
                );
                message.channel.send(exampleEmbed);
            }
            if (message.member.hasPermission(['MANAGE_ROLES']))
            {
                if (message.content.startsWith("^add")){
                    let member = message.mentions.members.first();
                    if (member == null)
                    {
                        message.reply("Please specify a member.");
                        return;
                    }
                    const guild = member.guild;
                    var withoutPerson = message.content.replace("<@!" + member.user.id + ">", '');
                    var roleName = withoutPerson.substring(6);
                    if (roleName == null)
                    {
                        message.reply("Please specify a role.");
                        return;
                    }
                    const role = guild.roles.cache.find(role => role.name === roleName);
                    if (role == null)
                    {
                        message.reply("This role does not exist (Check Capitalization and Spelling)");
                        return;
                    }
                    const hasRole = member.roles.cache.some(roleagain => roleagain.name == role.name);
                    //console.log(hasRole);
                    if (hasRole == false)
                    {
                        member.roles.add(role);
                        message.reply("Successfully added role to member!");
                    }else
                    {
                        message.reply("This member already has this role.");
                        return;
                    }
                }
                

                if (message.content.startsWith("^remove")){
                    let member = message.mentions.members.first();
                    if (member == null)
                    {
                        message.reply("Please specify a member.");
                        return;
                    }
                    const guild = message.member.guild;
                    var withoutPerson = message.content.replace("<@!" + member.user.id + ">", "");
                    var roleName = withoutPerson.substring(9);
                    const role = guild.roles.cache.find(roleThingy => roleThingy.name === roleName);
                    if (role == null)
                    {
                        message.reply("This role does not exist. (Check Capitalization and Spelling.)");
                        return;
                    }
                    const hasRole = member.roles.cache.some(roleAgain => roleAgain.name === role.name);
                    //console.log(hasRole);
                    if (hasRole)
                    {
                        member.roles.remove(role);
                        message.reply("Succesfully removed role from member!");
                    }else
                    {
                        message.reply("This member already does not have this role.");
                        return;
                    }
                }
            }else
            {
                if (message.content.startsWith("^add")){
                    message.reply("You're not allowed to use this command.");
                    return;
                }

                if (message.content.startsWith("^remove")){
                    message.reply("You're not allowed to use this command.")
                    return;
                }
            }

        }
    }
})

client.on('guildMemberAdd', member =>{
    const guild = member.guild;
    /*change later*/ const defaultRole = guild.roles.cache.find(role => role.name === "PERSON");
    if (defaultRole == null)
    {
        return;
    }
    member.roles.add(defaultRole);
})

client.login(token);

// link to add bot to server: https://discordapi.com/permissions.html

// client Id: 745652852017463361 
