module.exports = (Sequelize, sequelize) => {
    return sequelize.define('actors', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING(500),
            validate:{
                isEmpty: false
            }
        },
        birth:{
            type: Sequelize.STRING(500),
            validate:{
                isEmpty: false
            }
        },
        films:{
            type: Sequelize.INTEGER,
            validate:{
                isEmpty: false,
                isInt: true
            }
        },
        liked:{
            type: Sequelize.INTEGER,
            validate:{
                isEmpty: false,
                isInt: true
            }
        },
        photo:{
            type: Sequelize.STRING(500),
            validate:{
                isEmpty: false
            }
        }
    });
};