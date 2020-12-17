module.exports = async (client) =>{
    const moment = require('moment');
    // SERVER
    const guild = client.guilds.cache.get('744284588465192970');
    setInterval(() =>{
    // COUNT TYPE
        const channel = guild.channels.cache.get('788805313250983977');
        channel.setName(moment(guild.createdAt).format("🎂 DD/MM/YYYY"))

    },5000);
}