module.exports = {
    app: {
        px: 's!',
        token: 'OTI5NzMxOTAwNzc0NDI0NzA2.YdrmTg.3qJJwq4dWTDqu8H1uFJxEEITidE',
        playing: 'par synaxu'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
