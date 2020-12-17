module.exports = {
    name: `lock`,
    description: `Lock the channel`,
    execute(message, args){
        if (message.member.hasPermission("ADMINISTRATOR")) {
        message.delete().catch(err => console.log(err));
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false
        }).then(message.channel.send("**Channel locked!**"))

        } else if (!message.member.hasPermission("ADMINISTRATOR")){
            message.delete();
            message.channel.send("**Δεν έχεις τα σωστά permissions!**")
        
     };
    } 
}