import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="font-medium text-2xl bg-slate-600 w-fit shadow-m text-slate-50 px-4 py-1 rounded-ee-xl">
      <Link to="/">
        SortMyDay<span className="text-sm font-thin">.co.uk</span>
      </Link>
    </h1>
  );
};

export default Logo;
