import React from 'react'

 const FilterProduct = () => {
  return (
    
    <details open className="DetailsFilter">
  <summary
    className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
  >
    <span className="text-sm font-medium"> Filtrar </span>

    <svg
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </summary>

  <form action="" className="border-t border-gray-200 lg:border-t-0">
    <fieldset>
      <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
        Relevancia
      </legend>

      <div className="px-5 py-6 space-y-2">
        <div className="flex items-center">
          <input
            id="Mas vendidas"
            type="checkbox"
            name="type[toy]"
            className="w-5 h-5 border-gray-300 rounded"
          />

          <label className="ml-3 text-sm font-medium"> Mas vendidas </label>
        </div>

        <div className="flex items-center">
          <input
            id="Nuevas"
            type="checkbox"
            name="type[game]"
            className="w-5 h-5 border-gray-300 rounded"
          />

          <label className="ml-3 text-sm font-medium"> ¡Nuevas! </label>
        </div>

        <div className="flex items-center">
          <input
            id="outdoor"
            type="checkbox"
            name="type[outdoor]"
            className="w-5 h-5 border-gray-300 rounded"
          />

          <label className="ml-3 text-sm font-medium">
            Outdoor
          </label>
        </div>
      </div>
    </fieldset>

    <div>
      <fieldset>
        <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
          Categorías
        </legend>

        <div className="px-5 py-6 space-y-2">
          <div className="flex items-center">
            <input
              id="3+"
              type="checkbox"
              name="age[3+]"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label className="ml-3 text-sm font-medium"> Aventuras </label>
          </div>

          <div className="flex items-center">
            <input
              id="8+"
              type="checkbox"
              name="age[8+]"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label className="ml-3 text-sm font-medium"> Estadías </label>
          </div>

          <div className="flex items-center">
            <input
              id="12+"
              type="checkbox"
              name="age[12+]"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label className="ml-3 text-sm font-medium"> Entretenimiento </label>
          </div>

          <div className="flex items-center">
            <input
              id="16+"
              type="checkbox"
              name="age[16+]"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <label  className="ml-3 text-sm font-medium"> Gastronomía </label>
          </div>

          <div className="pt-2">
            
          </div>
        </div>
      </fieldset>
    </div>

    <div className="flex justify-between px-5 py-3 border-t border-gray-200">
      <button
        name="reset"
        type="button"
        className="text-xs font-medium text-[#ff8e72] underline rounded"
      >
        Limpiar todo
      </button>

      <button
        name="commit"
        type="button"
        className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
      >
        Aplicar Filtros
      </button>
    </div>
  </form>
</details>
  )
}
export default FilterProduct