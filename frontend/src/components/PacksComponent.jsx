import React from "react";
import '../styles/cards.css'
import { useSelector } from 'react-redux'
import {Link as LinkRouter} from 'react-router-dom'


const PacksComponent = () => {

    const packs = useSelector(store => store.packsReducer.packs)
    console.log(packs)
    return (
        <>
        <div className="titlePacks">
        <h2 className="hover:animate-pulse">Packs para disfrutar</h2>
        </div>
        <div className="containerPacks">
            {packs.map((pack, index) =>
                <div className="card" key={index}>
                    <img className="card-img" src={pack.imagen} alt="Card" />
                    <div className="card-info font-bold fontRaleway">
                        <p className="text-title">{pack.nombre}</p>
                        <p className="text-body">{pack.descripcion}</p>
                       <LinkRouter to={`packdetails/${pack._id}`}><button className="card-button fontRaleway">Ver más</button></LinkRouter>
                    </div>
                </div>)}
        </div>
        </>
    );

}

export default PacksComponent
