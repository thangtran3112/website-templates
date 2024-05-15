import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { banners } from "../data";
import { FeatureBox } from "./components";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-5 xs:px-8" id="intro">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <Swiper
            className="mySwiper group relative flex items-center justify-between rounded-lg"
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            effect="fade"
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".button-prev",
              nextEl: ".button-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {banners.map(({ image, id }) => (
              <SwiperSlide key={id}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}

            <div className="button-prev absolute -left-16 z-20 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-primary-400 text-white transition-all duration-300 hover:bg-primary-500 group-hover:left-4">
              &#10094;
            </div>
            <div className="button-next absolute -right-16 z-20 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-primary-400 text-white transition-all duration-300 hover:bg-primary-500 group-hover:right-4">
              &#10095;
            </div>
          </Swiper>
        </div>
        <div className="col-span-12 hidden gap-4 sm:flex lg:col-span-4 lg:flex-col">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover"
              src="./img/banners/banner-r-1.jpg"
              alt="img"
            />
          </div>
          <div className="h-full w-full overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover"
              src="./img/banners/banner-r-2.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>

      <FeatureBox />
    </section>
  );
};
