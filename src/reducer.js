export const initialState = {
  term: null,
  //   boy: "King Ameen",
};

export const actionTypes = {
  SET_ACTION_TYPE: "SET_ACTION_TYPE",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.SET_ACTION_TYPE:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};

export default reducer;
