// this is a root reducer
// to make a root reducer:
// !.get a method from redux called "combineReducers"
import { combineReducers } from 'redux';

// get each indiviual reducer
// the store is managed by (root reducers)
// the manager needs indiviual departments from the reducers
import frozenReducer from "./frozenReducer";
import dairyReducer from "./dairyReducers";
import meatReducer from "./meatReducer.js";

// call combineReducers and hand it an object to comine
// 
// 
const rootReducer = combineReducers({
    frozen: frozenReducer,
    dairy: dairyReducer,
    meat: meatReducer
})

export default rootReducer;