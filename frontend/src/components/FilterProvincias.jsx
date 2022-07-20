import React from 'react'



 const FilterProvincias = () => {

const provincias = ["Buenos Aires", "Cordoba", "Mendoza"]

  return (
    <>
<div >
  <form>
 <label>Seleccioná una provincia:</label>
  <select>
  {provincias.map(p=>
    <option>{p}</option>
    )}
  </select>
</form>

</div>
</>


  )
}
export default FilterProvincias