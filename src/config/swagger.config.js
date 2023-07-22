const swagger = require("@fastify/swagger");

const swaggerOptions = {
    routePrefix: "/documentation",
    exposeRoute: true,
    swagger: {
      info: {
        title: "Pipedreams",
        description: "Pipedreams task for Software Engineer JS assignment",
        version: "1.0.0",
      }, 
      servers: [
        {
          url: "http://localhost:5000",
          description: "Local server",
        },
      ],
    },
  };
  
  module.exports = swaggerOptions;