const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const readline = require("readline");
var prefix = "$";

bot.on('ready', async () =>{
  console.log('online!');
  bot.user.setActivity('║ Shift ║', {type: 'LISTENING'})
})


bot.on("message",message=>{

  let args = message.content.substring(PREFIX.length).split(" ");
  switch(args[0]){
    case 'dm':
  	let msg = message.content.slice((prefix +"dm ").length)
    if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("**You don't have permission to use that command**");

    try{
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });}catch(e){
        
      }
      return message.channel.send("Sending DM to all, it may take a while")
      break;
  }

})
    switch(args[1]){
        case 'ping':
            message.channel.send('pong!')
            break;
       case 'clear':
           if(!args[1]) return message.reply('Error please define second arg')
           message.channel.bulkDelete(args[1]);
           break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Version ' + version);
            }  else{
                message.channel.send('Invalid Args');
            }      
            break;
            case 'embed':
                const embed = new Discord.richEmbed()
                .addField('Name', message.author.username);
                message.channel.send(embed);
            break;    
                  }
bot.login(process.env.token);
