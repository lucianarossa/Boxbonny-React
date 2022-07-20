import React from 'react'
import '../styles/login.css'
import { useEffect } from 'react';
import usuariosActions from '../redux/actions/usuariosActions'
import { useDispatch } from 'react-redux'
import googleSignUp from './googleSignUp';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


export default function SignUp() {

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign_in_btn")
        const sign_up_btn = document.querySelector("#sign_up_btn")
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign_up_mode");
        });
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign_up_mode");
        });
        const container = document.querySelector(".containerRegistro");

        //eslint-disable-next-line
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const signUpSubmit = async (event) => {
        event.preventDefault()
        console.log(event.target[4].value)
        const data = {
            nombre: event.target[0].value,
            apellido: event.target[1].value,
            email: event.target[3].value,
            contraseña: event.target[4].value,
            imagen: event.target[2].value,
            from: "formulario-registro"

        }

        let res = await dispatch(usuariosActions.registrarse(data))
        let errorSignUp = res.data.message
        if (res.data.from === "validator") {
            errorSignUp.forEach(e => {
                toast.error(e.message)
            })
        }
        if (res.data.from === "formulario-registro") {
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/signin')
            } else {
                toast.error(res.data.message)
            }
        }


    }



    return (
        <>
            <div className="containerRegistro sign_up_mode h-screen max-w-full">
                <div className="form_container">
                    <div className="signin_signup">
                        <form action="#" className="sign_in_form">
                            <h2 className="title">Ingresá</h2>

                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Usuario" />
                            </div>

                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                <input type="password" placeholder="Contraseña" />
                            </div>

                            <input type="submit" value="Inicia Sesión" className="btn" />
                            <p className="social_text">O iniciá sesión con:</p>

                            <div className="social_media">
                                <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt='Google' />

                            </div>
                        </form>
                        <form onSubmit={signUpSubmit} action="#" className="sign_up_form">
                            <h2 className="title"> Registrate </h2>

                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Nombre" />
                            </div>
                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Apellido" />
                            </div>
                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Imagen" />
                            </div>

                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="inputBox">
                                <i className='bx bxs-user'></i>
                                {/* <input type="password" placeholder="Contraseña" /> */}
                                <input
                                    type="password"
                                    className="inputForm w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                            <button type="submit" value="Registro" className="btn" />
                            <p className="social_text">O registrate con:</p>
                            <div className="social_media">
                                <googleSignUp />
                            </div>
                            <Toaster />
                        </form>
                    </div>
                </div>
                <div className="panel_container">
                    <div className="panel left_panel">
                        <div className="content">
                            <h3>No tenés cuenta todavía?</h3>
                            <p>
                                Registrate para empezar a regalar emociones
                            </p>
                            <button className="btn transparent" id="sign_up_btn">
                                Registrate
                            </button>
                        </div>
                        <img src="img/login.svg" className="image" alt="" />
                    </div>
                    <div className="panel right_panel">
                        <div className="content">
                            <h3>Querés iniciar sesión?</h3>
                            <p>
                                Inicia sesión con tu cuenta
                            </p>
                            <button type='submit' className="btn transparent" id="sign_in_btn">
                                Iniciar Sesión
                            </button>
                        </div>
                        <img src="img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}