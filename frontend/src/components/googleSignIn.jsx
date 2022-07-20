import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import usuariosActions from "../redux/actions/usuariosActions"


export default function GoogleSignIn() {

    const dispatch = useDispatch()

    async function handleCallBackResponse(response) {
        let userObject = jwt_decode(response.credential);
        // eslint-disable-next-line
        const res = await dispatch(usuariosActions.inicioSesion({
            email: userObject.email,
            password: userObject.sub,
            from: 'GOOGLE'
        }))

    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: '778020858325-1v2c8t0vk1ao55drjkf2bpttl7i0ko0v.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "filled_black", size: "small", locale: 'en', text: 'signin_with', shape: "pill" }
        )
        // eslint-disable-next-line
    });

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )

}