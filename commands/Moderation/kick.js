/** **************************************
 *
 *   Kick: Plugin for Galaxy that performs moderation actions.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = async (bot, msg, args) => {
  if (!msg.member.hasPermission('KICK_MEMBERS')) return msg.reply('You don\'t have permission to kick members.');
  if (!msg.guild.member(bot.user).hasPermission('KICK_MEMBERS')) return msg.reply('I don\'t have permission to kick members.');

  const member = msg.mentions.members.first();
  if (!member) return await msg.reply('Who am I gonna kick? (Remember to @mention them)');
  const reason = args.join(' ').slice(3 + member.user.id.length);

  await member.kick(msg.author.tag + ': ' + (reason ? ': ' + reason : ''))
    .catch(err => { msg.reply('There was an error.'); console.error(err.stack);});
  msg.channel.send(`Alright, I kicked **${member.user.tag}**${(reason ? ` for the reason **${reason}**.` : '.')}`);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'kick',
  description: 'Kick a user out of the server.',
  usage: '@user <...reason>',
};
