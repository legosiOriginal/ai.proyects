const axios = require('axios');
const config = require('../config');

exports.search = async (query) => {
    const response = await axios.post('https://kendra-api-endpoint', { query }, {
        headers: { 'x-api-key': config.kendraApiKey }
    });
    return response.data;
};
