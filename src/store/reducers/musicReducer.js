import actionTypes from "../actions/actionType";

const initialState = {
  curSongId: null,
  curSongData: null,
  isPlaying: false,
  atAlbum: false,
  songs: null,
  pid: null,
};
const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.sid || null,
      };

    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };
    case actionTypes.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag,
      };
    case actionTypes.PLAY_LIST:
      return {
        ...state,
        songs: action.songs || null,
      };
    case actionTypes.SET_CUR_SONG_DATA:
      return {
        ...state,
        curSongData: action.data || null,
      };
    case actionTypes.SET_PID_PLAYLIST:
      return {
        ...state,
        pid: action.pid || null,
      };

    default:
      return state;
  }
};
export default musicReducer;
