const express = require ('express');
const funkosController = require ('../controllers/funkosController');  

const routes = (Funko) => {
  const funkoRouter = express.Router();

  const { getFunkos, postFunkos, getFunkoById, deleteFunkoById, putFunkos }= funkosController(Funko);

  funkoRouter.route('/funkos')
    .get( getFunkos)
    .post(postFunkos)

  funkoRouter.route('/funkos/:funkoId')
    .get( getFunkoById )
    .put( putFunkos )
    .delete( deleteFunkoById )


  return funkoRouter;
 }

 module.exports = routes;