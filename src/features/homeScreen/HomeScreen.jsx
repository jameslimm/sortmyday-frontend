import LogoScrollContainer from "./LogoScrollContainer";
import HomeScreenIntro from "./HomeScreenIntro";
import HomeScreenOutro from "./HomeScreenOutro";
import HomeScreenShots from "./HomeScreenShots";
import HomeScreenFullScreenShot from "./HomeScreenFullScreenShot";

const HomeScreen = () => {
  return (
    <>
      <HomeScreenIntro />
      <HomeScreenFullScreenShot />
      <LogoScrollContainer />
      <HomeScreenShots />

      <HomeScreenOutro />
    </>
  );
};

export default HomeScreen;
