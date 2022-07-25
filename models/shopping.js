const mongoose = require('mongoose')

const shoppingSchema = new mongoose.Schema ({
    idPack: [{type:mongoose.Types.ObjectId, ref:'packs'}],
    idUsuario: [{type:mongoose.Types.ObjectId, ref:'usuarios'}],
    fecha: {
        reservado: {type:Date},
        vendido: {type:Date},
        enviado: {type:Date}
    },
    estadoDeCompra: {type:String}
})

const Shopping = mongoose.model('shoppings',shoppingSchema)
module.exports = Shopping