        // Recourses
        
const Discord = require(`discord.js`)

const client = new Discord.Client();

const prefix = `!eg`;

const fs = require(`fs`);

const memberCounter = require('./counters/member-counter');
const boostCounter = require(`./counters/boost-counter`);
const dateCounter = require(`./counters/date-counter`);
const creationCounter = require(`./counters/creation-counter`);

const moment = require('moment');

const config = require("./config.json");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(file => file.endsWith(`.js`));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


        // Bot info


client.once(`ready`, () => {
    console.log(`DombNexen bot is online`);
    client.user.setActivity(`EnigmaProjectsgr.com`, {type: "STREAMING", url: "twitch_channel_url_here"});
    memberCounter(client);
    dateCounter(client);
    boostCounter(client);
    creationCounter(client); 
});

        // Suggestion 

client.on(`message`, async message => {
    if (message.channel.id == Suggestiong_Channel_Id_Here) {
        if (message.author.bot) return;
        message.delete().catch(err => console.log(err));
        const suggestion = new Discord.MessageEmbed()
        .setColor(`#00ff00`)
        .setTitle(`New suggestion`)
        .setDescription(`${message.content}`)
        .setAuthor(`${message.author.username}`, message.author.avatarURL())
        .setFooter(`EnigmaGamers&Projects`, `https://i.imgur.com/KsMo8OG.png`)
        .setTimestamp()
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
    } else if (command === `lock`){
        client.commands.get(`lock`).execute(message, args);
    } else if (command === `unlock`){
        client.commands.get(`unlock`).execute(message, args);
    }
       
})
    // Voice Support notification

client.on('voiceStateUpdate', (oldMember, newMember) => {
    const textChannel = newMember.guild.channels.cache.get(`Text_Notification_Channel_Id_Here`)
    let newUserChannel = newMember.channelID
    let oldUserChannel = oldMember.channelID

    if(newUserChannel === "Voice_Channel_Id_Here") //don't remove ""
    { 
        // User Joins a voice channel

        textChannel.send(`**<@${newMember.id}> μπήκε στο Waiting For Support, κάποιος να πάει να τον εξυπηρετήσει <@&Role_Admin_Id_Here>, <@&Role_Mod_Id_Here>.**`);
    }    
 });
 client.on('voiceStateUpdate', (oldMember, newMember) => {
    const textChannel = newMember.guild.channels.cache.get(`Text_Notification_Channel_Id_Here`)
    let newUserChannel = newMember.channelID
    let oldUserChannel = oldMember.channelID

    if(newUserChannel === "Voice_Channel_Id_Here") //don't remove ""
    { 
        // User Joins a voice channel

        textChannel.send(`**<@${newMember.id}> μπήκε στο Waiting For Interview, κάποιος να πάει να τον εξυπηρετήσει <@&Role_Admin_Id_Here>, <@&Role_Mod_Id_Here>.**`);
    }    
 });

        // Welcome section

client.on(`guildMemberAdd`, (member) => {

    const channel = member.guild.channels.cache.get(`Text_Notification_Channel_Id_Here`)
    member.roles.add(`Join_Member_Role`)
        const embed = new Discord.MessageEmbed()
    .setColor('#00ff00')    
    .setTitle("ℕ𝕖𝕨 𝕄𝕖𝕞𝕓𝕖𝕣")    
    .setURL("https://enigmaprojectsgr.com/")
    .setDescription("Joined to our Family-Community")
    .setAuthor("EnigmaProjects Bot", "https://i.imgur.com/KsMo8OG.png","https://enigmaprojectsgr.com/")
    .setThumbnail(member.user.displayAvatarURL())
    .addField(`**Welcome**`, `**Hello** <@${member.id}>, Welcome to Our family **EnigmaGamers&Projects**.`)
    .setFooter(`EnigmaProjectsgr.com`, `https://i.imgur.com/KsMo8OG.png`)
    .setTimestamp()
    channel.send(embed)
    
    });

client.on('message', message => {

    if (message.content === '!egping') {

       message.channel.send(`🃏 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
       }

 });

client.login(config.token);
