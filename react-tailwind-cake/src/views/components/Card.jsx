import { motion } from "framer-motion";
import { zoomIn } from "../../helpers";

export const Card = ({
  title,
  price,
  image,
  classes,
  animatePresence,
  index,
}) => {
  return (
    <motion.div
      className={`${classes} col-span-12 sm:col-span-6 lg:col-span-3`}
      initial={animatePresence ? "initial" : false}
      whileInView="animate"
      variants={zoomIn}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="flex h-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary-300">
        <div className="h-60 w-60 overflow-hidden rounded-lg">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
        <a
          className="line-clamp-2 text-center text-xl font-bold text-shuttle-gray-900"
          href="#"
        >
          {title}
        </a>
        <span className="mt-auto text-xl font-medium text-primary-300">
          ${price}
        </span>
      </div>
    </motion.div>
  );
};
