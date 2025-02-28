const { sequelize } = require("./index")
const { DataTypes } = require("sequelize")

const User = sequelize.define("users",{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "Encrypt this using hash !"
    },
},{
    timestamps: false,
});

module.exports = User