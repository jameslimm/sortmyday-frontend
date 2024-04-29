import { useState } from "react";
import UserModal from "./UserModal";
import { useGetUserQuery } from "../user/userSlice";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data } = useGetUserQuery();

  const userLetter = (data && data.user?.username?.substring(0, 1).toUpperCase()) || "";

  const handleAccountIconClick = () => {
    setIsMenuOpen((mo) => !mo);
  };

  const handleCloseModal = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={handleAccountIconClick}
        className="flex items-center justify-center cursor-pointer bg-orange-400 w-10 h-10 min-w-10 min-h-10 rounded-full mx-4 mt-2 shadow-orange-100 border-solid border-orange-500 border-2"
      >
        <span className="text-2xl font-mono text-white">{userLetter}</span>
      </button>
      {isMenuOpen && <UserModal handleClose={handleCloseModal} />}
    </>
  );
};

export default UserMenu;
