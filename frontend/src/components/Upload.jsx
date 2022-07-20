import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'



function Upload() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get(`https://apis.datos.gob.ar/georef/api/provincias`)
        .then((api) => setState(api.data.provincias))
    },[])
    const sortedStates = state.map(res => res.nombre).sort()

    const packs = ['Gastronomia', 'Bienestar', 'Aventura', 'Escapadas' ]



    async function  handleSubmit(event){
        event.preventDefault()

        const pack = await event.target[0].value
        console.log('pack: ', pack);

        const nameExperience = await event.target[1].value
        console.log('nameExperience: ', nameExperience);

        const description = await event.target[2].value
        console.log('description: ', description);

        const state = await event.target[3].value
        console.log('state: ', state);

        const address = await event.target[4].value
        console.log('address: ', address);

        const photo = await event.target[5].value
        console.log('photo: ', photo);


        const formData = new FormData()
            formData.append('pack', pack )
            formData.append('nameExperience', nameExperience )
            formData.append('description', description )
            formData.append('state', state )
            formData.append('address', address )
            formData.append('photo', photo )

        //const res = await dispatch (actions.uploadPack(formdata))
    }


  return (
    <div className="dark:bg-gray-900" style={{backgroundColor:'#f6f7eb'}}>
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundColor: '#ff8e72'}}>
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white fontPoppins">Box Bonny</h2>
                        
                        <p className="max-w-xl mt-3  text-gray-300 fontRaleway">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white fontPoppins">Box Bonny</h2>
                        
                        <p className="mt-3 text-gray-500 dark:text-gray-300 font-bold fontRalewayItalic">Carga tu experiencia</p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleSubmit} className="fontRaleway" >
                            <div>
                                <label  className="block mb-2 text-sm">Seleccionar Pack</label>
                                <select className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                                    <option>Pack</option>
                                    {packs.map((pack,index)=>(
                                        <option 
                                        key={index}
                                        value={pack}
                                        >{pack}</option>
                                    ))}
                                </select>
                            </div>


                            <div className="mt-6">
                                <label  className="block mb-2 text-sm">Nombre de Experiencia</label>
                                <input type="text" name="experience" id="experience" placeholder="Experiencia Gastronomica" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-6">
                                <label  className="block mb-2 text-sm">Descripcion</label>
                                <input type="text" name="Description" id="Description" placeholder="Este pack ofrece..." className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-6">
                                <label  className="block mb-2 text-sm">Provincia</label>
                                <select required className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                                    <option> Provincia </option>
                                    {sortedStates.map((state, index) => (
                                        <option  key={index} 
                                        value={state}>{state}</option>
                                    )
                                    )}
                                </select>
                            </div>
                            <div className="mt-6">
                                <label  className="block mb-2 text-sm">Direccion</label>
                                <input type="text" name="address" id="address" placeholder="Av. Rivadavia 3324" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <label  className="block mb-2 text-sm">Foto</label>
                                <input type="file" name="photo" id="address"  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
                            <div className="mt-6">
                                <button
                                    style={{backgroundColor:'#ff8e72'}}
                                    type="Submit"
                                    
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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