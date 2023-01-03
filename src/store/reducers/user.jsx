import {
    UPDATE_USER,
    SET_USER_DATA,
} from "../types";

const initialState = {
    username: "",
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    id: 0,
    loading: true,
   
    product: "",
    category: "",
    description: "",
    price: {
        low: 0,
        high: 0
    },
    date: "",
    amount: 0,
    address: "",
    state: "",
    
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                loading: false,
            };
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
