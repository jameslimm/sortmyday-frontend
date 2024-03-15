import { Link } from "react-router-dom";
import { useGetUserQuery } from "../api/apiSlice";

const Header = () => {
  const { data: user } = useGetUserQuery();
  const { username } = user?.user || {};

  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-2xl bg-slate-600 w-fit shadow-m text-slate-50 px-4 py-1 rounded-ee-xl">
        <Link to="/">
          SortMyDay<span className="text-sm font-thin">.co.uk</span>
        </Link>
      </h1>
      <div>
        {user && username && (
          <>
            <div className="flex items-center justify-center bg-orange-400 min-w-10 min-h-10 rounded-full mx-4 mt-2 shadow-orange-100 border-solid border-orange-500 border-2">
              <span className="text-2xl font-mono text-white">
                {username.substring(0, 1).toUpperCase()}
              </span>
            </div>
            <Link to={"/logout"}>Logout</Link>
          </>
        )}
        {!user && <Link to={"/login"}>Login</Link>}
      </div>
    </header>
  );
};

export default Header;
