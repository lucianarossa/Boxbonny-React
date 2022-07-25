const initialState = {
    productos: [],
    one: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRO':
            return {
                ...state,
                productos: action.payload
            }
        case 'GET_ONE':
            return {
                ...state,
                one: action.payload
            }
        default:
            return state
    }
}
export default productReducer