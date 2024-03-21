import { MdSettings } from "react-icons/md";

const SettingsButton = () => {
  return (
    <button className="cursor-pointer p-2">
      <MdSettings className="w-16 h-16 dark:text-white text-black rounded-full p-2" />
      <span className="text-black dark:text-white">Settings</span>
    </button>
  );
};

export default SettingsButton;
