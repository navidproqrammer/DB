const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const readline = require("readline");
const manager = require("./manager");
var prefix = "$";

bot.on('ready', async () =>{
  console.log('online!');
  bot.user.setActivity('║ Shift ║', {type: 'LISTENING'})
})


bot.on("message",message=>{

  if(message.author.bot) return
  if(message.content.startsWith(prefix +"dmall")){
  	
  	let msg = message.content.slice((prefix +"dmall ").length)

    if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("**You don't have permission to use that command**");

    try{
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });}catch(e){
        
      }
      return message.channel.send("Sending DM to all, it may take a while")
  }

})

bot.login(process.env.token);
