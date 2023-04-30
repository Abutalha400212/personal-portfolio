import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { technologies } from "../../utilis/tools";
import CanvasBox from "../../utilis/Ball";
import { fadeIn } from "@/utilis/motion";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Technology() {
  return (
    <div id="about" className="text-white  my-28 md:my-20">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tec, i) => (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("right", "spring", i * 0.5, 0.75)}
            key={i}
            className="w-28 h-28">
            <CircularProgressbarWithChildren
              value={tec.value}
              styles={buildStyles({
                pathColor: tec.color,
              })}>
              <h1 className="absolute z-10 -top-7 font-semibold text-gray-400">
                {tec.name}
              </h1>
              <CanvasBox icon={tec?.icon} />{" "}
            </CircularProgressbarWithChildren>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
