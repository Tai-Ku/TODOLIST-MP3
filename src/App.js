import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Public, Login, Personal, Album } from "./pages/public";
import path from "./untils/path";
import * as action from "./store/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getHome());
    dispatch(action.play(false));
  }, []);
  return (
    <>
      <div>
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.Login} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />
            <Route path={path.ALBUM__TITLE_PID} element={<Album />} />
            <Route path={path.PLAYLIST__TITLE_PID} element={<Album />} />
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
