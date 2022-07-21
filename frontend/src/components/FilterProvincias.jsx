import React from 'react'
import "../styles/packDetails.css"



const FilterProvincias = () => {

  const provincias = ["Buenos Aires", "Cordoba", "Mendoza"]

  return (
    <>
      <div >
        <form>
          <label className='filter-title'>ELEGI DONDE DISFRUTAR TU EXPERIENCIA</label>
          <select className='select-filter'>
            {provincias.map(p =>
              <option>{p}</option>
            )}
          </select>
        </form>

      </div>
    </>


  )
}
export default FilterProvincias