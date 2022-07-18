const User = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendVerification = require('./sendVerification');
const crypto = require('crypto');


const usersControllers = {
    signUp: async (req,res) => {
        const { name, lastName, password, image, from } = req.body.data; //utilizo "data" en la action de logueo
        try {
            const userExist = await User.findOne({email});  //si el usuario existe
            const verification = false;
            const uniqueString = crypto.randomBytes(15).toString("hex"); 
            if(userExist) {
                if(userExist.from.indexOf(from) !== -1) { //si es true no le permitiremos volver a registrarse por este medio
                    res.json({
                        success: false,
                        from: from,
                        message: `${email} ya ha sido registrado, por favor inicia sesión`,
                    });
                } else { //sino significa que se registro por al menos 1 medio(form por ejm)
                    const passwordhashed = bcryptjs.hashSync(password, 10);
                    userExist.password.push(passwordhashed); 
                    userExist.from.push(form);
                    userExist.verificarion = true; 
                    await userExist.save();
                    res.json({
                        success: true,
                        from:from,
                        message: `No te has registrado aún con esta cuenta, por favor registrate.`
                    });
                }
            } else { //si el usuario no existe
                const passwordhashed = bcryptjs.hashSync(password, 10);
                const newUser = await new User ({ //creare uno con los requerimientos del modelo users
                    name,
                    lastName, 
                    password: [passwordhashed],
                    image,
                    from: [from],
                    uniqueString: uniqueString,
                    verification
                });
                if (from !== "formulario-registro"){
                    newUser.verification = true;
                    await newUser.save();
                    res.json({
                        success:true,
                        from:from,
                        message:`Ya te has logueado por ${from}, ahora puedes ingresar!`,
                    });
                   
                } else {
                    await newUser.save();
                    await sendVerification(email, uniqueString);
                    res.json({
                        success:true,
                        from:from,
                        message: `Verifica el email ${email} para finalizar el registro`,
                    });
                }
            }
        } catch (error) {
            res.json({
                success: false,
                from:from,
                message: error,
            });
            console.log(error)
        }
    },
}
module.exports = usersControllers
