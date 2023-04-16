import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <Image
        src="/icons/hero-left.svg"
        alt="Hero"
        width={24}
        height={48}
        className="absolute left-0 top-72  opacity-95 z-0"
      />
      <Image
        src="/icons/hero-right.svg"
        alt="Hero"
        width={24}
        height={48}
        className="absolute right-0 top-12 opacity-95 z-0"
      />
      <Image
        src="/icons/hero-main.svg"
        alt="Hero"
        width={Infinity}
        height={Infinity}
        className="absolute right-0 -top-36 opacity-70 z-0"
      />
      <div className="relative z-50">
        <section className="py-20 px-4 bg-transparent">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-[96px] font-bold my-4 tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#AB4EE9] to-[#2FFAA1]">
                  Sol
                </span>
                Coders
              </h1>
              <h2 className="text-2xl md:text-4xl font-light text-[#CECECE] mb-8 tracking-wide">
                Learn..contribute..earn..
              </h2>
              <p className="text-[#989898] text-xl text-justify mb-8 tracking-wide">
                Solcoder is an online program that brings new contributors to
                open-source projects on Solana. Primarily focuses on bringing
                university students and developers together to contribute to
                community good projects and products by incentivizing them with
                a stipend.
              </p>
            </div>

            <div className="max-w-xl order-first md:order-last">
              <Image
                src="/images/hero.png"
                alt="Hero"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
