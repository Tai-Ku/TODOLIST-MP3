import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Home,
  Public,
  Login,
  Personal,
  Album,
  WeekRank,
  ZingChart,
  Follow,
  Singer,
  Search,
  SearchSong,
  SearchPlaylist,
  SearchAll,
} from "./pages/public";
import path from "./untils/path";
import * as action from "./store/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { isPlaying, curSongId } = useSelector((state) => state.music);
  useEffect(() => {
    dispatch(action.getHome());
    dispatch(action.play(false));

    if (curSongId) {
      dispatch(action.play(!isPlaying));
    } else {
      return;
    }
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.Login} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.Follow} element={<Follow />} />
            <Route path={path.ALBUM__TITLE_PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE_PID} element={<Album />} />
            <Route path={path.WEEKRANK__TITLE__PID} element={<WeekRank />} />
            <Route path={path.ZING__CHART} element={<ZingChart />} />
            <Route path={path.SEARCH} element={<Search />}>
              <Route path={path.ALL} element={<SearchAll />} />
              <Route path={path.SONG} element={<SearchSong />} />
              <Route path={path.PLAYLIST} element={<SearchPlaylist />} />
            </Route>
            <Route path={path.SINGER} element={<Singer />} />
            <Route path={path.SINGEROA} element={<Singer />} />

            <Route path={path.STAR} element={<Home />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
