import React from 'react'
// import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {useNavigate} from 'react-router-dom'


import experienciasActions from '../redux/actions/experienciasActions'

function Upload() {
    const dispatch = useDispatch()
    const sortedStates = ['Buenos Aires', 'Cordoba', 'Mendoza']
    const packs = useSelector(store => store.packsReducer.packs)
    const [files, setFiles] = useState()

    async function handleSubmit(event) {
        event.preventDefault()

        // const file = await event.target[6].value
        const file = await files[0]
        // console.log(files);
        const pack = await event.target[0].value
        // console.log("ID PACK", pack);
        const nameExperience = await event.target[1].value
        const description = await event.target[2].value
        const include = await event.target[3].value
        const state = await event.target[4].value
        const address = await event.target[5].value

        const formData = new FormData()
        formData.append('pack', pack)
        formData.append('nombre', nameExperience)
        formData.append('descripcion', description)
        formData.append('incluye', include)
        formData.append('ciudad', state)
        formData.append('direccion', address)
        formData.append('imagen', file)
        // console.log(formData);
        await dispatch(experienciasActions.addExperiencia(formData))
    }


    return (
        <div className="dark:bg-gray-900" style={{ backgroundColor: '#f6f7eb' }}>
            <div className="flex justify-center align-middle h-auto py-6">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundColor: '#ff8e72' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white fontPoppins">Box Bonny</h2>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700fontPoppins">Box Bonny</h2>

                            <p className="mt-3 text-black-500  font-bold fontRalewayItalic">Carga tu experiencia</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit} className="fontRaleway px-0" >
                                <div>
                                    <label className="block mb-2 text-sm">Seleccionar Pack</label>
                                    <select className="block w-[15rem] px-5 py-2 mt-2 fontRaleway text-gray-700 placeholder-gray-400  rounded-md" >
                                        <option className='fontRaleway text-black-700'>Pack</option>
                                        {packs.map((pack, index) => (
                                            <option
                                                className='fontRaleway'
                                                key={index}
                                                value={pack._id}
                                            >{pack.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <label className="block mb-2 text-sm">Nombre de Experiencia</label>
                                    <input type="text" name="experience" id="experience" placeholder="Experiencia Gastronomica" className="block  w-[15rem] px-4 py-2 mt-2 fontRaleway text-gray-700 placeholder-gray-400 " />
                                </div>
                                <div className="mt-6">
                                    <label className="block mb-2 text-sm">Descripcion</label>
                                    <input type="text" name="Description" id="Description" placeholder="Este pack ofrece..." className="block w-[15rem] fontRaleway px-4 py-2 mt-2 text-black-700 placeholder-gray-400 " />
                                </div>
                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-black-600">Incluye</label>
                                    <input type="text" name="Description" id="Description" placeholder="Sesión de 2 horas de..." className="block w-[15rem] fontRaleway px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 " />
                                </div>
                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-black-600">Provincia</label>
                                    <select required className="block w-[15rem] px-4 py-2 mt-2 fontRaleway text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md " title="selector de proviincia">
                                        <option> Provincia </option>
                                        {sortedStates.map((state, index) => (
                                            <option key={index}
                                                value={state}>{state}</option>
                                        )
                                        )}
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <label className="block mb-2 text-sm">Direccion</label>
                                    <input type="text" name="address" id="address" placeholder="Av. Rivadavia 3324" className="block fontRaleway w-[15rem] px-4 py-2 mt-2 text-gray-700 placeholder-gray-400  rounded-md  " />
                                </div>

                                <div className="mt-6">
                                    <label className="block mb-2 text-sm text-gray-600">Foto</label>
                                    <input type="file" onChange={(event) => setFiles(event.target.files)} name="photo" id="address" className="block fontRaleway w-[15rem] px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white rounded-md " />
                                </div>
                                <div className="mt-6">
                                    <button
                                        style={{ backgroundColor: '#ff8e72' }}
                                        type="Submit"
                                        title="boton subiir experiencia"
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md ">
                                        Subir Experiencia
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload