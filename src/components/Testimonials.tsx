import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

//Testimonials component
const Testimonials: React.FC = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="p-4 m-10 mb-20 container mx-auto relative z-50">
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-4xl font-semibold text-center tracking-wider mb-3">
          Testimonials
        </h1>
        <div className="h-[3px] w-40 rounded-lg bg-gradient-to-r from-[#9945FF] to-[#2FFAA1]"></div>
      </div>
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        pagination={pagination}
        modules={[Pagination]}
        loop={true}
        spaceBetween={60}
        className="mySwiper"
        direction="horizontal"
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8 rounded-xl">
              <div className="flex items-center gap-4">
                <Image
                  width={64}
                  height={64}
                  alt="Anatoly Yakovenko"
                  src="https://media.licdn.com/dms/image/C5603AQEVOEOMFQfLiA/profile-displayphoto-shrink_800_800/0/1603464300987?e=2147483647&v=beta&t=M8yBIhnMpIlMlI1nhN-HUA0tbOf-Zjyrl_cnp3GKUX4"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Anatoly Yakovenko</p>
                  <p className="mt-1">Founder & CEO of Solana</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Solcoder is a fantastic program that not only helps bring new
                contributors to open-source projects on Solana, but also
                incentivizes them with a stipend. As someone who is passionate
                about building a thriving ecosystem on Solana, I&apos;m excited
                to see more developers and students getting involved through
                this program.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center\ gap-4">
                <Image
                  width={64}
                  height={64}
                  alt="Ashraf Syed"
                  src="https://media.licdn.com/dms/image/D5603AQEvH0R9xWT7Mw/profile-displayphoto-shrink_800_800/0/1667565568052?e=2147483647&v=beta&t=uVvGMFoW5yArAadZXWRcTEAdRhvg_QqX0pAigtXhbeI"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Ashraf Syed</p>
                  <p className="mt-1">Building Solcoder</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                As a university student myself, I know firsthand how important
                it is to have access to resources and opportunities that can
                help us build our skills and make an impact. That&apos;s why
                I&apos;m excited to see Solcoder focusing on bringing students
                and developers together to contribute to community good projects
                and products on Solana. This program has the potential to create
                real change and foster innovation in the ecosystem.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <Image
                  width={64}
                  height={64}
                  alt="Mert Mumtaz"
                  src="https://media.licdn.com/dms/image/D5603AQG-WING4o9rcw/profile-displayphoto-shrink_800_800/0/1675988442746?e=2147483647&v=beta&t=xRYlT9cUsI6fSdhKhEmBc6O3W7FAQfcQLnLLJqP67cs"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Mert Mumtaz</p>
                  <p className="mt-1">Founder & CEO, Helius Labs</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Solana is one of the most exciting blockchain ecosystems out
                there right now, and I believe that Solcoder is playing a
                critical role in its success. By incentivizing developers to
                contribute to open-source projects on Solana, Solcoder is
                helping to build a strong and thriving ecosystem that will
                benefit everyone involved. I&apos;m excited to see what the
                future holds for this program and for the Solana community as a
                whole
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <Image
                  width={64}
                  height={64}
                  alt="Raj Gokal"
                  src="https://media.licdn.com/dms/image/C5603AQEZXORkZrZOQg/profile-displayphoto-shrink_800_800/0/1606347541506?e=2147483647&v=beta&t=L26LKLoIF8vDiGPSbjpkY2pQ5PmYM45y_FfEudhhDXc"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Raj Gokal</p>
                  <p className="mt-1">Co-founder, Solana</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                I&apos;ve been involved in the Solana community for several
                years now, and I&apos;ve seen firsthand how much it has grown
                and evolved over that time. Programs like Solcoder are essential
                for continuing that growth and ensuring that the network remains
                a vibrant and innovative ecosystem. I highly recommend getting
                involved with Solcoder if you&apos;re interested in contributing
                to the future of Solana.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <Image
                  width={64}
                  height={64}
                  alt="Chase Barker"
                  src="https://cdn.hashnode.com/res/hashnode/image/upload/v1642572794759/IMCzXHW55.jpeg"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Chase Barker</p>
                  <p className="mt-1">
                    Head of Developer Ecosystem, Solana Foundation
                  </p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Solcoder is providing an excellent platform for students to
                learn and contribute to the Solana ecosystem. The stipend
                offered is a great way to incentivize students to get involved
                and contribute their skills to real-world projects.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <Image
                  width={64}
                  height={64}
                  alt="Armani Ferrante"
                  src="https://avatars.githubusercontent.com/u/6990215?v=4"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Armani Ferrante</p>
                  <p className="mt-1">Co-Founder and CEO, Backpack</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Solcoder is a fantastic initiative that is bridging the gap
                between students and the Solana ecosystem. It provides students
                with the opportunity to gain hands-on experience in real-world
                open-source projects and contribute to the growth of Solana.
                Highly recommended!
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal !relative !bottom-0 mt-32"></div>
      </Swiper>
    </div>
  );
};
export default Testimonials;
