import React, { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import usuariosActions from "../redux/actions/usuariosActions"


function GoogleSignUp() {
    const dispatch = useDispatch();

    async function handleCallBackResponse(response) {
        // console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        // console.log(userObject);
        // console.log(props)
// eslint-disable-next-line
        const res = await dispatch(usuariosActions.registrarse({
            nombre: userObject.given_name,
            apellido: userObject.family_name,
            email: userObject.email,
            contraseña: userObject.sub,
            imagen: userObject.picture,
            from: "GOOGLE"

        }))


    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '778020858325-1v2c8t0vk1ao55drjkf2bpttl7i0ko0v.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "filled_black", size: "small", locale: 'en', text: 'signup_with', shape: "pill" }
        )
    });

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )





}

export default GoogleSignUp