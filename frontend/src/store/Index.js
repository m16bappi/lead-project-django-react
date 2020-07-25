import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducers from "./Reducers/RootReducer";
import  thunk  from 'redux-thunk'

const middleware = [thunk]

const initialState = {}

const store = createStore(Reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store