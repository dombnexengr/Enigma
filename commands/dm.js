module.exports = {
    name: "dm",
    description: "DM a user.",
    
    run: async (message, args) => {
        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!message.member.permissions.has("ADMINISTRATOR")){
        message.delete();
        message.channel.send("**Δεν έχεις τα σωστά permissions!**");
      } else if (message.member.permissions.has("ADMINISTRATOR")){
          message.delete();

      if (!user)
        return message.channel.send(
          `**Δεν έκανες tag κάποιον user ή το ID που έδωσες είναι λανθασμένο.**`
        );
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("**Δεν μπορείς να στήλεις μήνυμα σε αυτόν τον user ( λογικά έχει κληστά τα DM του ).**"))
        .then(() => message.channel.send(`**Το μήνυμα στάλθηκε στον: ${user.user.tag}.**`));
     } },
  };