//inside the index.js file we are going to combine all our reducers

import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
});

export default reducers;
