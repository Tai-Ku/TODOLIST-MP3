import { Section, Slider } from "../../components";
import { useSelector } from "react-redux";

function Home() {
  const { friday, newEveryDay, top100, album } = useSelector(
    (state) => state.app
  );
  console.log(album);
  return (
    <>
      <div className="overflow-y-auto h-full">
        <Slider />
        <Section data={friday} />
        <Section data={newEveryDay} />
        <Section data={top100} />
        <Section data={album} />
        <div className="h-[100px]"></div>
      </div>
    </>
  );
}

export default Home;
