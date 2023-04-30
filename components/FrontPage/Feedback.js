import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles/styles";
import { testimonials } from "../../utilis/tools";
import { fadeIn, textVariant } from "@/utilis/motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
// How to use React-tilt........

// reverse: false, // reverse the tilt direction
// max: 35, // max tilt rotation (degrees)
// perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
// scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
// speed: 1000, // Speed of the enter/exit transition
// transition: true, // Set a transition on enter/exit.
// axis: null, // What axis should be disabled. Can be X or Y.
// reset: true, // If the tilt effect has to be reset on exit.
// easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}>
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="p-10 rounded-3xl xs:w-[320px] w-full  bg-[#1d1836]">
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1 min-h-[30px]">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <Link target="_blank" href={link}>
            <Image
              src={image}
              width={20}
              height={20}
              alt={""}
              className="rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </motion.div>{" "}
  </Tilt>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={` rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div initial="hidden" animate="show" variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className="font-black text-white md:text-[50px] text-[60px]">
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div
        className={`md:-mt-24 -mt-40 pb-14 ${styles.paddingX} grid md:grid-cols-3 grid-cols-1 md:gap-x-10 gap-y-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
