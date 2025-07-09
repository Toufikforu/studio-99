import "./App.css";
import Slider from "./slider";
// import PopularMovie from "./components/PopularMovie";
import Events from "./components/events";
import SundayMorningJump from "./components/SundayMorningJump";
import MusicArea from "./components/MusicArea";
import BigSlider from "./components/BigSlider";
import SocialPrespectives from "./components/SocialPrespectives";
import Artist from "./components/Artist";
import ReformRestoration from "./components/ReformRestoration";
import HealingTherapy from "./components/HealingTherapy";
import InternationalLove from "./components/InternationalLove";

function App() {
  return (
    <>
      <Slider />

      {/* Background Section with Centered Buttons */}
      <section className="bg-dark-studio text-left py-5 d-flex justify-content-end">
        <button className="btn btn-light mx-4 px-5 py-3 active">
          WATCH SNIPPETS
        </button>
        <button className="btn btn-dark-tou mx-4 px-5 py-3">
          STREAM ON APP
        </button>
      </section>

      {/* <PopularMovie /> */}
      <SocialPrespectives />
      <Events />
      <SundayMorningJump />
      <Artist />
      <MusicArea />
      <ReformRestoration />
      <BigSlider />
      <HealingTherapy />
      <InternationalLove />
    </>
  );
}

export default App;
