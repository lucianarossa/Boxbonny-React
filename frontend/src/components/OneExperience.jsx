import React from "react";
import "../styles/OneExperience.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import experienciasActions from "../redux/actions/experienciasActions"
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import Comments from "../components/Comments"



const OneExperience = () => {
    const navigate = useNavigate()
  
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(experienciasActions.getOneExperiencia(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const exp = useSelector(store => store.experienciasReducer.getOneExperiencia)
    // console.log("EXPPPP", exp)
   

    return (
        <>
        <div className="general-container">
            <div className="l-exp-container">
                <div className="l-card-container">
                    <div className="l-exp-card">
                        <div className="overlay"></div>
                        <img width="100%" className="l-card-img" src={exp?.imagen} alt="experience" />
                        <div className="l-card-text">
                            <h2 className="l-card-name">{exp?.nombre}</h2>
                        </div>
                    </div>
                 <Comments/>
                </div>
                <div className="experienceBody">
                    <h2 className="titleExp">DESCRIPCION</h2>
                    <p className="subtitleExp">{exp?.descripcion}</p>
                    <h2 className="titleExp">¿QUE INCLUYE?</h2>
                    <p className="subtitleExp">{exp?.incluye}</p>
                    <h2 className="titleExp">UBICACION</h2>
                    <p className="subtitleExp">{exp?.direccion}</p>
                    <h2 className="titleExp">RESERVA ESTA EXPERIENCIA</h2>
                    <p className="subtitleExp">contacto@boxbonny.com</p>
                </div>
            </div>
                <button onClick={() => navigate(-1)} className="card-button l-card-button fontRaleway">VOLVER AL PACK</button>
            </div>
        </>
    );

}

export default OneExperience
