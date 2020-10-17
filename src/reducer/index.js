import initialState from "../initialState";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
