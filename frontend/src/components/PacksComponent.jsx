import React from "react";
import '../styles/cards.css'
import { useSelector } from 'react-redux'
import {Link as LinkRouter} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";



const PacksComponent = () => {

    const packs = useSelector(store => store.packsReducer.packs)
    // const precios = packs.Precios
    const [filtroPrecio, setFiltroPrecio] = useState()
    const [reload, setReload] = useState()
    console.log(filtroPrecio)
    console.log(packs);
    // console.log(filtroPrecio > precios);
    // useEffect(()=>{
    //     setReload(!reload)
    // },[reload]
    // )
    
    return (
        <div className="superContainer">
            <div className="container-izq">
                <div className="titlePacks">
                    <h2 className="hover:animate-pulse titleCards">PACKS</h2>
                    <h2 className="hover:animate-pulse">"No se envuelven, envuelven en una nueva experiencia a quien los recibe. Se guardan en la memoria y se convierten en uno de esos recuerdos que, como un buen vino, mejoran con el tiempo"</h2>
                    <h2 className="hover:animate-pulse selecciona-experiencias">SELECCIONA Y DESCUBRI LAS EXPERIENCIAS</h2>
                </div>
                <div className="container-filtro-precios">
                    <h2 className="texto-filtro-precios">Filtra por rango de precios! </h2>
                    <form className="filtro-precios">
                        <input type="checkbox" className="inputPrecios" value="5000" id="cinco" onChange={event=> setFiltroPrecio(event.target.value)}/>
                        <label htmlFor="cinco">Hasta $5000</label>
                        <input type="checkbox" className="inputPrecios" value="7500"id="ocho" onChange={event=> setFiltroPrecio(event.target.value)}/>
                        <label htmlFor="ocho">Hasta $7500</label>
                        <input type="checkbox" className="inputPrecios" value="9999"id="diez" onChange={event=> setFiltroPrecio(event.target.value)}/>
                        <label htmlFor="diez">Hasta $10000</label>
                    </form>
                </div>
            </div>
            <div className="containerPacks">
                {packs&&
                filtroPrecio == undefined ?
                packs.map((pack, index) =>
                <div className="card" key={index}>
                    <h2 className="text-title">{pack.nombre}</h2>
                    <img className="card-img" src={pack.imagen} alt="Card" />
                    <div className="card-info font-bold fontRaleway">
                        <p className="text-body">{pack.descripcion}</p>
                        <LinkRouter to={`packdetails/${pack._id}`}><button className="card-button fontRaleway">VER PACK</button></LinkRouter>
                    </div>
                </div>):
                packs &&
                packs.filter(Pack=>Pack.Precio<=filtroPrecio).map((pack, index) =>
                    <div className="card" key={index}>
                        <h2 className="text-title">{pack.nombre}</h2>
                        <img className="card-img" src={pack.imagen} alt="Card" />
                        <div className="card-info font-bold fontRaleway">
                            <p className="text-body">{pack.descripcion}</p>
                            <LinkRouter to={`packdetails/${pack._id}`}>
                                <button className="card-button fontRaleway">VER PACK</button>
                            </LinkRouter>
                        </div>
                    </div>)
                    } 
            </div>
        </div>
    );

}

export default PacksComponent
