module.exports = {
    name: 'ping',
    category: "info", 
    discription: 'discription',
    usage: "ping",
    execute(message, args) {
        message.channel.send(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.**`);
    },
};
