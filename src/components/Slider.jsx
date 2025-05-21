// components/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// https://i.ibb.co/nMvkt1Cz/slide1.jpg
// https://i.ibb.co/tSytjCz/slide2.jpg
// https://i.ibb.co/3mMF5Dc5/slide3.jpg
const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}>
        <SwiperSlide>
          <div className="md:h-[385px] h-[250px]  bg-[url('https://i.ibb.co/nMvkt1Cz/slide1.jpg')] bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="pt-30">
                <h1 className="text-center mx-auto text-gray-300 underline mb-2 ">
                  Your Perfect Roommate is Just a Click Away
                </h1>
                <p className="text-sm font-stretch-125% text-center font-medium">
                  Say goodbye to endless searching. Our intelligent matching
                  system <br />
                  connects you with individuals whose lifestyle, interests, and
                  budget align perfectly with yours. Find your harmonious home
                  faster.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
          <SwiperSlide>
          <div className="md:h-[385px] h-[250px]  bg-[url('https://i.ibb.co/tSytjCz/slide2.jpg')] bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="pt-30">
                <h1 className="text-center mx-auto text-gray-300 underline mb-2">
                  Build More Than a Home. Build a Community
                </h1>
                <p className="text-sm font-stretch-125% text-center font-medium">
                  Beyond just finding a room, discover people who enrich your daily life. Our platform fosters <br /> genuine connections, turning shared spaces into supportive and vibrant living environments.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
     <SwiperSlide>
          <div className="md:h-[385px] h-[250px]  bg-[url('https://i.ibb.co/3mMF5Dc5/slide3.jpg')] bg-cover bg-center flex items-center justify-center text-white text-3xl font-semibold">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="pt-30">
                <h1 className="text-center mx-auto text-gray-300 underline mb-2">
                  Effortless Roommate Finding. Total Peace of Mind.
                </h1>
                <p className="text-sm font-stretch-125% text-center font-medium">
                  Navigate your roommate search with ease. Our secure platform offers verified listings and intuitive tools, making the process <br /> of finding your next great living partner simple, safe, and stress-free.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
