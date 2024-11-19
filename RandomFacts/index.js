import { registerCommand }( from "@vendetta/commands"
import { findByProps } from "@vendetta/metro"

const MessageActions = findByProps("sendMessage", "receiveMessage")

let commands = [
]

const fact = async function () {
    let sentences = ["Ah shucks... you guys are the best!", 
        "C'mon, Mom! One more game before you tuck me in. Oops mistell.",
        "Mommy says people my age shouldn't suck their thumbs.",
        "I'm wrestling with some insecurity issues in my life but thank you all for playing with me.",
        "I'm trying to be a nicer person. It's hard, but I am trying, guys.",
        "I feel very, very small... please hold me...",
        "Great game, everyone!",
        "It was an honor to play with you all. Thank you.",
        "Wishing you all the best.",
        "Good game! Best of luck to you all!",
        "Gee whiz! That was fun. Good playing!",
        "Well played. I salute you all.",
        "It's past my bedtime. Please don't tell my mommy.",
        "I could really use a hug right now.",
        "For glory and honor! Huzzah comrades!",
        "You guys made me climax! Thank you."];
        
    const length = sentences.length;
    let picker = Math.floor(Math.random() * length);
    const result = sentences[picker];
    return result;
}

commands.push(registerCommand({
    name: "fact",
    displayName: "fact",
    description: "Sends a random fact.",
    displayDescription: "Sends a random fact.",
    applicationId: -1,
    inputType: 1,
    type: 1,

    execute: (ctx) => MessageActions.sendMessage(ctx.channel.id, {
        content: fact()
    })
}))