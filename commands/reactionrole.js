module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '789568798284972062';
        const role1 = message.guild.roles.cache.find(role => role.name === "Members");
        const role2 = message.guild.roles.cache.find(role => role.name === "new role");

        const role1emoji = '🟡';
        const role2emoji = '🔵';

        let embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Reaction Roles!')
            .setDescription('React to the message to get the role!\n\n'
                + `${role1emoji} for ${role1}\n`
                + `${role2emoji} for ${role2}`)
            .setFooter(`Enigma`);


        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(role1emoji);
        messageEmbed.react(role2emoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if (reaction.emoji.name === role2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === role2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
            } else {
                return;
            }
        });
    }

}   
