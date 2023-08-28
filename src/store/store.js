import { createStore, combineReducers } from "redux";
import {articleReducer } from '../reducers/articleReducer';
import {searchFlagReducer} from '../reducers/searchFlagReducer'

const reducer = combineReducers({
    articles: articleReducer,
    searchFlag: searchFlagReducer

})
const store = createStore(reducer);

export default store;
