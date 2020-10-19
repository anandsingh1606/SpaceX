const initState = {
    list:["adsfasdf", "asdfasdfasd" , "asdfasdfasdf"],
};

const SpaceXReducer = (state = initState, action) => {
    
    if(action.type === "FETCH_LAUNCES_SUCCESS"){
        return {...state, list: action.data};
    }
    return state;
};

export default SpaceXReducer;
