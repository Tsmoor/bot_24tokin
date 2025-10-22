// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1430435922922569808",
        serverId: "1324034047613079574",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
