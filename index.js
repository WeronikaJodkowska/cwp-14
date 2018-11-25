const Sequelize = require('sequelize');
const config = require('./config.json');
const db = require('./models')(Sequelize, config);

const filmsData = require('./films');
const actorsData = require('./actors');


//SCRIPT GENERATE DB WITH INSERTING DATA
(async ()=> {
    //  await db.sequelize.sync({force: true});
    // await db.films.bulkCreate(filmsData);
    // await db.actors.bulkCreate(actorsData);
    // console.log(filmsData.slice(0,1)[0]);
    let film = await db.films.build(filmsData.slice(0,1)[0]);
    film.validate()
        .then(()=> console.log("OK"))
        .catch(()=>console.log("FAILED"));
    // await db.films.bulkCreate(filmsData.slice(0,3));
    // await db.actors.update({
    //     liked: 8
    // },{
    //     where:{
    //         films: 3
    //     }
    // });
    // await db.actors.destroy({
    //     where:{
    //         films: 3
    //     }
    // });

    // await db.films.findOne({
    //     where:{
    //         id: 1
    //     },include:[{
    //         model: db.actors,
    //         as: 'Actors'
    //     }]})
    //     .then((result)=> result.Actors.forEach(function (actor) {
    //         console.log(actor.name);
    //     }));
    // await db.films.scope('test').findAll().forEach(function (film) {
    //              console.log(film.title);
    // });
    // db.sequelize
    //     .transaction()
    //     .then(function(t) {
    //         return db.actors.findAll({transaction: t})
    //             .then(async function (result) {
    //                 console.log("d");
    //                 return  db.actors.update({liked: 0},
    //                     {
    //                         where: {},
    //                         transaction: t
    //                     })
    //             })
    //             .then(function () {
    //                 setTimeout(() => {
    //                     return t.rollback()
    //                 }, 10000)
    //             })
    //             .catch(function (err) {
    //                 console.log("err");
    //                 t.rollback();
    //             })
    //     });
})();