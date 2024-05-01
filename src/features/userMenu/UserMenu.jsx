import { useCallback, useState } from "react";
import UserModal from "./UserModal";
import { useGetUserQuery } from "../user/userSlice";

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get first letter of logged in username
  const { data } = useGetUserQuery();
  const userLetter = data?.user.username.substring(0, 1).toUpperCase() || "";

  const handleAccountIconClick = () => {
    setIsMenuOpen((mo) => !mo);
  };

  const handleCloseModal = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  return (
    <>
      <button
        onClick={handleAccountIconClick}
        className="flex items-center justify-center cursor-pointer bg-orange-400 w-10 h-10 min-w-10 min-h-10 rounded-full mx-4 mt-2 shadow-orange-100 border-solid border-orange-500 border-2"
      >
        <span className="text-2xl font-mono text-white">{userLetter}</span>
      </button>
      {isMenuOpen ? <UserModal handleClose={handleCloseModal} /> : null}
    </>
  );
};

export default UserMenu;
