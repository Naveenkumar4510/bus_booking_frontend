import { bus_detail } from './action/bus';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { busreducer } from './reducer/bus';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
const reducer=combineReducers(
    {
bus_detail:busreducer
    }

)
const initialstate = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);



export default store;
