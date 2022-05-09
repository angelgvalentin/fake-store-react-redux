import { ActionTypes } from "../constants/action-types";

const initaialState = {
    products: [],
};

export const productReducer = (state = initaialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
};

export const selectedProductreducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};

        default:
            return state;
    }
};
