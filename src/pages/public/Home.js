import { Link } from "react-router-dom";
import { Section, Slider, NewRelease } from "../../components";
import { useSelector } from "react-redux";

function Home() {
  const { friday, newEveryDay, top100, album, hArtistTheme, weekChart } =
    useSelector((state) => state.app);
  return (
    <>
      <div className="overflow-y-auto h-full">
        <Slider />
        <Section data={friday} />
        <Section data={newEveryDay} />
        <NewRelease />
        <Section data={top100} />
        <Section data={album} />
        <Section data={hArtistTheme} />
        <div className="flex items-center px-[59px] gap-7 mt-12 ">
          {weekChart.map((item) => (
            <Link key={item?.encodeId} to={item?.link?.split(".")[0]}>
              <img
                className="object-cover rounded-md"
                src={item?.cover}
                alt="cover"
              />
            </Link>
          ))}
        </div>
        <div className="h-[100px]"></div>
      </div>
    </>
  );
}

export default Home;
