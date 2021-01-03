export const initialization = {
  posts: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    default:
      return state;
  }
};

export default reducer;
