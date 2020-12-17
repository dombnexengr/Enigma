module.exports = async (client) =>{
    const guild = client.guilds.cache.get('744284588465192970');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('788775160474894386');
        channel.setName(`🎲 Members: ${memberCount.toLocaleString()}`);

    }, 5000);
}
