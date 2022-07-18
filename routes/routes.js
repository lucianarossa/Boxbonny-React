const Router = require('express').Router();


const packsControllers = require('../controllers/packsControllers');
const {getPacks,getOnePack, addPack, modifyPack, removePack} = packsControllers

Router.route('/packs')
.get(getPacks)
.post(addPack)

Router.route('/packs/:id')
.get(getOnePack)
.delete(removePack)
.put(modifyPack) 

module.exports = Router