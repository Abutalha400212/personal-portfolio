import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utilis/motion";
import { styles } from "../../styles/styles";
import { services } from "../../utilis/tools";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
        <Image
          width={100}
          height={100}
          src={icon}
          alt="web-development"
          className=" object-contain"
        />

        <h3 className="text-white text-[18px] font-black text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default function About() {
  return (
    <div id="about" className="md:mt-52 md:my-2 text-white">
      <motion.div initial="hidden" animate="show" variants={textVariant("")}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className="font-black text-white md:text-[50px] text-[60px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeIn("left", "spring", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 grid md:grid-cols-4 w-full md:gap-x-5 grid-cols-1 gap-y-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div />
    </div>
  );
}
