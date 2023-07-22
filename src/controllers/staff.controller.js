const Staff = require("../models/staff.model");

// Retrieve all Staff that is type Cookers
async function getAllCookers(request, reply) {
  try {
    const cookers = await Staff.find({ workerType: "Cook" }).exec();
    reply.send(cookers);
  } catch (error) {
    reply.status(500).send(error);
  }
}

// Retrieve all Staff that is Waiters
async function getAllWaiters(request, reply) {
  try {
    const waiters = await Staff.find({ workerType: "Waiter" }).exec();
    reply.send(waiters);
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getAllCookers,
  getAllWaiters,
};
