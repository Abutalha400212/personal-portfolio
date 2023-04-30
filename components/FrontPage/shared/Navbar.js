import React, { useState } from "react";
import { HiBarsArrowDown } from "react-icons/hi2";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";
import { fadeIn } from "@/utilis/motion";
import { navLinks } from "@/utilis/tools";
import Navlink from "next/link";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [active, setActive] = useState("");
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
      setActive("");
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <nav
      className={`${
        scroll ? "animate-slideBottomNav opacity-0 " : "bg-transparent"
      } sticky duration-300 ease-in-out top-0 z-10 w-full flex justify-between p-5 items-center `}>
      <Navlink href="/" className="flex items-center gap-x-2 ">
        <img src={"/logo.svg"} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex ">
          Abu Talha &nbsp;
          <span> | Front End Developer</span>
        </p>
      </Navlink>

      <div
        onClick={() => setToggle(!toggle)}
        className="md:hidden cursor-pointer ">
        {toggle ? (
          <SlClose size={30} color="white" />
        ) : (
          <HiBarsArrowDown size={30} color="white" />
        )}
      </div>
      <ul
        className={`list-none flex md:flex-row flex-col gap-y-2 md:gap-x-5 md:static absolute right-0 p-2 duration-500 ease-in-out ${
          toggle ? "top-[65px] rounded-l-md bg-[#0f0c29]" : "top-[-180px] "
        }`}>
        {navLinks.map((nav, i) => (
          <motion.li
            key={i}
            initial="hidden"
            animate="show"
            variants={fadeIn("", "spring", i * 0.3, 0.8)}
            className="text-[18px] font-bold child-hover:bg-clip-text child-hover:text-transparent child-hover:bg-gradient-to-r from-indigo-800  to-pink-600">
            <a
              onClick={() => setActive(nav.title)}
              className={`${
                active === nav.title
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
                  : null
              } `}
              href={`#${nav.id}`}>
              {nav.title}
            </a>
          </motion.li>
        ))}
      </ul>
      <a
        onClick={() => setScrolling(scroll ? true : false)}
        href={scrolling ? "#" : "#contact"}
        className={`${scroll ? "scroll-up " : "scroll-down"}`}></a>
    </nav>
  );
}
