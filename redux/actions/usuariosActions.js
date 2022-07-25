import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usuariosActions = {
    registrarse: (data) => {
        // console.log(userData)
        return async (dispatch, getState) => {
            try {
                const res = await axios.post("https://boxbonny-back.herokuapp.com/api/registrarse", { data })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }

        }
    },

    inicioSesion: (logueado) => {
        return async (dispatch, getState) => {
            const res = await axios.post("https://boxbonny-back.herokuapp.com/api/inicioSesion", { logueado })
            console.log(res)
            //primero verifico que el success sea true
            if (res.data.success) {
								await AsyncStorage.setItem('@token', res.data.response.token)
                dispatch({ type: "USER", payload: res.data.response.usuarioData });
            }
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },

    desloguearse: () => {
        return async (dispatch, getState) => {
					AsyncStorage.removeItem('@token')
            dispatch({
                type: 'USER',
                payload: null
            })
        }
    },

    verificarToken: (token) => {
        console.log(token)

        return async (dispatch, getState) => {

            await axios.get("https://boxbonny-back.herokuapp.com/api/verificarToken", {
                headers: {
                    "Authorization": "Bearer " + token //el header espera una autoriz. metodo para autenticar y autozar el usuario
                }
            })
                .then(res => {
                    if (res.data.success) {
                        dispatch({ type: "USER", payload: res.data.response });
                        dispatch({
                            type: "MESSAGE",
                            payload: {
                                view: true,
                                message: res.data.message,
                                success: res.data.success
                            }
                        });
                    } else { AsyncStorage.removeItem('@token') }
                }


                )
                .catch(error => {
                    if (error.response.status === 401) //problemas de autenticacion
                        dispatch({
                            type: "MESSAGE",
                            payload: {
                                view: true,
                                message: "Please Log In again",
                                success: false
                            }
                        })
												AsyncStorage.removeItem('@token')
                })
        }
    }
}


export default usuariosActions