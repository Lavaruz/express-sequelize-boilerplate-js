const User = require("../models/User")

exports.getAllUser = async function (req, res) {
    try {
        const USERS = await User.findAll()
        return res.status(200).json(USERS)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: "Internal Server Error"})
    }
}