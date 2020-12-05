module.exports = {
    name: `say`,
    description: `Just a "say" command...`,
    execute(message, args){
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
        

    } else if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.delete();
        message.channel.send(`**Δεν έχεις τα σωστά permissions!**`)
    };
    } 
}