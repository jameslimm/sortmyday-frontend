import { Link } from "react-router-dom";
import { useGetUserQuery } from "../api/apiSlice";
import UserMenu from "../user/UserMenu";

const Header = () => {
  const { data: user } = useGetUserQuery();

  return (
    <header className="flex justify-between items-center mx-auto bg-blue-50 md:w-1/2 h-10 relative">
      <h1 className="font-medium text-2xl bg-slate-600 w-fit shadow-m text-slate-50 px-4 py-1 rounded-ee-xl">
        <Link to="/">
          SortMyDay<span className="text-sm font-thin">.co.uk</span>
        </Link>
      </h1>
      <div>
        {user && <UserMenu />}
        {!user && (
          <Link
            to={"/login"}
            className="bg-slate-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50 mr-2"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
