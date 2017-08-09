let initialState = {
    data: [],
    index: null,
    open: false
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
                index: action.index,
                open: action.open
            }
        }
        default: {
            return state;
        }
    }
}
export default sports;