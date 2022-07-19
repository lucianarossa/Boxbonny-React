const initialState = {
    packs: [],
    getOnePack: {},
}

const itinerariesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GETPACKS":
            return {
                ...state,
                packs: action.payload
            }
        case "GETONEPACK":
            return {
                ...state,
                getOneItinerary: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer