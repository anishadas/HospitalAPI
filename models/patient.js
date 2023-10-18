const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter patient name"],
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique:true
    },
    reports: [
        {
            status: {
                type: String,
                required: true,
                enum: ["Negative", "Travelled - Quarantine", "Symptoms - Quarantine", "Positive - Admit"]
            },
            date: {
                type: Date,
                required: true
            }
        }
    ],
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    }
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;