const { Router } = require('express');
const indexControllers = require('../controllers/index.controllers');

const router = Router();

router.get('/', indexControllers.index);


module.exports = router;