        // Recourses
        
const Discord = require(`discord.js`)

const client = new Discord.Client();

const prefix = `s!`;

const fs = require(`fs`);

const moment = require('moment');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


        // Bot info


client.once(`ready`, () => {
    console.log(`SniperWarz bot is online`);
    client.user.setActivity(`Sniper Warz [GR]`, {type: "PLAYING"})
});

        // Suggestion 

client.on(`message`, async message => {
    if (message.channel.id == 784909588268580914) {
        if (message.author.bot) return;
        message.delete().catch(err => console.log(err));
        const suggestion = new Discord.MessageEmbed()
        .setColor(`#00ff00`)
        .setTitle(`New suggestion`)
        .setDescription(message.content)
        .setAuthor(`${message.author.username}`, message.author.avatarURL())
        .setFooter(`Enigma`, ``)
        let msgEmbed = await message.channel.send(suggestion);
        await msgEmbed.react("👍");
        await msgEmbed.react("👎");
    }
      });

      // Commands

client.on(`message`, message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === `say`){
        client.commands.get(`say`).execute(message, args);
    } else if (command === `clear`){
        client.commands.get(`clear`).execute(message, args);
    } else if (command === `approve-suggestion`){
        client.commands.get(`approve-suggestion`).run(message, args);
    } else if (command === `reject-suggestion`){
        client.commands.get(`reject-suggestion`).run(message, args);
    } else if (command === `dm`){
        client.commands.get(`dm`).run(message, args);
    }
})
    // Voice notification

client.on('voiceStateUpdate', (oldMember, newMember) => {
    const textChannel = newMember.guild.channels.cache.get(`696172381944676393`)
    let newUserChannel = newMember.channelID
    let oldUserChannel = oldMember.channelID

    if(newUserChannel === "699941941520891915") //don't remove ""
    { 
        // User Joins a voice channel

        textChannel.send(`**<@${newMember.id}> μπήκε στο Waiting For Support, κάποιος να πάει να τον εξυπηρετήσει <@&779850589927768105>.**`);
    }    
 });
 client.on('voiceStateUpdate', (oldMember, newMember) => {
    const textChannel = newMember.guild.channels.cache.get(`696172381944676393`)
    let newUserChannel = newMember.channelID
    let oldUserChannel = oldMember.channelID

    if(newUserChannel === "782326452896006174") //don't remove ""
    { 
        // User Joins a voice channel

        textChannel.send(`**<@${newMember.id}> μπήκε στο Waiting For Interview, κάποιος να πάει να τον εξυπηρετήσει <@&699949128423047188>.**`);
    }    
 });

        // Welcome section

client.on(`guildMemberAdd`, (member) => {

    const channel = member.guild.channels.cache.get(`744472184159731742`)
    member.roles.add(`744343592117600296`)
        const embed = new Discord.MessageEmbed()
    .setColor('#e7cb00')    
    .setTitle("New Member")    
    .setThumbnail(member.user.displayAvatarURL())
    .addField(`**Welcome**`, `**Γεια σου <@${member.id}>, καλωσόρισες στον Sniper Warz.**`)
    .setFooter(`Enigma`, ``)
    
    channel.send(embed)
    
    });


client.login('NzM4NzYwMzAwMzE2MzI3OTQ2.XyQmJQ.G4tIfnVsKUIViqCugEn07s_rrnw');
