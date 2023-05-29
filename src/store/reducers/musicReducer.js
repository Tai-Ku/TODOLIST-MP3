import actionTypes from "../actions/actionType";

const initialState = {
  curSongId: null,
  curSongData: null,
  isPlaying: false,
  atAlbum: false,
  songs: null,
  pid: null,
  recentSongs: [],
  searchData: {},
  artistData: {},
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
    case actionTypes.SEARCH:
      return {
        ...state,
        searchData: action.data || {},
      };
    case actionTypes.ARTIST:
      console.log(action.artistData);

      return {
        ...state,
        artistData: action.data || null,
      };
    case actionTypes.SET_RECENT_SONGS:
      let songs = state.recentSongs;
      if (action.data) {
        if (state.recentSongs.some((song) => song.sid === action.data.sid)) {
          songs = songs.filter((song) => song.sid !== action.data.sid);
        }
        if (songs.length > 19) {
          songs = songs.filter((i, index, arr) => index !== arr.length - 1);
        }
        songs = [action.data, ...songs];
      }
      return {
        ...state,
        recentSongs: songs,
      };

    default:
      return state;
  }
};
export default musicReducer;
