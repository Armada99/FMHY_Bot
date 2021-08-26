const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = `!`;


client.on('ready', () => {
    client.user.setActivity(x); 
    console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {

if(msg.author.bot) return;
if (!msg.content.startsWith(prefix)) return;
var args = msg.content.toLowerCase().slice(prefix.length).split(` `);
var cmd = args[0].toString();

if (cmd == 'ping'){
    msg.channel.send("Pinging...").then(m =>{
        var ping = m.createdTimestamp - msg.createdTimestamp;
        
        m.edit(`:ping_pong: Pong!\nServer Ping : ${ping}ms\nAPI Ping : ${client.ws.ping}ms`); 
    }); return;
}
if (cmd == `commands`)
    msg.channel.send(commands);

if (cmd == 'wiki')
    msg.channel.send(wiki)

if (cmd == 'ask'){
  msg.delete();
  msg.channel.send(`https://dontasktoask.com/`);
}

if (cmd == 'hello'){
  msg.delete();
  msg.channel.send(`https://nohello.net/`);
}

if (cmd == 'tech'){
  msg.channel.send(`https://www.reddit.com/r/techsupport/\nhttps://discord.gg/2EDwzWa`);
}

if (cmd == 'eyebleach'){
  msg.channel.send(`https://www.reddit.com/r/Eyebleach/`);
}

switch(cmd){
  case `stream`:msg.channel.send(stream); break;
  case `stream-tv`:msg.channel.send(streamtv); break;
  case `stream-anime`:msg.channel.send(streamanime); break;
  case `android-stream`:msg.channel.send(androidstream); break;
  case `download`:msg.channel.send(download); break;
  case `download-video`:msg.channel.send(downloadvideo); break;
  case `download-anime`:msg.channel.send(downloadanime); break;
  case `download-games`:msg.channel.send(downloadgames); break;
  case `download-music`:msg.channel.send(downloadmusic); break;
  case `download-software`:msg.channel.send(downloadsoftware); break;
  case `torrent`:msg.channel.send(torrent); break;
  case `torrent-video`:msg.channel.send(torrentvideo); break;
  case `torrent-anime`:msg.channel.send(torrentanime); break;
  case `torrent-music`:msg.channel.send(torrentmusic); break;
  case `torrent-games`:msg.channel.send(torrentgames); break;
  case `read`:msg.channel.send(read); break;
  case `audiobooks`:msg.channel.send(audiobooks); break;
  case `read-comics`:msg.channel.send(readcomics); break;
  case `read-manga`:msg.channel.send(readmanga); break;
  case `apks`:msg.channel.send(apks); break;
  case `roms`:msg.channel.send(roms); break;
  case `vpn`:msg.channel.send(vpn); break;
  case `filters`:msg.channel.send(filters); break;
  case `pirate-windows`:msg.channel.send(piratewindows); break;
  case `activate-windows`:msg.channel.send(activatewindows); break;
}


});

client.login(process.env.BOT_TOKEN);

var x="with your life";
var stream = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var streamtv = new Discord.MessageEmbed()
  .setColor(`#00FFFF`)
  .setDescription()
var streamanime = new Discord.MessageEmbed()
  .setColor(`#00FFFF`)
  .setDescription()
var androidstream = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var download = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var downloadvideo = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var downloadanime = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var downloadgames = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var downloadmusic = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var downloadsoftware = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var torrent = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var torrentvideo = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var torrentanime = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var torrentmusic = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var torrentgames = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var read = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var audiobooks = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var readcomics = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var readmanga = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
var apks = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var roms = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var vpn = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var filters = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var piratewindows = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()
var activatewindows = new Discord.MessageEmbed()
    .setColor(`#00FFFF`)
    .setDescription()

var commands = new Discord.MessageEmbed()
    .setDescription(`!wiki\n!ask\n!hello\n!tech\n!eyebleach\n\n**WIP**\n\n!stream
!stream-tv
!stream-anime
!android-stream
!download
!download-video
!download-anime
!download-games
!download-music
!download-software
!torrent
!torrent-video
!torrent-anime
!torrent-music
!torrent-games
!read
!audiobooks
!read-comics
!read-manga
!apks
!roms
!vpn
!filters
!pirate-windows
!activate-windows`)
.setColor(`GREEN`);

var wiki = new Discord.MessageEmbed()
  .setColor(`#00FFFF`)
  .setTitle(`Wiki Lists / Commands`)
  .setDescription(`Please use in <#669016984478023699>\n\n[**Reddit Wiki**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/index)\n!wiki\n[**Backup Wikis**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/backups)\n!backup\n\n:name_badge: [**Adblock / Privacy / VPN**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/adblock-vpn-privacy)\n!ads\n:tv: [**Movies / TV / Anime / Sports**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/video)\n!video\n:musical_note: [**Music / Podcasts / Radio**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/audio)\n!audio\n:video_game: [**Gaming / Emulation**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/games)\n!games\n:green_book: [**Books / Comics / Manga**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/reading)\n!reading\n:mobile_phone: [**Android / iOS**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/android)\n!mobile\n:floppy_disk: [**Downloading**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/download)\n!downloading\n:cyclone: [**Torrenting**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/torrent)\n!torrenting\n:brain: [**Educational**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/edu)\n!edu\n:wrench: [**Tools**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/tools-misc)\n!tools\n:open_file_folder: [**Miscellaneous**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/misc)\n!misc\n:mag: [**Custom Google Search**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/tools-misc#wiki_.25B7_search_tools)\n!search\n:earth_asia: [**Non-English**](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/non-eng)\n!non-eng\n:underage: [**NSFW Sites**](https://rentry.co/freemediafuckyeah)\n!nsfw`)
  .setThumbnail(`https://i.imgur.com/qJAkeWa.gif`);