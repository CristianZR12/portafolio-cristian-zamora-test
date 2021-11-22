const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const { settingServer } = require('../settings');

//IMPORT SERVER
const indexRouter = require('../routes/index.router');
const express = require('express');

module.exports = (app) => {

    //SETTING PORT 
    app.set('Port', settingServer.port);

    //MIDDLEWARE
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    //ROUTES
    app.use(indexRouter);

    //STATIC PUBLIC
    app.use('/static', express.static(path.join(__dirname, '../public')));

    return app;
};