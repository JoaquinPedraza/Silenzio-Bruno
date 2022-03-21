const express = require ('express');
const funkosController = require ('../controllers/funkosController');  

const validator = require ('express-joi-validation').createValidator({});
const funkoSchema = require ('..schema_validations/funkoSchema');


const routes = (Funko) => {
  const funkoRouter = express.Router();

  const { getFunkos, postFunkos, getFunkoById, deleteFunkoById, putFunkos }= funkosController(Funko);

  funkoRouter.route('/funkos')
    .get( getFunkos)
    .post(validator.body(funkoSchema),postFunkos)

  funkoRouter.route('/funkos/:funkoId')
    .get( getFunkoById )
    .put( validator.body(funkoSchema),putFunkos )
    .delete( deleteFunkoById )


  return funkoRouter;
 }

 module.exports = routes;