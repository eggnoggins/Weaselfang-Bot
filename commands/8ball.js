const triggerWords = ['weasel,'];

client.on('messageCreate', (message) => 
    {if (message.author.bot) return false;
  
    triggerWords.forEach((word) => 
      {if (message.content.includes(word)) 
        message.reply(message.content);
    switch (Math.round(Math.random() * 21)) 
        {case 0:
            return "Yes.";
        case 1:
            return "No.";
        case 2:
            return "Perhaps...";
        case 3:
            return "How dare you ask such a vile question, off to The Peak with you!";
        case 4:
            return "Very well...";
        case 5:
            return "I suppose not.";
        case 6:
            return "Absolutely not! Mousebrain...";
        case 7:
            return "You see this fang? **Weasel opens her maw to show off a fang the size of a bears claw.** Ask that again and it'll be lodged in your neck.";
        case 8:
            return "That may as well be the case.";
        case 9:
            return "Quit testing your luck.";
        case 10:
            return "**Weasel throws your question into the flames :fire:**";
        case 11:
            return "<:GLARES:657393420792233984>";
        case 12:
            return "Absolutely!";
        case 13:
            return "<:gUN:657393362445271050><:GLARES:657393420792233984>";
        case 14:
            return "https://cdn.discordapp.com/attachments/647204779348721684/657397252381474829/triggered.jpg";
        case 15:
            return "Of course.";
        case 16:
            return "Why not.";
        case 17:
            return "I'm unsure."
        case 18:
            return "Only StarClan knows."
        case 19:
            return "Yes!"
        case 20:
            return "I guess... 👉👈"
        case 21:
            return "I approve."            

    }
});})
