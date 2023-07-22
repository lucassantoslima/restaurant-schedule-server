const fastify = require("fastify")({ logger: true });
const env = require("dotenv").config();

// Swagger Documentation
fastify.register(require("@fastify/swagger"));
const swaggerOptions = require("./config/swagger.config");
fastify.register(require("@fastify/swagger-ui"), swaggerOptions);

// Enable cors so that the front-end app can access the api
fastify.register(require("@fastify/cors"), {
  origin: "*",
  methods: ["GET"],
});

// Import my routes and other setup config
const staffRoutes = require("./routes/staff.routes");
const initApp = require("./app.init");

// Database connection
const connectToDatabase = require("./config/db.config");
connectToDatabase();

// Register other setup configuration
fastify.register(staffRoutes, { prefix: process.env.API_PREFIX });
fastify.register(initApp);

//Start Server
const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 5000 });
    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`
    );
  } catch (error) {
    fastify.log.info(`Server is not running`);
    fastify.log.error(error);
  }
};

start();
