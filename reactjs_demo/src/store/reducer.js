const reducer = (state,action) => {
    switch(action.type) {
        case "UPDATE_CART": return {
            ...state,
            cart:action.payload,
            isLoading:true
        };
        case "HIDE_LOADING": return {
            ...state,
            isLoading: false
        }
        default: return state;
    }
}
export default reducer;