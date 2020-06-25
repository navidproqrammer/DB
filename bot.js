const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const readline = require("readline");
var prefix = "$";

bot.on('ready', async () =>{
  console.log('online!');
  bot.user.setActivity('║ Shift ║', {type: 'LISTENING'})
})

bot.on("message",message=>{
  client.on('message', function(message){
    if(message.author.bot) return;
  if(message.content.startsWith(prefix +"dm")){
  	
  	let msg = message.content.slice((prefix +"dm ").length)

    if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("**You don't have permission to use that command**");

    try{
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });}catch(e){
        
      }
      return message.channel.send("Sending DM to all, it may take a while")
  }
  else if(message.content.startsWith(prefix +"clear")){
    if(!args[1]) return message.reply('Error please define second arg')
           message.channel.bulkDelete(args[1]);
  }
  bot.login(process.env.token);
  });
});