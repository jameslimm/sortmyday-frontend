import { Link } from "react-router-dom";

const HomeScreenOutro = () => {
  return (
    <div className="pt-5 pb-20 gap-5 flex flex-col items-center bg-gradient-to-b from-blue-50 to-white">
      <p className="text-xl font-thing">Simple and free online task manager.</p>
      <Link
        role="button"
        aria-label="Sign up for an account"
        to={"/register"}
        className="bg-orange-500 px-4 py-2 text-m sm:text-xl font-semibold rounded-md text-slate-50 text-center hover:scale-105 hover:bg-orange-400 active:scale-95 transition-all ease-in-out"
      >
        Sign up now to get started
      </Link>
    </div>
  );
};

export default HomeScreenOutro;
