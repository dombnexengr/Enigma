module.exports = {
    name: `clear`,
    description: `Clearing messages...`,
    async execute(message, args) {

        if (message.member.hasPermission("MANAGE_MESSAGES")) {

            const deleteCount = parseInt(args[0], 10);
            const deleteMessage = `**Διαγράφηκαν ${deleteCount} μηνύματα.**`;

            if (!deleteCount || deleteCount < 2 || deleteCount > 101) message.delete();

            const fetched = await message.channel.messages.fetch({
                    limit: deleteCount
            });

            message.channel.bulkDelete(fetched)
            .catch(error => console.log(`Αδύνατο να διαγραφούν τα μηνύματα: ${error}`))
            .then(() => message.channel.send(deleteMessage))
            .catch(err =>{
                console.log(err);
            });
            


        } else {
            message.delete();
            message.channel.send("**Δεν έχεις τα σωστά permissions!**");
        }
    }



    }
