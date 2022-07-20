import React from "react";
import "../styles/packDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import packsActions from "../redux/actions/packsActions"
import { useEffect } from "react";
import FilterProvincias from "./FilterProvincias";

export default function PackDetails(){
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(packsActions.getOnePack(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const pack = useSelector(store=>store.packsReducer.getOnePack)

    console.log(pack);


    return  (
        <div className="E-container bg-[#F6F7EB]">
            <div className="pack-details flex-1">
                <div className="pack-titulo">
                    <h1 className="titulo-pdetails">{pack?.nombre}</h1>
                    <p className="descripcion-pdetails">{pack?.descripcion}</p>
                </div>
            </div>
            <div className="filtro-provincias">
            <FilterProvincias />
            </div>
            <div className="contenedor-experiencias">
                {pack.experiencias &&
                pack?.experiencias.map(xp=>
                <div class="e-card">
                    <div className="e-card-container">
                        <img src={xp?.imagen} alt="imagen-xp" className="e-card-img"/>
                    </div>
                        <div class="e-card-info">
                            <div class="e-card-text">
                                <p class="e-text-title">{xp?.nombre}</p>
                                <p class="e-text-subtitle">{xp?.ciudad}</p>
                                <LinkRouter to={`oneexperience/${xp._id}`}>
                                    <button className="card-button e-card-button fontRaleway">CONOCE MAS</button>
                                </LinkRouter>
                            </div>
                    </div>
                </div>)
                }
            </div>
        </div>
        )
}