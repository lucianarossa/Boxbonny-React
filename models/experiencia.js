const mongoose = require('mongoose');

const packSchema = new mongoose.Schema({
	nombre: {type: String, required: true},
	descripcion: {type: String, required: true},
	incluye: {type: String, required: true},
	direccion: {type: String, required: true},
	ciudad: {type: String, required: true},		
	imagen: {type: String, required: true},
	pack: {type: mongoose.Types.ObjectId, ref:"packs"}

})

const Pack = mongoose.model('experiencias', packSchema)
module.exports = Pack