const { Sequelize } = require("sequelize");
const process = require("process");
require('dotenv').config()

let sequelize
sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false
});


const connectToDatabase = async () => {
    try {
        console.log("Connected to Database");
        await sequelize.authenticate();
        await sequelize.sync(/* {alter:true} */);
    } catch (error) {
        console.error("Koneksi database gagal:", error);
    }
};

module.exports = {sequelize, connectToDatabase}
