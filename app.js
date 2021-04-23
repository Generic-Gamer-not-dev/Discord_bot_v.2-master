'use strict';

/**
 * Send a user a link to their avatar
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
    
    if (message.content === '!rip') {
   // Create the attachment using MessageAttachment
   const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
   // Send the attachment in the message channel
   message.channel.send(attachment);
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('token here');
