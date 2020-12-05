module.exports = {
    name: "reject-suggestion",
    description: "Reject someone's suggestion.",
    
    run: async (message, args) => {
        let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(DM);
    const Discord = require(`discord.js`)
    const DM = new Discord.MessageEmbed()
    .setTitle(`Suggestion Rejected`)
    .setDescription(`**Σε ευχαριστούμε για το suggestion ${message.mentions.members.first()} αλλά δυστυχώς έγινε rejected.**`)
    .setColor(`#ff0000`)
    .setFooter(`Enigma`, ``)
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
        .send(DM)
        .catch(() => message.channel.send("**Δεν μπορείς να στήλεις μήνυμα σε αυτόν τον user ( λογικά έχει κληστά τα DM του ).**"))
        .then(() => message.channel.send(`**Το μήνυμα στάλθηκε στον: ${user.user.tag}.**`));
     } },
  };