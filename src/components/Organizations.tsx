import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

//Contributors component
const Organizations: React.FC = () => {
  return (
    <section
      className="py-20 px-4 bg-transparent relative z-50"
      id="organizations"
    >
      <div className="container mx-auto">
        <div className="mx-auto text-left">
          <h2 className="text-3xl font-bold mb-2">For Organizations</h2>
          <div className="h-[3px] w-36 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#2FFAA1]"></div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex flex-col items-center justify-between ">
            <div className="ml-5 mb-5 p-4">
              <div className="w-full flex flex-col md:flex-row items-center justify-between my-5">
                <div className="w-full">
                  <Image
                    src="/icons/organizations1.svg"
                    width={30}
                    height={30}
                    alt="Organizations"
                  />
                  <p className="text-[22px] mt-2 mb-4 text-gray-300">
                    More code and feature added
                  </p>
                </div>
                <div className="w-full  mt-6 md:mt-0 ">
                  <Image
                    src="/icons/organizations2.svg"
                    width={30}
                    height={30}
                    alt="Organizations"
                  />
                  <p className="text-[22px] mt-2 mb-4 text-gray-300">
                    Project adaption in wider developer community across
                    geographies
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4">
                <div className="w-full">
                  <Image
                    src="/icons/organizations3.svg"
                    width={30}
                    height={30}
                    alt="Organizations"
                  />
                  <p className="text-[22px] mt-2 mb-4 text-gray-300">
                    Identify the best tech talent for full-time roles
                  </p>
                </div>
                <div className="w-full "></div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-start hover:translate-x-3 transition duration-300 ease-in-out">
              <Link href="/">
                <h3 className="text-xl font-normal text-gray-300 tracking-wider uppercase">
                  VIEW ORGANIZATION
                </h3>
              </Link>
              <RiArrowRightLine className="text-2xl ml-4" />
            </div>
          </div>
          <div className="p-4 order-first md:order-last mt-12 md:mt-0">
            <Image
              className="px-5"
              src="/images/organizations.png"
              width={500}
              height={500}
              alt="Organizations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;
