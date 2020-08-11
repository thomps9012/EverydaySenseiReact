module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
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
        }
    });
        return Student;
    };