import { Link } from "react-router-dom";

const HomeScreenIntro = () => {
  return (
    <div className={`px-4 flex flex-col justify-center items-center gap-3`}>
      <h1 className="text-3xl sm:text-4xl text-black font-bold text-balance text-center mt-16">
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
      <p className="text-m">Create a free account to get started.</p>
      <div className="p-4 bg-red-200 mt-4 font-semibold text-balance text-center">
        To demo SortMyDay without creating an account, please{" "}
        <Link to={"/login"} className="underline">
          log in
        </Link>{" "}
        with username 'guest' and password 'guest'.
      </div>
    </div>
  );
};

export default HomeScreenIntro;
