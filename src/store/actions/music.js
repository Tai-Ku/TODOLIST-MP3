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

// export const fetchDetailPlaylist = (pid) => async (dispatch) => {
//   try {
//     const response = await api.apiGetDetailPlaylist(pid);
//     if (response.data.err === 0) {
//       dispatch({
//         type: actionTypes.PLAY_LIST,
//         songs: response.data?.song?.items,
//       });
//     }
//   } catch (error) {
//     dispatch({ type: actionTypes.PLAY_LIST, songs: null });
//   }
// };
