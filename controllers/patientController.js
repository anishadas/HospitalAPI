const Patient = require('../models/patient');

//home page
module.exports.home = (req, res) => {
    res.send("<h1>WELCOME TO HOSPITAL API</h1>")
}

//patient register
module.exports.register = async (req, res) => {
    try {
        //dummy doctor
        req.body.doctor = "6530127990d25b27aee5ae47"

        // check if  patient already exists
        const user = await Patient.findOne({ phoneNumber: req.body.phoneNumber });
        console.log("user",user)
        if (user) {
            return res.status(200).json({
                success: true,
                user,
                msg:"user already registered"
            })
        }

        //create new patient
        const patient = await Patient.create(req.body)

        return res.status(200).json({
            success: true,
            msg: "patient registered successfully",
            patient
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "couldnot register the patient"
        })
    }
}

//create report
module.exports.createReport = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        req.body.date = Date.now();
        patient.reports.push(req.body);
        patient.save()
        return res.status(200).json({
            success: true,
            msg: "patient report created",
            patient
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "patient not registered"
        })
    }
}

//view all rpeorts of a patient
module.exports.allReports = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (patient.reports) {
            return res.status(200).json({
                success: true,
                reports: patient.reports
            })
        }
        return res.status(200).json({
            success: true,
            msg: "No reports yet"
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "could not get the reports"
        })
    }
}

//view reports status wise
module.exports.reports = async (req, res) => {
    try {
        const patient = await Patient.find({ reports: { $elemMatch: { status: req.params.status } } });
        
        return res.status(200).json({
            success: true,
            patient
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "no patients found"
        })
    }
}