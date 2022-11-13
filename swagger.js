const swaggerAutogen = require('swagger-autogen')();
const dotenv = require('dotenv');
dotenv.config();

const doc = {
  info: {
    title: 'cse341',
    description: 'BYUI Course API'
  },
  host: `${process.env.HOST}${process.env.PORT ? `:${process.env.PORT}` : ''}`,
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
