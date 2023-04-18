import actionTypes from "../actions/actionType";

const initialState = {
  homeData: [],
  test: "123",
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return state;

    default:
      return state;
  }
};
export default appReducer;
