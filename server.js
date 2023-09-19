require('dotenv').config();

const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, () => {console.log('Db is listening and Node running on port ' + port)});
    }
})

