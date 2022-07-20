import React from "react";
import "../styles/packDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import packActions from "../redux/actions/packsActions"
import { useEffect } from "react";
import FilterProvincias from "./FilterProvincias";

export default function PackDetails(){
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(packActions.getOnePack(id))
    },[])
    const pack = useSelector(store=>store.packsReducer.getOnePack)

    console.log(pack);


    return  (
        <div className="E-container bg-[#F6F7EB]">
            <div className="pack-details flex-1">
                <div className="pack-titulo">
                    <h1 className="titulo-pdetails">{pack.nombre}</h1>
                    <p className="descripcion-pdetails">{pack.descripcion}</p>
                </div>
            </div>
            <div className="filtro-provincias">
            <FilterProvincias />
            </div>
            <div className="contenedor-experiencias">
                {pack.experiencias.map(xp=>
                <div class="e-card">
                    <div class="e-card-img"></div>
                        <div class="e-card-info">
                            <div class="e-card-text">
                                <p class="e-text-title">{xp.ciudad}</p>
                                <p class="e-text-subtitle">{xp.nombre}</p>
                            </div>
                        <div class="e-card-icon">
                            <svg className="e-svg" viewBox="0 0 28 25">
                                <path d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"></path>
                            </svg>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
        )
}