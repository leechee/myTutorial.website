'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#75c7ea] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Step 6:
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Deploy the Website!
          </p>
        </div>

        <p className="mt-[16px] font-normal sm:text-[16px] text-[12px] sm:leading-[30.4px] leading-[26.4px] text-white">
          To make our website accessable from a browser, we need to use a cloud-based hosting service. In this case, our platform of choice is Hostinger. First, make an account and choose a domain name. Second, open a new terminal in VS Code and run the command 'npm run build'. This will create a new file within your repository, including a raw HTML file that contains your entire website. Finally, transfer all of the files into your Hostinger domain and you are done!
        </p>

        <p className="mt-[8px] font-bold sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          
          </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/website.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
