import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ImageScrollView from "./ImageScrollView";

const ImageScroll = ({ images }) => {
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

  const imageScrollViewProps = { scrollRef, transformOffset, images, imageLoaded };

  return <ImageScrollView {...imageScrollViewProps} />;
};

export default ImageScroll;
