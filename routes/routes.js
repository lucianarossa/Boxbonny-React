const Router = require('express').Router();


const packsControllers = require('../controllers/packsControllers');
const {getPacks,getOnePack, addPack, modifyPack, removePack} = packsControllers

const experienciasControllers = require('../controllers/experienciasControllers');
const {getExperiencias,getOneExperiencia,addExperiencia,modifyExperiencia,removeExperiencia} = experienciasControllers

Router.route('/packs')
.get(getPacks)
.post(addPack)

Router.route('/packs/:id')
.get(getOnePack)
.delete(removePack)
.put(modifyPack)

Router.route('/experiencias')
.get(getExperiencias)
.post(addExperiencia)

Router.route('/experiencias/:id')
.get(getOneExperiencia)
.delete(removeExperiencia)
.put(modifyExperiencia) 

module.exports = Router