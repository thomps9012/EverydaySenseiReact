module.exports = function(sequelize, DataTypes) {
    var Sensei = sequelize.define("Sensei", {
        lat: {
            type: DataTypes.INTEGER,
            // allowNull: false
        } ,
        long: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.VARCHAR
        },
        email: {
            type: DataTypes.VARCHAR
        },
        bio:{
            type: DataTypes.VARCHAR
        },
        skill_id: {
            type: DataTypes.INTEGER
        },
        skill_level: {
            type: DataTypes.INTEGER
        },
        credits: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.INTEGER
        }
    });
        return Sensei;
    };