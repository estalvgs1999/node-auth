require('dotenv').config();

const config = {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    spotifyRedirectURI: process.env.SPOTIFY_REDIRECT_URI,
    port: process.env.PORT || 3000
};

module.exports = { config: config };