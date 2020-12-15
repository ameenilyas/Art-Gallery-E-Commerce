export const initialState = {
  images: [],
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket.reduce((total, item) => item.price + total, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_PHOTOS":
      return {
        ...state,
        images: action.data,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      let index = newBasket.findIndex((item) => item.id === action.id);
      newBasket.splice(index, 1);
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
