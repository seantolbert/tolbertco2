import Clock from "../components/Clock";
import { useWindow } from "../hooks/useWindow";

const Home = () => {
  const windowWidth = useWindow();

  return (
    <div className="h-screen flex items-center" id="home">
      <div className="w-full lg:w-2/3">
        <p className="p-16 text-6xl">Hey, I'm Sean</p>
        <p className="text-2xl pl-16">
          I am a web developer based in Washington DC with a passion for clean
          efficient code and SEO-friendly websites
        </p>
      </div>
      {windowWidth > 720 && <Clock />}
    </div>
  );
};
export default Home;
