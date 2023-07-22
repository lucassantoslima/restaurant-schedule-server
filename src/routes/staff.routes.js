const staffController = require("../controllers/staff.controller");

async function routes(fastify, options) {
  fastify.get("/cooks", staffController.getAllCookers);
  fastify.get("/waiters", staffController.getAllWaiters);
}

module.exports = routes;