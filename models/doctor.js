const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password should be greater then 6 characters"]
    },

}, {
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;