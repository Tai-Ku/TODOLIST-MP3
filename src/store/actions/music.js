import * as api from "../../api";
import actionTypes from "./actionType";

export const setCurSongId = (sid) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  sid,
});
export const play = (flag) => ({
  type: actionTypes.PLAY,
  flag,
});
export const playAlbum = (flag) => ({
  type: actionTypes.SET_ALBUM,
  flag,
});
export const setPlaylist = (songs) => ({
  type: actionTypes.PLAY_LIST,
  songs,
});
export const setCurSongData = (data) => ({
  type: actionTypes.SET_CUR_SONG_DATA,
  data,
});
export const SetPidPlayList = (pid) => ({
  type: actionTypes.SET_PID_PLAYLIST,
  pid,
});
export const SetRecentSongs = (data) => ({
  type: actionTypes.SET_RECENT_SONGS,
  data,
});

export const search = (keyword) => async (dispatch) => {
  try {
    const response = await api.apiSearch(keyword);
    if (response.data.err === 0) {
      dispatch({
        type: actionTypes.SEARCH,
        data: response.data.data,
        keyword: keyword,
      });
    } else {
      dispatch({
        type: actionTypes.SEARCH,
        data: null,
        keyword: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SEARCH,
      data: null,
      keyword: null,
    });
  }
};
export const artistData = (name) => async (dispatch) => {
  try {
    const response = await api.apiArtist(name);
    if (response.data.err === 0) {
      dispatch({
        type: actionTypes.ARTIST,
        data: response.data.data,
      });
    } else {
      dispatch({ type: actionTypes.ARTIST, data: null });
    }
  } catch (error) {
    dispatch({ type: actionTypes.ARTIST, data: null });
  }
};
// export const artistSong = (id, page, count) => async (dispatch) => {
//   try {
//     const response = await api.apiArtistSong(id, page, count);
//     if (response.err === 0) {
//       dispatch({
//         type: actionTypes.ARTIST_SONG,
//         data: response.data,
//       });
//     } else {
//       dispatch({
//         type: actionTypes.ARTIST_SONG,
//         data: null,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: actionTypes.ARTIST_SONG,
//       data: null,
//     });
// //   }
// };
