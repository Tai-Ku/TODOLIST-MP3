import { Header, Slider } from "../../components";
import { useEffect } from "react";
import { getHome } from "../../store/actions/home";

function Home() {
  return (
    <>
      <div className="overflow-y-auto  ">
        <div className="h-[70px]  flex items-center px-[59px]">
          <Header />
        </div>
        <Slider />
      </div>
    </>
  );
}

export default Home;
