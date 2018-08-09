/** **************************************
 *
 *   Invite: Plugin for Galaxy that allows the user to use the bot on their own guilds.
 *   Copyright (C) 2018 TheEdge, jtsshieh, Alee
 *
 *   Licensed under the Open Software License version 3.0
 *
 * *************************************/

exports.run = (bot, msg) => {
  msg.channel.send('You can invite me by visiting https://discordbots.org/bot/417096530596724737.');
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'invite',
  description: 'Gives the user a link to invite the bot.',
};
