import { GET_USERS, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, INCREASE_ITEM_AMOUNT_IN_CART, DECREASE_ITEM_AMOUNT_IN_CART } from "../actions/actionTypes";

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){
    let item_index = state.users.findIndex((users) => users.id === action.itemId);
    switch(action.type){
        case GET_USERS:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        case ADD_ITEM_TO_CART:
        return { ...state, users: [...state.users, action.payload] };
        case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        users: [...state.users.slice(0, item_index), ...state.users.slice(item_index + 1)],
      };

    case INCREASE_ITEM_AMOUNT_IN_CART:
      return {
        ...state,
        users: [
          ...state.users.slice(0, item_index),
          {
            ...state.users[item_index],
            amount: state.users[item_index].amount + 1,
          },
          ...state.users.slice(item_index + 1),
        ],
      };

    case DECREASE_ITEM_AMOUNT_IN_CART:
      return {
        ...state,
        users: [
          ...state.users.slice(0, item_index),
          {
            ...state.users[item_index],
            amount: state.users[item_index].amount - 1,
          },
          ...state.users.slice(item_index + 1),
        ],
      };
        default: return state
    }

}