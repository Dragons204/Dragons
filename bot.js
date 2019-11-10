const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643135344803446794")
setInterval(function() {
channel.send(`dragons dragons dragons dragons dragons dragons`);
}, 30)
})

client.login(process.env.BOT_TOKEN);