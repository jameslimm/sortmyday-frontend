import ScreenShotImageCaption from "./ScreenShotImageCaption";
import screenListLight from "../../assets/screen-list-light.png";
import screenTagsDark from "../../assets/screen-tags-dark.png";
import screenDarkMode from "../../assets/screen-dark-mode.png";
import screenMenuDark from "../../assets/screen-menu-dark.png";

const HomeScreenShots = () => {
  return (
    <div
      className={`bg-cover relative bg-[image:var(--backdrop-640)] sm:bg-[image:var(--backdrop-1280)] shadow-lg w-full my-16 px-2 py-5 border-solid border-t-2 border-slate-400
    `}
    >
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit text-nowrap text-center text-xl backdrop-blur-sm px-5 py-1 font-thin rounded-lg border-solid border-2 bg-orange-300/40 border-orange-300">
        Scroll down to learn more....
      </div>

      <ScreenShotImageCaption
        imageSrc={screenListLight}
        caption={
          "Quickly add tasks to your list, assign tags to keep things tidy, then check them off when you're done!"
        }
        captionColor={"bg-sky-200"}
        position={"right"}
      />
      <ScreenShotImageCaption
        imageSrc={screenTagsDark}
        caption={
          "File your tasks under tags!  Add tags as needed, choose custom colors and order them however you like."
        }
        captionColor={"bg-green-200"}
        position={"left"}
      />
      <ScreenShotImageCaption
        imageSrc={screenDarkMode}
        caption={"Give your eyes a rest with dark mode!"}
        captionColor={"bg-orange-200"}
        position={"right"}
      />
      <ScreenShotImageCaption
        imageSrc={screenMenuDark}
        caption={"Quickly create a user account to securely store your task list on the cloud."}
        captionColor={"bg-yellow-200"}
        position={"left"}
      />
      <div className="absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-fit text-nowrap text-center text-sm backdrop-blur-sm px-5 py-1 font-thin rounded-lg border-solid border-2 bg-blue-300/40 border-blue-300">
        Photo by{" "}
        <a href="https://unsplash.com/@jipy32?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Jean-Philippe Delberghe
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/a-close-up-of-a-white-wall-with-wavy-lines-75xPHEQBmvA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default HomeScreenShots;
