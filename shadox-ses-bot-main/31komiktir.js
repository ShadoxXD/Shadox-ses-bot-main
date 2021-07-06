const { Discord, Client, MessageEmbed, WebhookClient} = require('discord.js');
const client = global.client = new Client({fetchAllMembers: true});
const fs = require('fs');
const express = require('express');
const request = require('request')
const settings = require("./kokoreç.json")
const app = express();
client.on('voiceStateUpdate', (oldState, newState) => {
     const shadoxteyitkanal = "" // register kanal id
     let teyitkanaltani = client.channels.cache.get(shadoxteyitkanal); 
     if(!teyitkanaltani) return console.log('Kanal Bulunamadı.');
     let member = client.users.cache.get(newState.member.id);
     if(!newState.channelID === shadoxteyitkanal);
     if(!oldState.channelID === shadoxteyitkanal);
         teyitkanaltani.join().then(connection => { 
	    if (newState.channelID === shadoxteyitkanal){
	    if(!newState.member.roles.cache.get('')) return; //kayıtsız rol id
	   const dispatcher = connection.play(require("path").join(__dirname, './shadox.mp3')); // ses uzantısı
            dispatcher.on('end', () => {
                dispatcher.destroy();
		return;
            });
}
});
});
client.login(settings.lahmacun).then(c => console.log(`${client.user.tag} # Ses botu giriş sağladı!`)).catch(err => console.error("Bot giriş bilgileri yanlış olduğundan bota giriş yapılamadı!"));
