module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define("Skills", {
       
        skill_id: {
            type: DataTypes.INTEGER
        },
        skill: {
            type: DataTypes.VARCHAR
        }
    });
        return Skills;
    };