const Router = require('express').Router();
const passport = require('../config/passport');

const packsControllers = require('../controllers/packsControllers');
const { getPacks, getOnePack, addPack, modifyPack, removePack } = packsControllers

const experienciasControllers = require('../controllers/experienciasControllers');
const { getExperiencias, getOneExperiencia, addExperiencia, modifyExperiencia, removeExperiencia } = experienciasControllers

const usuariosControllers = require('../controllers/usuariosControllers');
const { registrarse, inicioSesion, verificarToken, verificarMail } = usuariosControllers



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

Router.route('/registrarse')
    .post(registrarse)
Router.route('/inicioSesion') //agregar validator
    .post(inicioSesion)

Router.route('/verificarToken')
    .get(passport.authenticate('jwt', { session: false }), verificarToken)

Router.route('/verificar/:string')
    .get(verificarMail)

module.exports = Router