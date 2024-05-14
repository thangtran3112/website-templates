import { motion } from "framer-motion";
import { products, promos } from "../data";
import { fadeLeft, fadeRight, fadeUp } from "../helpers";

export const Services = () => {
  return (
    <section className="container mx-auto px-4 py-5 xs:px-8" id="services">
      <div className="mb-10 flex items-center before:my-auto before:h-[2px] before:w-full before:bg-gray-200 before:content-[''] after:my-auto after:h-[2px] after:w-full after:bg-gray-200 after:content-['']">
        <motion.h1
          className="mx-2 whitespace-nowrap text-center font-lobster text-4xl text-primary-300"
          initial="initial"
          whileInView="animate"
          variants={fadeUp}
          viewport={{
            once: true,
          }}
        >
          Services
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 gap-10 overflow-hidden lg:grid-cols-2">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeRight}
          viewport={{
            once: true,
          }}
        >
          <span className="font-lobster text-2xl text-primary-300">
            Products
          </span>
          <ul>
            {products.map(({ title, price }, index) => (
              <li
                className="flex flex-wrap justify-between border-b border-gray-200 py-2"
                key={index}
              >
                <span>{title}</span>
                <span className="font-light text-primary-300">${price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeLeft}
          viewport={{
            once: true,
          }}
        >
          <span className="font-lobster text-2xl text-primary-300">Promos</span>
          <ul>
            {promos.map(({ title }, index) => (
              <li className="border-b border-gray-200 py-2" key={index}>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
