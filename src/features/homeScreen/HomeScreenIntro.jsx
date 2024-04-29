import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../user/userSlice";

const HomeScreenIntro = () => {
  const [loginUser] = useLoginUserMutation();

  return (
    <div className={`px-4 flex flex-col justify-center items-center gap-4`}>
      <h1 className="text-3xl sm:text-4xl text-black font-bold text-balance text-center mt-8">
        Get organised and manage your tasks the Sort My Day way.
      </h1>
      <p className="text-xl text-balance text-center">Simple, flexible todo list software.</p>
      <Link
        role="button"
        aria-label="Sign up for an account"
        to={"/register"}
        className="bg-orange-500 px-4 py-2 text-m sm:text-xl font-semibold rounded-md text-slate-50 text-center hover:scale-105 hover:bg-orange-400 active:scale-95 transition-all ease-in-out"
      >
        Start Getting Organised Now!
      </Link>
      <p className="text-m mt-2 text-balance text-center">
        Create a free account to get started, or{" "}
        <button
          className="underline"
          onClick={() => loginUser({ username: "guest", password: "guest" })}
        >
          log in instantly
        </button>{" "}
        as a guest.
      </p>
    </div>
  );
};

export default HomeScreenIntro;
