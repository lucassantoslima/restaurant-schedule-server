const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
    monday: [], 
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    workerType: {
        type: String,
        enum: ["Cook", "Waiter"], // Create a worker type so that I can retrieve the correct data from db
        required: true,
        trim: true
    }
});

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
