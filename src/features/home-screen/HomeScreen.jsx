import LogoScrollContainer from "./LogoScrollContainer";
import HomeScreenIntro from "./HomeScreenIntro";
import HomeScreenOutro from "./HomeScreenOutro";
import HomeScreenShots from "./HomeScreenShots";

const HomeScreen = () => {
  return (
    <>
      <HomeScreenIntro />
      <HomeScreenShots />
      <LogoScrollContainer />
      <HomeScreenOutro />
    </>
  );
};

export default HomeScreen;
