const Patient = require('../models/patient');


module.exports.home = (req, res) => {
    res.send("<h1>WELCOME TO HOSPITAL API</h1>")
}


module.exports.register = async (req, res) => {
    try {
        req.body.doctor = "652ecfd533fec6b6564d037a"
        const user = await Patient.findOne({ phoneNumber: req.body.phoneNumber });
        if (user) {
            return res.status(200).json({
                success: true,
                user,
                msg:"user already registered"
            })
        }
        const patient = await Patient.create(req.body)

        return res.status(200).json({
            success: true,
            msg: "patient registered successfully"
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "couldnot register the patient"
        })
    }
}

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