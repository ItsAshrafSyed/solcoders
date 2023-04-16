import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Sponsors: React.FC = () => {
  return (
    <div className="p-4 mb-24 relative z-50">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-4xl font-semibold text-center tracking-wider mb-3">
          Sponsors
        </h1>
        <div className="h-[3px] w-28 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#2FFAA1]"></div>
      </div>
      <div className="mb-16">
        <p className="text-2xl text-center text-gray-400 tracking-wide">
          Summer of Solana is proudly supported by
        </p>
      </div>
      {/* Sponsors image in a row, column if mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-32 space-y-10 md:space-y-0 mb-16">
        <Image
          src="/images/sponsors/1.png"
          width={80}
          height={80}
          alt="Sponsor"
        />
        <Image
          src="/images/sponsors/2.png"
          width={150}
          height={150}
          alt="Sponsor"
        />
        <Image
          src="/images/sponsors/3.png"
          width={80}
          height={80}
          alt="Sponsor"
        />
        <Image
          src="/images/sponsors/4.png"
          width={100}
          height={100}
          alt="Sponsor"
        />
      </div>
      <div className="w-full flex flex-row items-center justify-center hover:translate-x-3 transition duration-300 ease-in-out">
        <Link href="/">
          <h3 className="text-xl font-normal text-gray-400 tracking-wider capitalize">
            View More
          </h3>
        </Link>
        <RiArrowRightLine className="text-2xl ml-4 text-gray-400" />
      </div>
    </div>
  );
};

export default Sponsors;
