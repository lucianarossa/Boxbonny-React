import React from "react";
import { useSelector } from 'react-redux'
import "../styles/OneExperience.css"


const OneExperience = () => {

    const packs = useSelector(store => store.packsReducer.packs)
    console.log("PACKS", packs)
    return (
        <>
        <div className="experienceCover">
            <img className="expimage" src="https://i.imgur.com/FLvtgfl.jpg?1" alt="experience" />
            <h1 className="exptitle">PARRILLA 1900</h1>
        </div>
        <div className="experienceBody">
            <div className="Overlay"></div>
            <h2 className="titleExp">DESCRIPCION</h2>
            <p className="subtitleExp">Caracteriza por una atención diferente como así también por las exquisiteces de su gastronomía, Parrilla 1900 te espera para disfrutar junto a tu familia o pareja de una de las mejores parrilladas de Santiago Del Estero.</p>
            <h2 className="titleExp">¿QUE INCLUYE?</h2>
            <p className="subtitleExp">2 infusiones calientes + 1 jugó natural de litro + 2 tostados en pan casero + Torta de manzana + 1 alfajor de maíz.</p>
            <h2 className="titleExp">UBICACION</h2>
            <p className="subtitleExp">CAMINO AL AERODROMO - VILLA GIARDINO - CORDOBA</p>
            <h2 className="titleExp">RESERVA ESTA EXPERIENCIA</h2>
            <p className="subtitleExp">contacto@boxbonny.com</p>
        </div>
        </>
    );

}

export default OneExperience
