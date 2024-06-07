const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const userRoutes = require('./routes/userRoutes');
const domainRoutes = require('./routes/domainRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/domains', domainRoutes);

const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error(err);
});
