import React, { useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/utilis/motion";
import { styles } from "../../styles/styles";

import CanvasLoader, { EarthCanvas } from "../../utilis/Canvas";

const Contact = () => {
  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}>
      <motion.div
        initial="hidden"
        animate="show"
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className="font-black text-white md:text-[50px] text-[60px]">
          Contact.
        </h3>

        <form className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              placeholder="What's your good name?"
              className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              placeholder="What's your web address?"
              className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              placeholder="What you want to say?"
              className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            send
          </button>
        </form>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
