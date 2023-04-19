import { Header } from "../../components";
import { useEffect } from "react";

import * as api from "../../api";

function Home() {
  useEffect(() => {
    const fetchDataHome = async () => {
      const response = await api.getHome();
      console.log(response);
    };
    fetchDataHome();
  }, []);

  return (
    <div className="overflow-y-auto ">
      <div className="h-[70px]  flex items-center px-[59px]">
        <Header />
      </div>
    </div>
  );
}

export default Home;
