const Actors = require('./actors');
const Films = require('./films');
const ActorsFilms = require('./actorsFilms');

module.exports = (Sequelize, config) => {
    const dbOptions = {
        host: config.db.host,
        dialect: 'mysql',
        define: {
            charset: 'utf8',
            timestamps: false
        }
    };
    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, dbOptions);
    sequelize
        .authenticate()
        .then(function() {
            console.log('Connected');
        })
        .catch(function (err) {
            console.log('Error:', err);
        });
    const actors = Actors(Sequelize, sequelize);
    const films = Films(Sequelize, sequelize);
    const actorsFilms = ActorsFilms(Sequelize, sequelize);

    actors.belongsToMany(films,{through: actorsFilms, as: 'Films'});
    films.belongsToMany(actors,{through: actorsFilms, as: 'Actors'});

    return{
        actors,
        films,
        sequelize: sequelize,
        Sequelize: Sequelize
    }
};