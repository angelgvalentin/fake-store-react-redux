import { ActionTypes } from "../constants/action-types";

export const SET_PRODUCTS = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const SELECTED_PRODUCTS = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    };
};
