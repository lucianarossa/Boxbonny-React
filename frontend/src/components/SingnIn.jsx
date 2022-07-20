import React from 'react'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import usuariosActions from '../redux/actions/usuariosActions';
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import GoogleSignIn from './GoogleSignIn'

const SignIn = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
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

    const loginSubmit = async (event) => {
        event.preventDefault()
        const logueado = {
            email: event.target[0].value,
            contraseña: event.target[1].value,
            from: "formulario-registro"
        }
        console.log(logueado)

        let res = dispatch(usuariosActions.inicioSesion(logueado))
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/signin')
            } else {
                toast.error(res.data.message)
            }
        
    }


    return (
        <div className="containerRegistro h-screen max-w-full ">
            <div className="form_container">
                <div className="signin_signup">
                    <form onSubmit={loginSubmit} action="#" className="sign_in_form">
                        <h2 className="title">Ingresá</h2>

                        <div className="inputBox">
                            <i className='bx bxs-user'></i>
                            <input type="text" placeholder="Email" />
                        </div>

                        <div className="inputBox">
                            <i className='bx bxs-user'></i>
                            <input type="password" placeholder="Contraseña" />
                        </div>

                        <input type="submit" value="Inicia Sesión" className="btn" />
                        <p className="social_text">O iniciá sesión con:</p>

                        <div className="social_media">
                            <GoogleSignIn />

                        </div>
                        <Toaster />

                    </form>
                    <form action="#" className="sign_up_form">
                        <h2 className="title"> Registrate </h2>

                        <div className="inputBox">
                            <i className='bx bxs-user'></i>
                            <input type="text" placeholder="Usuario" />
                        </div>

                        <div className="inputBox">
                            <i className='bx bxs-user'></i>
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="inputBox">
                            <i className='bx bxs-user'></i>
                            <input type="password" placeholder="Contraseña" />
                        </div>

                        <input type="submit" value="Sign up" className="btn" />
                        <p className="social_text">O registrate con:</p>


                        <div className="social_media">
                        </div>
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
                        <button className="btn transparent" id="sign_up_btn"  >
                            Registrate
                        </button>
                    </div>
                    <img src="img/login.svg" className="image" alt="" />
                </div>
                <div className="panel right_panel">
                    <div className="content">
                        <h3>Querés iniciar sesión?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur earum quod
                        </p>
                        <button className="btn transparent" id="sign_in_btn">
                            Iniciar Sesión
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>

    )
}

export default SignIn