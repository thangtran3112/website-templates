import { motion } from "framer-motion";
import { team } from "../data";
import { fadeUp } from "../helpers";
import { TeamMember } from "./components";

export const Team = () => {
  return (
    <section className="container mx-auto px-4 py-5 xs:px-8" id="team">
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
          The Team
        </h1>
      </motion.div>
      <div className="grid grid-cols-4 gap-5">
        {team.map((item, index) => (
          <TeamMember key={index} index={index} {...item} />
        ))}
      </div>
    </section>
  );
};
