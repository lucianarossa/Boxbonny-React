const initialState = {
    packs: [],
    getOnePack: {},
}

const packsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GETPACKS":
            return {
                ...state,
                packs: action.payload
            }
        case "GETONEPACK":
            return {
                ...state,
                getOnePack: action.payload
            }
        default:
            return state
    }
}

export default packsReducer