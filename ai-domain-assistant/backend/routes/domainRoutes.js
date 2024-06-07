const express = require('express');
const domainController = require('../controllers/domainController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/search', auth, domainController.searchDomain);
router.post('/register', auth, domainController.registerDomain);

module.exports = router;
