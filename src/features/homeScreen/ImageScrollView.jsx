const ImageScrollView = ({ scrollRef, transformOffset, images, imageLoaded }) => {
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

export default ImageScrollView;
