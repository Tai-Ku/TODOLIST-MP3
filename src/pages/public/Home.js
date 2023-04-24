import { Header, Slider } from "../../components";

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
