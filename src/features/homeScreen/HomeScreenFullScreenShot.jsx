import fullScreenShot from "../../assets/screen-fullscreenshot.png";

const HomeScreenFullScreenShot = () => {
  return (
    <div className="flex justify-center pt-5 bg-orange-100 my-4 border-b-4 border-solid bg-gradient-to-b from-blue-50 to-blue-200 border-slate-400 shadow-lg overflow-clip">
      <img
        className="w-2/3 lg:w-1/2 rounded-t-xl border-t-4 border-l-4 border-r-4 border-slate-300 shadow-lg"
        src={fullScreenShot}
        alt="Screen shot of SortMyDay task list"
      ></img>
    </div>
  );
};

export default HomeScreenFullScreenShot;
