import actionTypes from "../actions/actionType";

const initialState = {
  banner: [],
  friday: {},
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banner:
          action.homeData?.find((item) => item.sectionId === "hSlider").items ||
          null,
        friday:
          action.homeData?.find((item) => item.sectionId === "hEditorTheme") ||
          {},
      };

    default:
      return state;
  }
};
export default appReducer;
