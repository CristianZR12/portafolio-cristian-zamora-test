const { config } = require('dotenv');
config();

const settingServer = {
    port: process.env.PORT || 4500
};

exports.settingServer = settingServer;