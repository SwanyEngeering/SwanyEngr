import style from "../../style/aboutpage/header.module.css";
import { motion } from "framer-motion";

export default function header() {
  const animateVariants = {
    hidden: {
      opacity: 0,
      y: "10rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 11,
        duration: 0.3,
        repeat: 0,
      },
    },
  };
  return (
    <>
      <div className={style.container}>
        <motion.div
          className={style.heading}
          variants={animateVariants}
          initial={"hidden"}
          animate={"animate"}
        >
          About - Swany Engr
        </motion.div>
        <motion.div
          className={style.linkContainer}
          variants={animateVariants}
          initial={"hidden"}
          animate={"animate"}
        >
          <a href="/" className={`${style.link} ${style.home}`}>
            Home
          </a>
          <span className={style.link}>||</span>
          <a href="/about" className={`${style.link} ${style.about}`}>
            About
          </a>
        </motion.div>
      </div>
    </>
  );
}
