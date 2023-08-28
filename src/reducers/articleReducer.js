
const initialState = {
    articles: [],
}

export function articleReducer(state = initialState, action){

    if(action.type === "add"){
        return {
            articles: action.payload
        }
    }
    return state;

      
}

