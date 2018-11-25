module.exports = (Sequelize, sequelize) => {
    return sequelize.define('actorsFilms', {
        actorId: {
            type: Sequelize.INTEGER
        },
        filmId: {
            type: Sequelize.INTEGER
        }
    });
};