import { Link } from "react-router-dom";
import { useGetUserQuery } from "../api/apiSlice";
import DarkModeToggle from "./DarkModeToggle";
import SettingsButton from "./SettingsButton";
import EditTagsButton from "./EditTagsButton";

const UserModalIndex = ({ setUserModalPage }) => {
  const { data: user } = useGetUserQuery();
  const { username } = user?.user || {};

  return (
    <>
      <div className="flex items-center justify-center cursor-pointer bg-orange-400 min-w-20 min-h-20 rounded-full mx-4 mt-2 shadow-orange-100 border-solid border-orange-500 border-2">
        <span className="text-5xl font-mono text-white">
          {username.substring(0, 1).toUpperCase()}
        </span>
      </div>

      <div className="flex justify-between gap-8">
        <DarkModeToggle />
        {/* <SettingsButton /> */}
        <EditTagsButton setUserModalPage={setUserModalPage} />
      </div>
      <Link
        to={"/logout"}
        className="bg-slate-500 text-center px-4 py-1 text-slate-200 text-xl mt-4 self-stretch border-solid border-slate-200 border-2 font-semibold rounded-md "
      >
        Log Out
      </Link>
    </>
  );
};

export default UserModalIndex;
