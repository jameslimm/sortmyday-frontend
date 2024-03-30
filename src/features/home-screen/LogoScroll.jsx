import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const LogoScroll = ({ images }) => {
  const [currentSliderWidth, setCurrentSliderWidth] = useState(0);
  const [totalImageWidth, setTotalImageWidth] = useState(0);
  const [isTransformed, setIsTransformed] = useState(false);

  const [numImagesLoaded, setNumImagesLoaded] = useState(0);

  const scrollRef = useRef(null);

  useEffect(() => {
    // immediate switch of isTransformed to start animation
    setIsTransformed(true);

    // set up event listener to update the slider width state
    // if the window is resized.
    const updateWidth = () => setCurrentSliderWidth(scrollRef.current.offsetWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const imageLoaded = () => setNumImagesLoaded((n) => n + 1);

  useEffect(() => {
    if (numImagesLoaded === images.length) {
      // if the number of loaded images = the number
      // of images that have been passed as a prop,
      // calculate the total width of all images and set state.
      const imageEls = [...scrollRef.current.children];
      const totalWidth = imageEls.reduce((acc, img) => acc + img.getBoundingClientRect().width, 0);
      setTotalImageWidth(totalWidth);
    }
  }, [numImagesLoaded, images]);

  useEffect(() => {
    // every 5 seconds, toggle the isTransformed bool state
    const transformToggle = () => {
      const _isTransformed = isTransformed === undefined ? false : !isTransformed;
      setIsTransformed(_isTransformed);
    };

    const timeoutId = setTimeout(transformToggle, 12000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isTransformed]);

  const transformOffset = isTransformed ? Math.max(totalImageWidth - currentSliderWidth, 0) : 0;

  return (
    <div
      className={`w-full mx-auto overflow-hidden  relative
    after:absolute after:content-[''] after:w-1/4 after:top-0 after:bottom-0 after:right-0 after:bg-gradient-to-r after:from-transparent after:to-blue-50 
    before:absolute before:content-[''] before:w-1/4 before:top-0 before:bottom-0 before:left-0 before:bg-gradient-to-r before:to-transparent before:from-blue-50 before:z-10`}
    >
      <div
        className={`flex`}
        style={{
          transition: "all 10s ease-in-out",
          transform: `translateX(-${transformOffset}px)`,
        }}
        ref={scrollRef}
      >
        {images &&
          images.map((src, i) => (
            <img src={src} key={i} className="px-4 drop-shadow-lg" onLoad={imageLoaded} />
          ))}
      </div>
    </div>
  );
};

export default LogoScroll;
