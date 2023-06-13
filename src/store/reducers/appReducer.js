import actionTypes from "../actions/actionType";

const initialState = {
  banner: [],
  friday: {},
  newEveryDay: {},
  top100: {},
  album: {},
  newRelease: {},
  weekChart: [],
  hArtistTheme: {},
  chart: {},
  rank: [],
  alumHot: null,
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
        newEveryDay:
          action.homeData?.find((item) => item.sectionId === "hEditorTheme2") ||
          {},
        top100:
          action.homeData?.find((item) => item.sectionId === "h100") || {},
        album:
          action.homeData?.find((item) => item.sectionId === "hAlbum") || {},
        newRelease:
          action.homeData?.find((item) => item.sectionType === "new-release") ||
          {},
        weekChart:
          action.homeData?.find((item) => item.sectionType === "weekChart")
            ?.items || [],
        hArtistTheme:
          action.homeData?.find((item) => item.sectionId === "hArtistTheme") ||
          {},
        chart:
          action.homeData?.find((item) => item.sectionId === "hZC")?.chart ||
          {},
        rank:
          action.homeData?.find((item) => item.sectionId === "hZC")?.items ||
          [],
        alumHot:
          
          action.homeData?.find((item) => item.sectionId === "hNewrelease")
            ?.items || [],
      };
      
    default:
      return state;
  }
};
export default appReducer;
