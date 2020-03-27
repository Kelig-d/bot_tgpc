const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message',function(message){
  if(message.content.startsWith ("!i")){
      message.channel.send ("",{files:["C:/Users/moi/Desktop/bot_discord/images/infos/infos_"+message.content.substring(3)+".png",]})
  }

  if(message.content.startsWith ('!stats')){
      message.channel.send ({files:["C:/Users/moi/Desktop/bot_discord/images/passives/passive_"+message.content.substring(7)+".png"]})
      message.channel.send ({files:["C:/Users/moi/Desktop/bot_discord/images/stats/stats_"+message.content.substring(7)+".png"]})
  }

  if(message.content.startsWith ('!attack')){
      message.channel.send ({files:["C:/Users/moi/Desktop/bot_discord/images/attacks/attack1_"+message.content.substring(8)+".png"]})
      message.channel.send ({files:["C:/Users/moi/Desktop/bot_discord/images/attacks/attack2_"+message.content.substring(8)+".png"]})
      message.channel.send ({files:["C:/Users/moi/Desktop/bot_discord/images/ults/ult_"+message.content.substring(8)+".png"]})
  }

  if(message.content === '!list'){
    const fs = require('fs');
    const path1 = "C:/Users/moi/Desktop/bot_discord/text_files/character_list1.txt";
    const content1 = fs.readFileSync(path1, 'utf-8');
    message.channel.send(content1);
    const path2 = "C:/Users/moi/Desktop/bot_discord/text_files/character_list2.txt";
    const content2 = fs.readFileSync(path2, 'utf-8');
    message.channel.send(content2);
  }
  if(message.content === '!help'){
    message.channel.send ("Les commandes sont:")
    message.channel.send ("!stats nom_du_personnage (statistiques du personnage)")
    message.channel.send ("!i nom_du_personnage (infos générales du personnage)")
    message.channel.send ("!attack nom_du_personnage (infos sur les attaques du personnage)")
    message.channel.send ("!news pour voir les nouveautés du jeu")
    message.channel.send ("!list pour voir le nom de tous les personnages du jeu")
  }
  if(message.content === 'salut' || message.content === 'bonjour' || message.content === 'yo' || message.content === 'salutations'|| message.content === 'slt'){
    message.channel.send("Bonjour à toi, "+message.author.username)
  }
})

bot.login('NjkzMTM5Nzc3OTAxMjk3Njk1.Xn4u5g.eW8x2BO6C4MQq55Lxk4gP_qGtZo')
