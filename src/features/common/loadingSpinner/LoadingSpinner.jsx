import "./loadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-56 w-56">
      <h3>Loading...</h3>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
