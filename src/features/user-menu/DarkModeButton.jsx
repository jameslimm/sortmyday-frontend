import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import useDarkMode from "../../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [dark, toggleDark] = useDarkMode();

  return (
    <button onClick={toggleDark} className="cursor-pointer p-2" aria-labelledby="darkmode">
      {dark ? (
        <>
          <MdDarkMode className="w-16 h-16 text-white rounded-full p-2" />
          <span id="darkmode" className="text-white">
            Dark Mode
          </span>
        </>
      ) : (
        <>
          <MdLightMode className="w-16 h-16 text-black rounded-full p-2" />
          <span id="darkmode" className="text-black">
            Dark Mode
          </span>
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
