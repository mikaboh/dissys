const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Distributed Systems - API',
    },
    host: process.env.SERVER_PORT,
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
