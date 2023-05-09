import { Section, Slider, NewRelease } from "../../components";
import { useSelector } from "react-redux";

function Home() {
  const { friday, newEveryDay, top100, album, newRelease } = useSelector(
    (state) => state.app
  );
  return (
    <>
      <div className="overflow-y-auto h-full">
        <Slider />
        <Section data={friday} />
        <Section data={newEveryDay} />
        <NewRelease />
        <Section data={top100} />
        <Section data={album} />
        <div className="h-[100px]"></div>
      </div>
    </>
  );
}

export default Home;
