const Discord = require('discord.js');
const client = new Discord.Client();
var x="with your life";

client.on('ready', () => {
    client.user.setActivity(x); 
    console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {

if(msg.author.bot) return;

if (msg.content === '!ping'){
    msg.channel.send("Pinging...").then(m =>{
        var ping = m.createdTimestamp - msg.createdTimestamp;
        
        m.edit(`:ping_pong: Pong!\nServer Ping : ${ping}ms\nAPI Ping : ${client.ws.ping}ms`); 
    }); return;
}


});

client.login(process.env.BOT_TOKEN);
