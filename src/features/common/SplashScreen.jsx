import { Link } from "react-router-dom";
import screenShot from "../../assets/screenshot.png";

const SplashScreen = () => {
  return (
    <div
      className={`px-4 flex flex-col justify-center items-center gap-5 bg-[url('${screenShot}')]`}
    >
      <h1 className="text-3xl sm:text-4xl text-black font-bold text-balance text-center">
        Get organised and manage your tasks the Sort My Day way.
      </h1>
      <p className="text-xl text-balance text-center">
        Simple, versatile todo list software to help you control your endless task lists.
      </p>
      <Link
        to={"/register"}
        className="bg-orange-500 px-2 py-1 text-m sm:text-xl font-semibold rounded-md text-slate-50 text-center"
      >
        Start Getting Organised Now!
      </Link>
      <p className="text-sm">Create a free account to get started.</p>
      <div className="md:w-2/3 max-w-96 blur-0 shadow-lg p-4 bg-slate-100">
        <img className="border-solid border-2 border-slate-200" src={screenShot} />
      </div>
    </div>
  );
};

export default SplashScreen;
