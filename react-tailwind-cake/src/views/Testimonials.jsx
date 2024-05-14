import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Review } from "./components";
import { testimonials } from "../data";
import { fadeUp } from "../helpers";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section className="container mx-auto px-4 py-5 xs:px-8" id="testimonials">
      <motion.div
        className="mb-10 flex items-center before:my-auto before:h-[2px] before:w-full before:bg-gray-200 before:content-[''] after:my-auto after:h-[2px] after:w-full after:bg-gray-200 after:content-['']"
        initial="initial"
        whileInView="animate"
        variants={fadeUp}
        viewport={{
          once: true,
        }}
      >
        <h1 className="mx-2 whitespace-nowrap text-center font-lobster text-4xl text-primary-300">
          Testimonials
        </h1>
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeUp}
        viewport={{
          once: true,
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={testimonials.length > 1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper swiper-testimonials"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Review {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};
