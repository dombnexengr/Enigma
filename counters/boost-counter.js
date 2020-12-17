module.exports = async (client) =>{
    // SERVER
    const guild = client.guilds.cache.get('744284588465192970');
    setInterval(() =>{
    // COUNT TYPE
        const boostCount = guild.premiumSubscriptionCount
        const channel = guild.channels.cache.get('788802793291907113');
        channel.setName(`⭐ Boosts: ${boostCount}`)

    },5000);
}