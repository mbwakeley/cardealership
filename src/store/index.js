import { createStore, combineReducers, applyMiddleware } from "redux";
import carsReducers from "./car/reducer";
import locationsReducer from "./location/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  cars: carsReducers,
  locations: locationsReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
