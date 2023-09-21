const express = require('express');
const router = express.Router();

router.use('/', require('./swagger.js'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello world']
    res.send("Web services Project 2 - Andrea Brenzink");
});

router.use('/contacts', require('./contacts'));

module.exports = router;
