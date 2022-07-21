import React from "react";
import "../styles/packDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import packsActions from "../redux/actions/packsActions"
import { useEffect } from "react";
import FilterProvincias from "./FilterProvincias";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import experienciasActions from "../redux/actions/experienciasActions";




export default function PackDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(packsActions.getOnePack(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const pack = useSelector(store => store.packsReducer.getOnePack)


    const provincias = ["Buenos Aires", "Cordoba", "Mendoza"]
    const [select, setSelect] = useState("")
    console.log(select);
    useEffect(()=>{
        // experienciasActions.filterExperiencia(select)
        packsActions.filterExperiencia(select)
    },[])
    let experiencias = pack.experiencias

    return (
        <div className="E-container-gral bg-[#F6F7EB]">
            <div className="container-body-packs">
                <div className="pack-titulo">
                    <h1 className="hover:animate-pulse titulo-pdetails">{pack?.nombre}</h1>
                    <p className="hover:animate-pulse descripcion-pdetails">{pack?.descripcion}</p>
                    <p className="hover:animate-pulse descripcion-pdetails precio-pack">PRECIO DEL PACK: ${pack?.precio}</p>
                    <p className="hover:animate-pulse descripcion-pdetails mensaje-pack">MOMENTOS UNICOS PARA DISFRUTAR</p>
                </div>
                <div className="filter-cards-container">
                    <div className="filtro-provincias">
                        {/* <FilterProvincias /> */}
                        <div>
                            <form>
                            <label className='filter-title'>ELEGI DONDE DISFRUTAR TU EXPERIENCIA</label>
                            <select className='select-filter' onChange={(event)=> setSelect(event.target.value)}>
                                <option>Selecciona tu provincia!</option>
                                {provincias.map(p =>
                                <option>{p}</option>
                                )}
                            </select>
                            </form>
                        </div>
                    </div>
                    <div className="contenedor-experiencias">
                        {experiencias &&
                        experiencias.filter(city => city.ciudad === select).map(xp =>
                                <div class="e-card">
                                    <div className="e-card-container">
                                        <img src={xp?.imagen} alt="imagen-xp" className="e-card-img" />
                                    </div>
                                    <div class="e-card-info">
                                        <div class="e-card-text">
                                            <p class="e-text-title">{xp?.nombre}</p>
                                            <p class="e-text-subtitle">{xp?.ciudad}</p>
                                            <LinkRouter to={`/packs/oneexperience/${xp._id}`}>
                                                <button className="card-button e-card-button fontRaleway">CONOCE MAS</button>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
            <button onClick={() => navigate(-1)} className="card-button l-card-buttonp fontRaleway">VOLVER A PACKS</button>
        </div>
    )
}