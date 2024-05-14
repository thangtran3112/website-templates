import { motion } from "framer-motion";
import { zoomIn } from "../../helpers";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

export const TeamMember = ({
  image,
  name,
  description,
  role,
  facebook,
  instagram,
  twitter,
  index,
}) => {
  return (
    <motion.div
      className="col-span-4 sm:col-span-2 xl:col-span-1"
      initial="initial"
      whileInView="animate"
      variants={zoomIn}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="flex h-full flex-col items-center rounded-lg bg-white p-5 shadow-lg transition-all  duration-300 hover:shadow-primary-300">
        <figure className="h-[200px] w-[200px] overflow-hidden rounded-full border-[5px] border-primary-300">
          <img className="h-full w-full object-cover" src={image} alt={name} />
        </figure>
        <h2 className="my-5 text-2xl font-bold text-shuttle-gray-900">
          {name}
        </h2>
        <em className="my-5 text-shuttle-gray-400">{role}</em>
        <p className="mt-auto font-bold text-primary-300">{description}</p>
        <div className="my-5 flex items-center gap-4">
          <a
            className="transition-all duration-300 hover:text-primary-300"
            href={facebook}
          >
            <BsFacebook className="h-5 w-5" />
          </a>
          <a
            className="transition-all duration-300 hover:text-primary-300"
            href={instagram}
          >
            <BsInstagram className="h-5 w-5" />
          </a>
          <a
            className="transition-all duration-300 hover:text-primary-300"
            href={twitter}
          >
            <BsTwitterX className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
