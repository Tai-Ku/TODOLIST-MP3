import { Outlet } from "react-router-dom";
function Public() {
  return (
    <div>
      public
      <Outlet />
    </div>
  );
}

export default Public;
