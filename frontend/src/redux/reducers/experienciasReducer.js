const initialState = {
    experiencias: [],
    auxiliar: [],
    getOneExperiencia: {},
    filter: []

}

const experienciasReducer = (state = initialState, action) => {

    switch (action.type) {  // establece la condicion para cada case
        case "GETEXPERIENCIAS":
            return {
                ...state,
                experiencias: action.payload,
                auxiliar: action.payload,
                filter: action.payload // cargo todas las ciudades en filter    

            }

        case "GETONEEXPERIENCIA":
            return {
                ...state,
                getOneExperiencia: action.payload
            }

        case "FILTEREXPERIENCIAS":
            let cityFilter = state.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return {
                ...state,
                filter: experienciaFilter
            }

        default:
            return state
    }
}

export default experienciasReducer