import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import { Home, Public, Login } from "./pages/public";
import path from "./untils/path";

function App() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center border h-screen items-center">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.Login} element={<Login />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
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
