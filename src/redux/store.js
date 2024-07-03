
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { busreducer,bus_add_reducer } from './reducer/bus';

const reducer=combineReducers(
    {
      bus_details:busreducer,
      bus_add_state:bus_add_reducer
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
