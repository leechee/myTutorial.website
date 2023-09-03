'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    animate="visible"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    style={{ zIndex: 1000 }}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
      <div className="text-center">
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          Website Tutorial
        </h2>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
