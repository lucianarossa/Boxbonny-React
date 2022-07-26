const Shopping = require('../models/shopping')


const shoppingControllers = {

    addProduct: async (req, res) => {
        console.log(req.body)
        const {idPack} = req.body
        const idUsuario = req.user._id
        const cantidad = 1
        try {
            const newCarrito = await Shopping({ idPack, idUsuario, cantidad }).save()
            res.json({
                success: true,
                response: { newCarrito },
                message: "Producto añadido con éxito"
            })
            console.log(newCarrito)
        }
        catch (error) {
            console.log(error)
            res.json({
                success: false,
                message: "Perdón, no pudimos añadir el producto, intenta de vuelta"
            })
        }
    },

    getUserProducts: async (req, res) => {
        const idUsuario = req.user._id
        let shopping;
        const error = null;
        try {
            shopping = await Shopping.find({ idUsuario: idUsuario })
                .populate("idUsuario", {nombre:1, apellido:1, email:1})
                .populate("idPack",{nombre:1, Precio:1, imagen:1, descripcion:1, cantidad:1})
                console.log(shopping)
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? "ERROR" : { shopping },
            success: error ? false : true,
            error: error
        })
    },

    getOneProduct: async (req, res) => {
        //console.log(req.params.id)
        let product = req.params.id
        console.log(product)
        let idUser = req.user._id
        let shopping
        let error = null
        try {
            shopping = await Shopping.find({ idUser: idUser, _id: product })
                .populate("idPack", { nombre: 1, precio: 1, imagen: 1 })
                .populate("idUsuario", { email: 1, nombre: 1 })
            console.log(shopping)
        } catch (err) {
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : { shopping },
            success: error ? false : true,
            error: error
        })
    },

    deleteProduct: async (req, res) => {
        const idProduct = req.params.id
        console.log(idProduct)
        try {
            const respuesta = await Shopping.findOneAndDelete({ _id:idProduct})
            console.log("DELETEEEEEEEEEEE",respuesta)
            res.json({
                success: true,
                message: "El producto ha sido eliminado"
            })
        }
        catch (error) {
            console.log(error)
            res.json({
                success: true,
                message: "Perdón, no se pudo borrar el producto, intenta de vuelta"
            })
        }
    },

    modifyProduct: async (req,res) => {
        //console.log('REQ BODY REQ BODY REQ BODY REQ BODY REQ BODY')
        //console.log(req.body)
        const {productId,cantidad} = req.body
        try {
            const modifyCarrito = await Shopping
            .findOneAndUpdate({"_id": productId}, {$set:{
                "cantidad": cantidad}}, {new: true})
            res.json({success: true,
                response: {modifyCarrito},
                message: "Tu compra se ha modificado"})
        }
        catch (error) {
            console.log(error)
            res.json({ success: true,
                message: "Perdón, no pudimos hacer la modificación" })
        }
    },



}
module.exports = shoppingControllers