import { Link } from "react-router-dom";
import LogoScroll from "./LogoScroll";
import ScreenShotImageCaption from "./ScreenShotImageCaption";

import screenListLight from "../../assets/screen-list-light.png";
import screenTagsDark from "../../assets/screen-tags-dark.png";
import screenDarkMode from "../../assets/screen-dark-mode.png";
import screenMenuDark from "../../assets/screen-menu-dark.png";

import backDrop from "../../assets/backdrop.jpg";

import logo1 from "../../assets/logos/logoipsum-283.svg";
import logo2 from "../../assets/logos/logoipsum-285.svg";
import logo3 from "../../assets/logos/logoipsum-297.svg";
import logo4 from "../../assets/logos/logoipsum-321.svg";
import logo5 from "../../assets/logos/logoipsum-331.svg";
import logo6 from "../../assets/logos/logoipsum-212.svg";
import logo7 from "../../assets/logos/logoipsum-284.svg";

const HomeScreen = () => {
  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <>
      <div className={`px-4 flex flex-col justify-center items-center gap-5`}>
        <h1 className="text-3xl sm:text-4xl text-black font-bold text-balance text-center mt-16">
          Get organised and manage your tasks the Sort My Day way.
        </h1>
        <p className="text-xl text-balance text-center">Simple, flexible todo list software.</p>
        <Link
          to={"/register"}
          className="bg-orange-500 px-4 py-2 text-m sm:text-xl font-semibold rounded-md text-slate-50 text-center"
        >
          Start Getting Organised Now!
        </Link>
        <p className="text-m">Create a free account to get started.</p>
      </div>

      <div
        className={`bg-[url('/src/assets/backdrop.jpg')] bg-cover relative shadow-lg w-full my-16 px-2 py-5 border-solid border-t-2 border-slate-400
    `}
      >
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

      <div className="my-8">
        <p className="text-center font-thin text-m text-balance my-2">
          Over 5 people and some teams trust SortMyDay to help manage their tasks
        </p>
        <LogoScroll images={logoImages} />
      </div>

      <div className="pt-5 pb-20 gap-5 flex flex-col items-center bg-gradient-to-b from-blue-50 to-white">
        <p className="text-xl font-thing">Simple and free online task manager.</p>
        <Link
          to={"/register"}
          className="bg-orange-500 px-4 py-2 text-m sm:text-xl font-semibold rounded-md text-slate-50 text-center"
        >
          Sign up now for free to get started.
        </Link>
      </div>
    </>
  );
};

export default HomeScreen;
