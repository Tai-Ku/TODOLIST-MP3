import actionTypes from "./actionType";
import * as api from "../../api";

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
