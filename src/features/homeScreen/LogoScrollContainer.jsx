import ImageScroll from "./ImageScroll";

import logo1 from "../../assets/logos/logoipsum-283.svg";
import logo2 from "../../assets/logos/logoipsum-285.svg";
import logo3 from "../../assets/logos/logoipsum-297.svg";
import logo4 from "../../assets/logos/logoipsum-321.svg";
import logo5 from "../../assets/logos/logoipsum-331.svg";
import logo6 from "../../assets/logos/logoipsum-212.svg";
import logo7 from "../../assets/logos/logoipsum-284.svg";

const LogoScrollContainer = () => {
  const logoImages = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <div className="my-8">
      <p className="text-center font-thin text-m text-balance my-2">
        Over 5 people and some teams trust SortMyDay to help manage their tasks
      </p>
      <ImageScroll images={logoImages} />
    </div>
  );
};

export default LogoScrollContainer;
