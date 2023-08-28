const initialState = {
    searchFlag: false
}

export function searchFlagReducer(state = initialState, action){

    if(action.type === "search"){
        return {
            searchFlag: true,
        }
    }
    if(action.type === "article"){
        return{
            searchFlag: false,
        }
    }
    return state;

      
}

