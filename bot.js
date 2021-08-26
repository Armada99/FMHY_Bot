const Discord = require('discord.js');
const client = new Discord.Client();
var x="with your life";

var wiki = new Discord.MessageEmbed()
  .setColor(`#00FFFF`)
  .setTitle(`Wiki Lists / Commands`)
  .setDescription(`Please use in #bot-spam\n\n[**Reddit Wiki**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/index)\n!wiki\n[**Backup Wikis**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/backups)
  !backup\n\n:name_badge: [**Adblock / Privacy / VPN**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/adblock-vpn-privacy)\n!ads\n:tv: [**Movies / TV / Anime / Sports**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/video)\n!video\n:musical_note: [**Music / Podcasts / Radio**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/audio)\n!audio\n:video_game: [**Gaming / Emulation**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/games)\n!games\n:green_book: [**Books / Comics / Manga**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/reading)\n!reading\n:mobile_phone: [**Android / iOS**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android)\n!mobile\n:floppy_disk: [**Downloading**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/download)\n!downloading\n:cyclone: [**Torrenting**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/torrent)\n!torrenting\n:brain: [**Educational**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/edu)\n!edu\n:wrench: [**Tools**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/tools-misc)\n!tools\n:open_file_folder: [**Miscellaneous**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/misc)\n!misc\n:mag: [**Custom Google Search**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/tools-misc#wiki_.25B7_search_tools)\n!search\n:earth_asia: [**Non-English**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/non-eng)\n!non-eng\n[**NSFW Sites**](https://rentry.co/freemediafuckyeah)\n!nsfw`);


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

if (msg.content === '!wiki')
    msg.channel.send(wiki)

});

client.login(process.env.BOT_TOKEN);
