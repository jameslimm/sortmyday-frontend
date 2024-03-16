import { MdOutlineClose } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";

import { useGetUserQuery } from "../api/apiSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserModalIndex from "./UserModalIndex";
import UserModalPassword from "./UserModalPassword";

const UserModal = ({ handleClose }) => {
  const [userModalPage, setUserModalPage] = useState("INDEX"); // empty - start, "PASSWORD" - change password
  const { data: user } = useGetUserQuery();
  const { username } = user?.user || {};

  return (
    <div className="flex flex-col justify-start items-center absolute px-4 py-2 w-72 gap-2 right-8 top-14 z-10 shadow-lg rounded-lg border-slate-800 border-solid border-2 bg-slate-600">
      {userModalPage && userModalPage !== "INDEX" && (
        <MdArrowBack
          onClick={() => setUserModalPage("INDEX")}
          className="w-10 h-10 absolute left-2 top-2 hover:bg-slate-300 bg-slate-200 rounded-full p-1"
        />
      )}
      <MdOutlineClose
        onClick={handleClose}
        className="w-10 h-10 absolute right-2 top-2 hover:bg-slate-300 bg-slate-200 rounded-full p-1"
      />
      <p className="text-4xl font-bold text-slate-100">{username}</p>
      {userModalPage && userModalPage === "INDEX" && (
        <UserModalIndex setUserModalPage={setUserModalPage} />
      )}
      {userModalPage && userModalPage === "PASSWORD" && (
        <UserModalPassword setUserModalPage={setUserModalPage} />
      )}
    </div>
  );
};

export default UserModal;
