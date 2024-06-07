module.exports = {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    kendraApiKey: process.env.KENDRA_API_KEY,
    unstoppableApiKey: process.env.UNSTOPPABLE_API_KEY
};
