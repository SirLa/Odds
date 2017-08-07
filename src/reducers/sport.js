let initialState = {
    sportData: []
}

const sports = (state=initialState, action) => {
    switch(action.type) {

        case "GET_SPORTS": {
            return{
                ...state,
                sportData: action.sportData
            }
        }
        default: {
            return state;
        }
    }
}
export default sports;