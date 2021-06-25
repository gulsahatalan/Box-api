import swaggerAutogenConstructor from 'swagger-autogen';
const swaggerAutogen = swaggerAutogenConstructor();

const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        apiKeyAuth:{
            type: "apiKey",
            in: "header",       // can be "header", "query" or "cookie"
            name: "X-API-KEY",  // name of the header, query parameter or cookie
            description: "any description..."
        }
    },
    definitions: {
        Movie:     {
            "id": 10002,
            "name": "Die Hard",
            "year": 1999,
            "country": "US"
        },
        Rent: {
            "movieId": 10002,
            "startDate": new Date(),
            "duration": 12,
            "price": 6
        }
    }
}

const outputFile = './swagger.json'
const endpointsFiles = ['./app.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')         
      // Your project's root file
})