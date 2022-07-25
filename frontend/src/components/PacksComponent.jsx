import React from "react";
import '../styles/cards.css'
import { useSelector } from 'react-redux'
import { Link as LinkRouter } from 'react-router-dom'
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";



const PacksComponent = () => {
    var checkboxselected = []
    const packs = useSelector(store => store.packsReducer.packs)
    const [filtroPrecio, setFiltroPrecio] = useState()
    const [reload, setReload] = useState(false)
    // console.log(filtroPrecio)

    // console.log(packs);
    const checkboxdiez = useRef()
    const checkboxsiete = useRef()
    const checkboxcinco = useRef()
    console.log(packs)
    function selected(event){
        // setReload(!reload)
        let checked = event.current?.checked
        // console.log(event);
        if (checked){
            // console.log(event);
            checkboxselected.push(event.current?.value)
            // console.log("if" , checkboxselected);
        }
        else{
            checkboxselected = checkboxselected.filter(unchecked => unchecked != event.current?.value)
            console.log("else", checkboxselected);
            // setReload(!reload)
        }
        // setReload(!reload)
    }
    useEffect(()=>{
        setReload(!reload)
    },[])
    return (
        <div className="superContainer">
            <div className="container-izq">
                <div className="titlePacks">
                    <h2 className="hover:animate-pulse titleCards">PACKS</h2>
                    <h2 className="hover:animate-pulse subtitle-cards">"No se envuelven, envuelven en una nueva experiencia a quien los recibe. Se guardan en la memoria y se convierten en uno de esos recuerdos que, como un buen vino, mejoran con el tiempo"</h2>
                    <h2 className="hover:animate-pulse selecciona-experiencias">SELECCIONA Y DESCUBRI LAS EXPERIENCIAS</h2>
                </div>
                <div className="container-filtro-precios">
                    <h2 className="texto-filtro-precios">RANGO DE PRECIOS</h2>
                    <form className="filtro-precios">
                        <div className="box-checkbox">
                            <input type="checkbox" className="inputPrecios" value="5000" id="cinco" onChange={event => setFiltroPrecio(event.target.value)} ref={checkboxcinco} onClick={selected(checkboxcinco)}/>
                            <label className="label-checkbox" htmlFor="cinco">Hasta $5000</label>
                        </div>
                        <div className="box-checkbox">
                            <input type="checkbox" className="inputPrecios" value="7500" id="ocho" onChange={event => setFiltroPrecio(event.target.value)} ref={checkboxsiete} onClick={selected(checkboxsiete)}/>
                            <label className="label-checkbox" htmlFor="ocho">Hasta $7500</label>
                        </div>
                        <div className="box-checkbox">
                            <input type="checkbox" className="inputPrecios" value="9999" id="diez" onChange={event => setFiltroPrecio(event.target.value)} ref={checkboxdiez} onClick={selected(checkboxdiez)}/>
                            <label className="label-checkbox" htmlFor="diez">Hasta $10000</label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="containerPacks">
                {packs &&
                    checkboxselected.length === 0 ?
                    packs && packs?.map((pack, index) =>
                        <div className="card" key={index}>
                            <h2 className="text-title">{pack?.nombre}</h2>
                            <video className="card-img" autoPlay loop muted>
                                <source src={pack?.imagen} type='video/mp4' />
                            </video>
                            <div className="card-info font-bold fontRaleway">
                                <p className="text-body">{pack?.descripcion}</p>
                                <p className="text-body">PRECIO: ${pack?.Precio}</p>
                                <LinkRouter to={`packdetails/${pack._id}`}><button className="card-button fontRaleway">VER PACK</button></LinkRouter>
                            </div>
                        </div>
                        ) 
                        :
                    packs?.filter(Pack => Pack.Precio <= checkboxselected).map((pack, index) =>
                        <div className="card" key={index}>
                            <h2 className="text-title">{pack?.nombre}</h2>
                            <video className="card-img" autoPlay loop muted>
                                <source src={pack?.imagen} type='video/mp4' />
                            </video>
                            <div className="card-info font-bold fontRaleway">
                                <p className="text-body">{pack?.descripcion}</p>
                                <p className="text-body">PRECIO: ${pack?.Precio}</p>
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
