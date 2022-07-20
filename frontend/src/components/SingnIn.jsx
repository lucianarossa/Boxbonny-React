import React from 'react'
import '../styles/login.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useEffect } from 'react';


const SignIn = () => {

    const container = document.querySelector(".container");

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign_in_btn")
        const sign_up_btn = document.querySelector("#sign_up_btn")
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign_up_mode");
        });
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign_up_mode");
        });
        //eslint-disable-next-line
    }, [])




    return (
        <div className="container h-screen">
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
                    <form action="#" className="sign_up_form">
                        <LinkRouter to="/signup" className="title"> Registrate </LinkRouter>

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

                            <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" alt='Google' />

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