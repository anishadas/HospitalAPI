const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

//register a doctor
module.exports.register = async (req, res) => {
    try {
        if (req.body.password.length < 6)
            return res.status(500).json({
                success: false,
                msg: "password must be greater than 6 characters"
            })
        const doctor = await Doctor.create(req.body)

        return res.status(200).json({
            success: true,
            msg: "doctor registered successfully"
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "couldnot register the doctor"
        })
    }
}

//login with jwt creation
module.exports.login = async (req, res) => {
    try {
        console.log(req.body)
        const user = await Doctor.find(req.body);
        console.log(user)
        if (user) {
            const token = jwt.sign(user[0].id, 'Hospital');
            return res.status(200).json({
                success: true,
                token
            })
        } else {
            return res.status(404).json({
                success: false,
                msg: "Invalid credentials"
            })
        }

    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: "something went wrong"
        })
    }
}