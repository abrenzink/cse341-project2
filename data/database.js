const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if(database){
        console.log('Db is initialized!');
        return callback(null, database);
    } 
    else {
        MongoClient.connect(process.env.MONGODB_URL)
            .then((client) => {
                database = client;
                callback(null, database);
            })
            .catch(err => {
                callback(err);
            });
    }
}

const getDatabase = () => {
    if(!database){
        throw error ('Database initialized');
    }
    else {
        return database;
    }
}

module.exports = {
    initDb,
    getDatabase
}