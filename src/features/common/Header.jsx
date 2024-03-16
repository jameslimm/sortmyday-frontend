import { Link } from "react-router-dom";
import { useGetUserQuery } from "../api/apiSlice";
import UserMenu from "../user/UserMenu";

const Header = () => {
  const { data: user } = useGetUserQuery();

  return (
    <header className="flex justify-between">
      <h1 className="font-medium text-2xl bg-slate-600 w-fit shadow-m text-slate-50 px-4 py-1 rounded-ee-xl">
        <Link to="/">
          SortMyDay<span className="text-sm font-thin">.co.uk</span>
        </Link>
      </h1>
      <div>
        {user && <UserMenu />}
        {!user && <Link to={"/login"}>Login</Link>}
      </div>
    </header>
  );
};

export default Header;
