import { combineReducers } from "redux";
import productReducers from "./productReducers";
import imageReducers from "./imageReducers";

export default combineReducers({
    productReducers,
    imageReducers
})