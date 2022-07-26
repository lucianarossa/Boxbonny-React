import React from "react";
import "../styles/packDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom"
import { useParams } from "react-router-dom";
import packsActions from "../redux/actions/packsActions"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import shoppingActions from "../redux/actions/shoppingActions";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function PackDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        dispatch(packsActions.getOnePack(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const pack = useSelector(store => store.packsReducer.getOnePack)

    async function añadirProducto(event) {
        const idPack = event.target.id
        dispatch(shoppingActions.addProduct(idPack))
        dispatch(shoppingActions.getUserProducts())
        setReload(!reload)
    }

    const provincias = ["Buenos Aires", "Córdoba", "Mendoza"]
    const [select, setSelect] = useState("")


    const [inputSearch, setInputSearch] = useState("")
    console.log(inputSearch);
    useEffect(() => {
        // experienciasActions.filterExperiencia(select)
        packsActions.filterExperiencia(select)

        // eslint-disable-next-line
    }, [])
    let experiencias = pack.experiencias



    return (
        <div className="E-container-gral bg-[#F6F7EB]">
            <div className="container-body-packs">
                <div className="pack-titulo">
                    <h1 className="hover:animate-pulse titulo-pdetails">{pack?.nombre}</h1>
                    <p className="hover:animate-pulse descripcion-pdetails">{pack?.descripcion}</p>
                    <p className="hover:animate-pulse descripcion-pdetails precio-pack">PRECIO DEL PACK: ${pack?.Precio}</p>
                    <button id={pack._id} onClick={añadirProducto} className="card-button fontRaleway flex justify-center align-center content-center"><ShoppingCartOutlinedIcon/>Añadir Producto</button>
                    <p className="hover:animate-pulse descripcion-pdetails mensaje-pack">MOMENTOS UNICOS PARA DISFRUTAR</p>
                    

                </div>
                <div className="filter-cards-container">
                    <div className="filtro-provincias">

                        <form className="formulario-filter">
                            <label className='filter-title'>ELEGI DONDE DISFRUTAR TU EXPERIENCIA</label>

                            <select className='select-filter' onChange={(event) => setSelect(event.target.value)}>
                                <option value={"Todas las provincias"}>Todas las provincias</option>
                                {provincias.map(p =>
                                    <option key={p._id}>{p}</option>
                                )}
                            </select>

                            <h2 className='filter-title-filter'>BUSCA UNA EXPERIENCIA</h2>
                            <input className='select-filter' type="text" placeholder="Experiencia..." onChange={(event) => setInputSearch(event.target.value)} />
                        </form>

                    </div>
                    <div className="contenedor-experiencias">
                        {select === "" ?
                            experiencias &&
                            experiencias.filter(city => city.nombre.toLowerCase().startsWith(inputSearch.toLowerCase())).map(xp =>
                                <div className="e-card" key={xp._id}>
                                    <div className="e-card-container">
                                        <img src={xp?.imagen} alt="imagen-xp" className="e-card-img" />
                                    </div>
                                    <div className="e-card-info">
                                        <div className="e-card-text">
                                            <p className="e-text-title">{xp?.nombre}</p>
                                            <p className="e-text-subtitle">{xp?.ciudad}</p>
                                            <LinkRouter to={`/packs/oneexperience/${xp._id}`}>
                                                <button className="card-button e-card-button fontRaleway">CONOCE MAS</button>
                                            </LinkRouter>
                                        </div>
                                    </div>
                                </div>) :
                            experiencias &&
                                select === "Todas las provincias" ?
                                experiencias.filter(city => city.nombre.toLowerCase().startsWith(inputSearch.toLowerCase())).map(xp =>
                                    <div className="e-card" key={xp._id}>
                                        <div className="e-card-container">
                                            <img src={xp?.imagen} alt="imagen-xp" className="e-card-img" />
                                        </div>
                                        <div className="e-card-info">
                                            <div className="e-card-text">
                                                <p className="e-text-title">{xp?.nombre}</p>
                                                <p className="e-text-subtitle">{xp?.ciudad}</p>
                                                <LinkRouter to={`/packs/oneexperience/${xp._id}`}>
                                                    <button className="card-button e-card-button fontRaleway">CONOCE MAS</button>
                                                </LinkRouter>
                                            </div>
                                        </div>
                                    </div>) :
                                experiencias &&
                                experiencias.filter(city => city.ciudad === select && city.nombre.toLowerCase().startsWith(inputSearch.toLowerCase())).map(xp =>
                                    <div className="e-card" key={xp._id}>
                                        <div className="e-card-container">
                                            <img src={xp?.imagen} alt="imagen-xp" className="e-card-img" />
                                        </div>
                                        <div className="e-card-info">
                                            <div className="e-card-text">
                                                <p className="e-text-title">{xp?.nombre}</p>
                                                <p className="e-text-subtitle">{xp?.ciudad}</p>
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