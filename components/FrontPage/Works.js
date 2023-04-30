import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant, zoomIn } from "@/utilis/motion";
import { projects } from "../../utilis/tools";
import { styles } from "../../styles/styles";
import Image from "next/image";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={zoomIn(0.8, 0.7)}
          className="relative  min-h-[230px]   rounded-2xl">
          <Image
            src={image}
            width={400}
            height={400}
            alt="project_image"
            className=" object-fill rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 text-white">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="rounded-full  cursor-pointer">
              <Image
                src={"/github.png"}
                width={30}
                height={30}
                alt="source code"
                className="bg-blue-900 rounded-full hover:bg-blue-800"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div id="works" className="mt-36 md:mt-40 md:my-2 text-white">
      <motion.div initial="hidden" animate="show" variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`font-black text-white md:text-[50px] text-[60px]`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid md:grid-cols-3 grid-cols-1 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div />
    </div>
  );
};

export default Works;
