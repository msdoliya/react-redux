import { applyMiddleware, combineReducers, createStore } from "redux";
import {reducers, todoreducer} from "./Reducer";
import thunk from "redux-thunk";
 

const reducer = combineReducers({
    amount : reducers,
    todo : todoreducer
})


const middleware = [thunk]

  export const store = createStore(reducer, applyMiddleware(...middleware) )