const Experiencia = require('../models/experiencia')

const commentsControllers = {
	AddComment: async(req,res)=>{
		const {idExperiencia, comentario} = req.body.data
		const usuario = req.usuario.id
		try{
			const nuevoComentario = await Experiencia.findOneAndUpdate({_id:idExperiencia}, {$push: {comentarios: {comentario: comentario, idUsuario: usuario, fecha: Date.now()}}}, {new: true})
			res.json({ success: true, response:{nuevoComentario}, message:"Gracias por tu comentario" })
		}catch (err) {
			res.json({ success: false, response:err, message:"Algo salió mal, inténtalo de nuevo en unos minutos" })}
	
	},
	UpdateComment: async(req,res)=>{
		const {idComentario,comentario} = req.body.data
		try {
				const nuevoComentario = await Experiencia.findOneAndUpdate({"comentarios._id":idComentario}, {$set: {"comentarios.$.comentario": comentario,"comentarios.$.fecha": Date.now() }}, {new: true})
				res.json({ success: true, response:{nuevoComentario}, message:"El comentario se actualizo exitosamente" })
	
		}
		catch (error) {
				res.json({ success: true, message: "Algo salió mal, inténtalo de nuevo en unos minutos" })
		}
	
	},
	DeleteComment: async(req,res)=>{
		const idComentario = req.params.id
		try{
			const comentarioEliminado = await Experiencia.findOneAndUpdate({"comentarios._id":idComentario}, {$pull: {comentarios: {_id: idComentario}}}, {new: true})
			res.json({ success: true, response:{comentarioEliminado}, message:"El comentario se elimino exitosamente" })
			}
		catch (err) {
			res.json({ success: true, message: "Algo salió mal, inténtalo de nuevo en unos minutos" })
	}
		
	},
}
module.exports = commentsControllers