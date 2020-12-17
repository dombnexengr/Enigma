module.exports = async (client) =>{
    const moment = require('moment');
    // SERVER
    const guild = client.guilds.cache.get('744284588465192970');
    setInterval(() =>{
    // COUNT TYPE
        const channel = guild.channels.cache.get('788787368868970526');
        channel.setName(moment().format("📅 DD/MM/YYYY"))

    },5000);
}