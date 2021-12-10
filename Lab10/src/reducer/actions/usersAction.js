import { GET_USERS, USERS_ERROR, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, INCREASE_ITEM_AMOUNT_IN_CART, DECREASE_ITEM_AMOUNT_IN_CART } from "./actionTypes";

import axios from "axios";

export const getUsers = (id) => async dispatch => {
  try {
    const res = await axios.get('/api/get/' + id);

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};

export const addItemToCart = (id) => async dispatch => {
    try {
      const res = await axios.get('/api/get/' + id);
  
      dispatch({
        type: ADD_ITEM_TO_CART,
        payload: res.data
      });
    } catch (e) {
      dispatch({
        type: USERS_ERROR,
        payload: console.log(e)
      });
    }
  };

  export const removeItemFromCart = (itemId) => {
    return {
      type: REMOVE_ITEM_FROM_CART,
      itemId: itemId,
    };
  };
  
  export const increaseItemAmount = (itemId) => {
    return {
      type: INCREASE_ITEM_AMOUNT_IN_CART,
      itemId: itemId,
    };
  };
  
  export const decreaseItemAmount = (itemId) => {
    return {
      type: DECREASE_ITEM_AMOUNT_IN_CART,
      itemId: itemId,
    };
  };