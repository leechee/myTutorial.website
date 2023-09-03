"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| The Most In-Demand Technology Today"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold text-white">
         {" "}
        </span>
        Using the most in-demand technologies of today: ReactJS, VS Code, Node.js, Tailwind css, and Hostinger - learn how to create a website with framer motion that anyone can access using a domain!{" "}
        <span className="font-extrabold text-white">
          Lets go!
        </span>{" "}
        <br />
        <span className="font-extrabold text-pink-500">

        </span>
        <span className="font-extrabold text-white"></span>
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
