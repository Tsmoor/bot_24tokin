import { Client, GatewayIntentBits, Partials } from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
});

const replies = [
    "👋 أهلاً وسهلاً!",
    "😊 كيفك اليوم؟",
    "🤖 أنا بوت للرد التلقائي!",
    "🌟 يسعدني الحديث معك!",
    "🎯 تم استلام رسالتك!",
];

client.on("messageCreate", async (message) => {
    // تجاهل رسائل البوت نفسه
    if (message.author.bot) return;

    // تحقق إذا كانت الرسالة في الخاص
    if (message.channel.type === 1) {
        const reply = replies[Math.floor(Math.random() * replies.length)];
        try {
            await message.reply(reply);
            console.log(`رد على ${message.author.username}: ${reply}`);
        } catch (err) {
            console.error("خطأ أثناء الرد:", err.message);
        }
    }
});

client.once("ready", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

// هنا ضع توكن البوت
client.login("ضع_هنا_توكن_البوت");
