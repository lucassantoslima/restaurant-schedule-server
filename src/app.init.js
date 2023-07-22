const fs = require("fs");
const Staff = require("./models/staff.model");

const parseJson = (data) => JSON.parse(data);

const insertStaffData = async (data) => {
  try {
    await Staff.insertMany(data);
  } catch (err) {
    fastify.log.error(err);
  }
};

// Read files provided by Pipedreams
function readFileAsync(filePath, encoding = "utf-8") {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Get data from file and parse into Json
const processFile = async (filePath, processFn) => {
  try {
    const fileData = await readFileAsync(filePath);
    const jsonData = parseJson(fileData);
    await processFn(jsonData);
  } catch (err) {
    fastify.log.error(err);
  }
};

// Begin the process of reading the files and inserting it on the database
// When the backend starts it loads the attached JSON files into the DB
async function init() {
  try {
    await processFile("./cooks1.json", insertStaffData);
    await processFile("./waiters1.json", insertStaffData);
  } catch (err) {
    fastify.log.error(err);
  }
}

module.exports = init;
