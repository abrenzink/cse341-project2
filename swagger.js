const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

const doc = {
    info: {
        title : 'Contacts Api - Project 2',
        description: 'This is the second part of the contacts API. This is a BUY Idaho project.'
    },
    host: 'project2-cgay.onrender.com',
    schemes: ['http', 'https']
};

// here we generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);