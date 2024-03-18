import { useState } from "react";
import { useGetUserQuery } from "../api/apiSlice";
import UserModal from "./UserModal";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user } = useGetUserQuery();
  const { username } = user?.user || {};

  const handleAccountIconClick = () => {
    setIsMenuOpen((mo) => !mo);
  };

  const handleCloseModal = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div
        onClick={handleAccountIconClick}
        className="flex items-center justify-center cursor-pointer bg-orange-400 min-w-10 min-h-10 rounded-full mx-4 mt-2 shadow-orange-100 border-solid border-orange-500 border-2"
      >
        <span className="text-2xl font-mono text-white">
          {username.substring(0, 1).toUpperCase()}
        </span>
      </div>
      {isMenuOpen && <UserModal handleClose={handleCloseModal} />}
    </>
  );
};

export default UserMenu;