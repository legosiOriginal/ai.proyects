const axios = require('axios');
const config = require('../config');

exports.resolveDomain = async (domain) => {
    const response = await axios.get(`https://unstoppable-domains-api/${domain}`, {
        headers: { 'Authorization': `Bearer ${config.unstoppableApiKey}` }
    });
    return response.data;
};
