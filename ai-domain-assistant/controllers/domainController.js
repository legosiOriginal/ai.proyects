const Domain = require('../models/Domain');
const User = require('../models/User');
const kendra = require('../services/kendra');
const unstoppable = require('../services/unstoppable');

exports.searchDomain = async (req, res) => {
    try {
        const { query } = req.body;
        const results = await kendra.search(query);
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.registerDomain = async (req, res) => {
    try {
        const { userId } = req.user;
        const { domainName } = req.body;
        const newDomain = new Domain({ name: domainName, owner: userId });
        await newDomain.save();
        const user = await User.findById(userId);
        user.domains.push(newDomain._id);
        await user.save();
        res.status(201).json({ message: 'Domain registered successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
