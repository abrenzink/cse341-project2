require('dotenv').config();

const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-AllowHeaders',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader(
        'Access-Control-Allow_methods', 
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
});
app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log('Db is listening and Node running on port ' + port)});
    }
})

