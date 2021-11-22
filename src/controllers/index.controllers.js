const path = require('path');

const indexControllers = {};


indexControllers.index = (req, resp) => {
    resp.sendFile(path.join(__dirname, '../public/index.html'));
};


module.exports = indexControllers;