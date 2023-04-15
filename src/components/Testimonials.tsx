import React, { useRef, useState } from "react";
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
    <div className="p-4 m-10 mb-20">
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
                <img
                  alt="Dog"
                  src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Bark Dagleish</p>
                  <p className="mt-1">Head of Barketing</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                assumenda officiis sit amet itaque eveniet accusantium corporis
                tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                repellat, commodi in esse quisquam.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center\ gap-4">
                <img
                  alt="Dog"
                  src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Bark Dagleish</p>
                  <p className="mt-1">Head of Barketing</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                assumenda officiis sit amet itaque eveniet accusantium corporis
                tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                repellat, commodi in esse quisquam.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Dog"
                  src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Bark Dagleish</p>
                  <p className="mt-1">Head of Barketing</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                assumenda officiis sit amet itaque eveniet accusantium corporis
                tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                repellat, commodi in esse quisquam.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Dog"
                  src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Bark Dagleish</p>
                  <p className="mt-1">Head of Barketing</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                assumenda officiis sit amet itaque eveniet accusantium corporis
                tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                repellat, commodi in esse quisquam.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Dog"
                  src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Bark Dagleish</p>
                  <p className="mt-1">Head of Barketing</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                assumenda officiis sit amet itaque eveniet accusantium corporis
                tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                repellat, commodi in esse quisquam.
                <span className="text-xl">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-10">
            <blockquote className="bg-[#15141E] p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Dog"
                  src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-sm">
                  <p className="font-medium">Bark Dagleish</p>
                  <p className="mt-1">Head of Barketing</p>
                </div>
              </div>

              <p className="relative mt-4 text-gray-500">
                <span className="text-xl">&ldquo;</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                assumenda officiis sit amet itaque eveniet accusantium corporis
                tempora, soluta perspiciatis rerum, ratione animi nemo inventore
                repellat, commodi in esse quisquam.
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
