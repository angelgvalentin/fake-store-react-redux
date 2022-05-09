import { ActionTypes } from "../constants/action-types";

const initaialState = {
    products: [
        {
            id: 1,
            title: "Dipesh",
            category: "programmer",
        },
    ],
};

export const productReducer = (state = initaialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
            break;

        default:
            return state;

            break;
    }
};
