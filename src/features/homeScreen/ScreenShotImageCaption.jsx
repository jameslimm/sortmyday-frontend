import { InView } from "react-intersection-observer";

const ScreenShotImageCaption = ({ imageSrc, caption, captionColor, position }) => {
  return (
    <InView threshold={0.5}>
      {({ inView, ref }) => {
        // Parent div dynamic classes
        const divOpacity = inView ? "opacity-100" : "opacity-0";
        const divFlexPos = position === "right" ? "items-start" : "items-end";

        // Screenshot x position
        const screenShotTranslateX = inView
          ? "translate-x-0"
          : position === "right"
          ? "-translate-x-5"
          : "translate-x-5";

        // Caption relative position
        const captionPositionLeftRight = position === "right" ? "left-[90%]" : "right-[90%]";

        return (
          <div
            ref={ref}
            className={`w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto flex flex-col transition-opacity duration-700 ${divOpacity} ${divFlexPos}`}
          >
            <div className="w-1/2 shadow-lg p-4 bg-slate-500/30 my-6 relative">
              <img
                className={`border-solid border-2 border-slate-300 transition-transform duration-300 ${screenShotTranslateX}`}
                src={imageSrc}
              />
              <div
                className={`absolute z-10 top-1/2 -translate-y-1/2 ${captionPositionLeftRight} w-full ${captionColor} text-black p-3 font-normal opacity-70 rounded-lg shadow-md`}
              >
                {caption}
              </div>
            </div>
          </div>
        );
      }}
    </InView>
  );
};

export default ScreenShotImageCaption;
