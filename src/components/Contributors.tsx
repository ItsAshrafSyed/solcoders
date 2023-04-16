import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

//Contributors component
const Contributors: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="/icons/organization-eclipse.svg"
        alt="Hero"
        width={Infinity}
        height={Infinity}
        className="absolute right-0 -top-64  opacity-80 z-0"
      />
      <div className="relative z-50">
        <section className="py-20 px-4 bg-transparent">
          <div className="container mx-auto">
            <div className="mx-auto text-left ">
              <h2 className="text-3xl font-bold mb-2 ">For Contributors</h2>
              <div className="h-[3px] w-36 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#2FFAA1]"></div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="flex flex-col items-center justify-between ">
                <div className="ml-5 mb-5 p-4">
                  <div className="w-full flex flex-col md:flex-row items-center justify-between my-5">
                    <div className="w-full">
                      <Image
                        src="/icons/contributors1.svg"
                        width={30}
                        height={30}
                        alt="Contributors"
                      />
                      <p className="text-xl mt-2 mb-4 text-gray-300">
                        Learn how Solana works
                      </p>
                    </div>
                    <div className="w-full ">
                      <Image
                        src="/icons/contributors2.svg"
                        width={30}
                        height={30}
                        alt="Contributors"
                      />
                      <p className="text-xl mt-2 mb-4 text-gray-300">
                        Contribute to open-source projects on Solana
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col md:flex-row items-center justify-between mb-4">
                    <div className="w-full">
                      <Image
                        src="/icons/contributors3.svg"
                        width={30}
                        height={30}
                        alt="Contributors"
                      />
                      <p className="text-xl mt-2 mb-4 text-gray-300">
                        Earn while you learn and Contribute
                      </p>
                    </div>
                    <div className="w-full "></div>
                  </div>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                  <h3 className="text-xl font-normal text-gray-300 tracking-wider uppercase">
                    HOW IT WORKS
                  </h3>
                  <RiArrowRightLine className="text-2xl ml-4 text-gray-300" />
                </div>
              </div>
              <div className="p-4 order-first md:order-last">
                <Image
                  className="px-5"
                  src="/images/contributors.png"
                  width={450}
                  height={450}
                  alt="Contributors"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contributors;
