import Image from "next/image";
import React from "react";
import BannerImage from "../../../../public/bag2.jpg";

const Banner = () => {
  return (
    <>
      <div className="w-full">
        <Image src={BannerImage.src} alt="banner" width={1600} height={100} />
      </div>
    </>
  );
};

export default Banner;
