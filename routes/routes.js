const Router = require('express').Router();
const passport = require('../config/passport');
const validator = require('../config/validator');

const packsControllers = require('../controllers/packsControllers');
const { getPacks, getOnePack, addPack, modifyPack, removePack } = packsControllers

const experienciasControllers = require('../controllers/experienciasControllers');
const { getExperiencias, getOneExperiencia, addExperiencia, modifyExperiencia, removeExperiencia, multiplesExperiencias, getExperienciasByPack } = experienciasControllers

const usuariosControllers = require('../controllers/usuariosControllers');
const { registrarse, inicioSesion, verificarToken, verificarMail } = usuariosControllers

const comentariosControllers = require('../controllers/comentariosControllers');
const { AddComment, UpdateComment, DeleteComment } = comentariosControllers


Router.route('/packs')
    .get(getPacks)
    .post(addPack)

Router.route('/packs/:id')
    .get(getOnePack)
    .delete(removePack)
    .put(modifyPack)

Router.route('/experiencias')
    .get(getExperiencias)
    
Router.route('/adminUpload')
    .post(passport.authenticate('jwt',{session: false}), addExperiencia)

Router.route('/experiencias/:id')
    .get(getOneExperiencia)
    .delete(removeExperiencia)
    .put(modifyExperiencia)

Router.route('/registrarse')
    .post(validator, registrarse)

Router.route('/inicioSesion')
    .post(inicioSesion)

Router.route('/verificarToken')
    .get(passport.authenticate('jwt', { session: false }), verificarToken)

Router.route('/verificar/:string')
    .get(verificarMail)

Router.route('/experiencias/comment')
    .post(passport.authenticate("jwt", { session: false }), AddComment)

Router.route('/experiencias/modifcomment')
    .put(passport.authenticate('jwt', { session: false }),
        UpdateComment)

Router.route('/experiencias/comment/:id')
    .post(passport.authenticate("jwt", { session: false }), DeleteComment) //controlar el nombre


Router.route("/multiplesExperiencias")
    .post(multiplesExperiencias)

Router.route("/experienciabypack/:id")
    .get(getExperienciasByPack)


module.exports = Router