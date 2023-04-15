import Image from "next/image";
import React from "react";
Image;
const WallofLove: React.FC = () => {
  return (
    <div className="p-4 mb-24">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-4xl font-semibold text-center tracking-wider mb-3">
          Wall of Love
        </h1>
        <div className="h-[3px] w-36 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#2FFAA1]"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-10 md:space-y-0 mb-16">
        <Image
          src="/images/walloflove.png"
          width={250}
          height={250}
          alt="Wall of Love"
        />
        <Image
          src="/images/walloflove.png"
          width={250}
          height={250}
          alt="Wall of Love"
        />
        <Image
          src="/images/walloflove.png"
          width={250}
          height={250}
          alt="Wall of Love"
        />
        <Image
          src="/images/walloflove.png"
          width={250}
          height={250}
          alt="Wall of Love"
        />
      </div>
    </div>
  );
};

export default WallofLove;
