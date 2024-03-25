import { Link } from "react-router-dom";

const LoginLink = () => {
  return (
    <Link
      to={"/login"}
      className="bg-slate-500 px-2 py-1 text-m font-semibold rounded-md text-slate-50 mr-2"
    >
      Login
    </Link>
  );
};

export default LoginLink;
