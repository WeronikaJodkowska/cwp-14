module.exports = (Sequelize, sequelize) => {
    return sequelize.define('films', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING(1000)
            },
            rating: {
                type: Sequelize.DOUBLE,
                validate:{
                    isFloat: true
                }
            },
            year: {
                type: Sequelize.INTEGER,
                validate:{
                    isInt: true,
                    isCorrect: function () {
                        if(this.year <1894)
                            throw new Error("Incorrect year");
                    }
                }
            },
            budget: {
                type: Sequelize.INTEGER,
                validate:{
                    isInt: true
                }
            },
            gross: {
                type: Sequelize.INTEGER
            },
            poster: {
                type: Sequelize.STRING(500)
            },
            position: {
                type: Sequelize.INTEGER
            }
        },
        {
            scopes: {
                test: {
                    where: {
                        year: 2007
                    }
                }
            },
            hooks:{
                beforeBulkCreate: function (film, options) {
                    console.log("HOOK !!beforeCreate!!");
                },
                afterBulkCreate: function (film, options) {
                    console.log("HOOK !!afterCreate!!");
                }
            }
        }
    );
};