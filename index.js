const Discord = require("discord.js");
const client = new Discord.Client(); 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTI2ODAwNDIzOTE5NjgxNTU2.DxsyAQ.suNKx-ct6dFpD2onH0fCHg45-e0');
