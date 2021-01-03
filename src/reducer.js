export const initialization = {
  posts: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "SET_POST":
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
};

export default reducer;
