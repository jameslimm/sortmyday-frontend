import { MdOutlineClose } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import UserModalIndex from "./UserModalIndex";
import EditTags from "./EditTags";
import { useGetUserQuery } from "../user/userSlice";

const UserModal = ({ handleClose }) => {
  const [userModalPage, setUserModalPage] = useState("INDEX");
  const { data: user } = useGetUserQuery();
  const { username } = user?.user || {};
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const clickOutside = modalRef && !modalRef.current.contains(e.target);
      if (clickOutside) {
        handleClose && handleClose();
      }
    };
    document.addEventListener("click", handleClick, "true");
    return () => document.removeEventListener("click", handleClick, "true");
  }, []);

  return (
    <div
      ref={modalRef}
      className="flex flex-col justify-start items-center absolute px-4 py-4 w-72 gap-2 right-8 top-14 z-10 shadow-lg rounded-lg border-slate-400 border-solid border-2 bg-slate-400 dark:bg-slate-700"
    >
      {userModalPage && userModalPage !== "INDEX" && (
        <button
          onClick={() => setUserModalPage("INDEX")}
          aria-label="back button"
          className="w-8 h-8 absolute left-2 top-2 hover:bg-slate-300 bg-slate-200 rounded-full"
        >
          <MdArrowBack className="w-8 h-8 p-1" />
        </button>
      )}
      <button
        onClick={handleClose}
        aria-label="close menu"
        className="w-8 h-8 absolute right-1 top-1 hover:bg-slate-100 bg-slate-300 rounded-full"
      >
        <MdOutlineClose className="w-8 h-8 p-1" />
      </button>
      <p className="text-3xl font-semibold text-slate-700 dark:text-slate-100">{username}</p>
      {userModalPage && userModalPage === "INDEX" && (
        <UserModalIndex setUserModalPage={setUserModalPage} />
      )}

      {userModalPage && userModalPage === "EDIT_TAGS" && (
        <EditTags setUserModalPage={setUserModalPage} />
      )}
    </div>
  );
};

export default UserModal;
