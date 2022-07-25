const Experiencia = require('../models/experiencia')

const commentsControllers = {
	AddComment: async(req,res)=>{
		// console.log(req.user)
		const {experiencia, comentario, rating } = req.body.comentario
		const usuario = req.user.id
		
		try{
			const nuevoComentario = await Experiencia.findOneAndUpdate({_id:experiencia}, {$push: {comentarios: {comentario: comentario, idUsuario: usuario, rating: rating, fecha: Date.now()}}}, {new: true}).populate("comentarios.idUsuario", {nombre:1, apellido:1, imagen:1})
			res.json({ success: true, response:{nuevoComentario}, message:"Gracias por tu comentario 😁" })
		}catch (err) {
			res.json({ success: false, response:err, message:"Algo salió mal, inténtalo de nuevo en unos minutos 😞" })}
	
	},
	UpdateComment: async(req,res)=>{
		// console.log("reqqq", req.body)
		const {idComentario,comentario, rating } = req.body
		try {
				const nuevoComentario = await Experiencia.findOneAndUpdate({"comentarios._id":idComentario}, {$set: {"comentarios.$.comentario": comentario, "comentarios.$.rating": rating,"comentarios.$.fecha": Date.now() }}, {new: true}).populate("comentarios.idUsuario", {nombre:1, apellido:1, imagen:1})
				res.json({ success: true, response:{nuevoComentario}, message:"Tu comentario fu modificado 😉" })
	
		}
		catch (error) {
				res.json({ success: true, message: "Algo salió mal, inténtalo de nuevo en unos minutos 😞" })
		}
	
	},
	DeleteComment: async(req,res)=>{
		const idComentario = req.params.id
		try{
			const comentarioEliminado = await Experiencia.findOneAndUpdate({"comentarios._id":idComentario}, {$pull: {comentarios: {_id: idComentario}}}, {new: true})
			res.json({ success: true, response:{comentarioEliminado}, message:"El comentario se elimino exitosamente 👍" })
			}
		catch (err) {
			res.json({ success: true, message: "Algo salió mal, inténtalo de nuevo en unos minutos 😞" })
	}
		
	},


	CheckRating: async (req, res) => {
        const idComentario = req.params.id //LLEGA X PARAM DESDE AXIOS (ID)
        const user = req.user._id //LLEGA X RESP DE PASSPORT
      

        await Experiencia.findOne({_id:idComentario}) // buscamos LA EXP que su obj id sea igual al q pasamos x parametro

        .then((comentario) => {
            // console.log("EXPERIENCIA",experiencia)

            if (comentario.includes(user)){ 

                Experiencia.findOneAndUpdate({_id:idComentario}, {$pull: {rating:user}}, {new: true}) 
                .then((response) => res.json({success:true,  response: response.rating, message: "Cambiamos tu valoracion!"}))
                .catch((error) => console.log(error))

            } else { 
                Experiencia.findOneAndUpdate({_id:idComentario}, {$push: {rating:user}}, {new: true}) 
                .then((response) => res.json({success:true, response: response.rating, message: "Gracias por tu valoracion!"}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success: false, response: error, message: "Algo no fue bien, intenta en unos minutos!"}))
       
    },
}
module.exports = commentsControllers