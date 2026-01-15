require('dotenv').config();

module.exports = {
  TOKEN: process.env.TOKEN,
  language: process.env.LANGUAGE || "de",
  ownerID: [process.env.OWNER_ID_1, process.env.OWNER_ID_2].filter(Boolean), 
  mongodbUri: process.env.MONGODB_URI,
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  setupFilePath: process.env.SETUP_FILE_PATH || './commands/setup.json',
  commandsDir: process.env.COMMANDS_DIR || './commands',  
  embedColor: process.env.EMBED_COLOR || "#1db954",
  activityName: process.env.ACTIVITY_NAME || "YouTube Music", 
  activityType: process.env.ACTIVITY_TYPE || "LISTENING",
  SupportServer: process.env.SUPPORT_SERVER || "https://discord.gg/xQF9f9yUEM",
  embedTimeout: parseInt(process.env.EMBED_TIMEOUT) || 5,
  showProgressBar: process.env.SHOW_PROGRESS_BAR === 'true',
  showVisualizer: process.env.SHOW_VISUALIZER === 'true',
  generateSongCard: process.env.GENERATE_SONG_CARD !== 'false',
  lowMemoryMode: process.env.LOW_MEMORY_MODE === 'true',
  errorLog: process.env.ERROR_LOG || "", 
  nodes: [
    {
      name: process.env.LAVALINK_NAME || "Dat",
      password: process.env.LAVALINK_PASSWORD,
      host: process.env.LAVALINK_HOST,
      port: parseInt(process.env.LAVALINK_PORT) || 80,
      secure: process.env.LAVALINK_SECURE === 'true'
    } 
  ]
}
