const Shopping = require('../models/shopping')


const shoppingControllers = {

    addProduct: async (req, res) => {
        console.log(req.body)
        const {idPack} = req.body
        const idUsuario = req.user._id
        try {
            const newCarrito = await new Shopping({ idPack, idUsuario }).save()
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
                .populate("idPack",{nombre:1, Precio:1, imagen:1})
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
        try {
            await Shopping.findOneAndDelete({ _id: idProduct })
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
}
module.exports = shoppingControllers