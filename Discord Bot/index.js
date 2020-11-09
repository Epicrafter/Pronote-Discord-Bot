// Client
const { Client, Collection } = require('discord.js');
const token = require("../credentials.json");
const db = require("quick.db");
const fs = require("fs");


const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.alias = new Collection();
client.categories = fs.readdirSync("./commands/")

let prefix = "p!";

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(!message.guild) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd.length === 0) return;

    let command = client.commands.get(cmd);

    if(command)
    command.run(client, message, args);
    
});

client.giveawaysManager = manager;

;


client.on('ready', s => {
    console.log(`Ready! Connected as ${client.user.username} with prefix '${prefix}'`);
});

client.login(token["bot-token"]);