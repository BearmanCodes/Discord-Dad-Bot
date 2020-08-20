const Discord = require('discord.js');
const { prefix, token, guildId } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Hi ready, im dad');
})

client.on('message', message => {
    const guild = client.guilds.cache.get(guildId);
    const isDadBot = message.member.roles.cache.some(role => role.name === 'DAD');
    
    if (message.member.hasPermission(['SEND_MESSAGES']))
    {
        if (isDadBot == false)
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
        }
        }
})

client.login(token);

// link to add bot to server: https://discordapi.com/permissions.html

// client Id: 745652852017463361 
