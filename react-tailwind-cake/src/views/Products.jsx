import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import mixitup from "mixitup";
import { products } from "../data/products";
import { Card } from "./components";
import { fadeUp } from "../helpers";

// Products component responsible for displaying product cards and filtering functionality.
export const Products = () => {
  const [animatePresence, setAnimatePresence] = useState(true);

  useEffect(() => {
    // Initialize Mixitup for filtering functionality
    const mixer = mixitup(".mix-container", {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 300,
      },
    });

    // Filter products initially by default category
    mixer.filter(".mix-all");

    // Event handler for mixClick event
    const handleMixClick = () => {
      setAnimatePresence(false);
    };

    // Add event listener for mixClick event
    const element = document.querySelector(".mix-container");
    element && element.addEventListener("mixClick", handleMixClick);

    return () => {
      // Remove event listener and destroy mixer instance when component unmounts
      element && element.removeEventListener("mixClick", handleMixClick);
      mixer.destroy();
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-5 xs:px-8" id="products">
      <motion.div
        className="mb-10 flex items-center before:my-auto before:h-[2px] before:w-full before:bg-gray-200 before:content-[''] after:my-auto after:h-[2px] after:w-full after:bg-gray-200 after:content-['']"
        initial="initial"
        whileInView="animate"
        variants={fadeUp}
        viewport={{
          once: true,
        }}
      >
        <h1 className="mx-2 whitespace-nowrap text-center font-lobster text-4xl text-primary-400">
          Products
        </h1>
      </motion.div>
      <motion.ul
        className="my-5 flex flex-wrap justify-center gap-5"
        initial="initial"
        whileInView="animate"
        variants={fadeUp}
        viewport={{
          once: true,
        }}
      >
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-all"
        >
          All
        </li>
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-blackberry"
        >
          Blackberry
        </li>
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-strawberry"
        >
          Strawberry
        </li>
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-peach"
        >
          Peach
        </li>
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-banana"
        >
          Banana
        </li>
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-500"
        >
          500g
        </li>
        <li
          className=" relative cursor-pointer font-bold"
          data-filter=".mix-390"
        >
          390g
        </li>
      </motion.ul>
      <div className="mix-container grid grid-cols-12 gap-5">
        {products.map((item, index) => (
          <Card
            animatePresence={animatePresence}
            index={index}
            key={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};
