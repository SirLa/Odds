let initialState = {
    data: [],
    index: null
}

const sports = (state=initialState, action) => {
    switch(action.type) {

        case "GET_DATA": {
            return{
                ...state,
                data: action.data
            }
        }
        case "HANDLE_CLICK": {
            return{
                ...state,
                index: action.index
            }
        }
        default: {
            return state;
        }
    }
}
export default sports;