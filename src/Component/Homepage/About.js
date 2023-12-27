import { useState } from "react";
import style from "../../style/homepage/About.module.css";
import { motion } from "framer-motion";

export default function About() {
  const [animate, setAnimate] = useState(false);
  const animation = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    animate: {
      x: "0",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const [animateImage, setAnimateImage] = useState(false);
  return (
    <>
      <div className={style.container}>
        <motion.div
          className={style.aboutHead}
          onViewportEnter={() => setAnimate(true)}
        >
          <motion.div
            variants={animation}
            animate={animate ? "animate" : "hidden"}
          >
            <h1 className={style.heading}>About Us</h1>
            <h3 className={style.para}>
              Welcome to Swany Engineering, where innovation meets precision in
              the realm of architectural design and construction. Elevate your
              vision with our cutting-edge 2D and 3D design services,
              transforming blueprints into immersive visualizations that bring
              your dream home or building to life. Our team of skilled
              architects and designers seamlessly blend creativity with
              technical expertise, ensuring every detail is meticulously
              crafted. Whether you're envisioning a modern masterpiece, a cozy
              family home, or a functional commercial space, our commitment is
              to turn your ideas into reality.
            </h3>
            <a href="/about" className={style.link}>
              <button className={style.btn}>
                About Us <span className={style.arrow}>&gt;</span>{" "}
              </button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          style={{
            width: "100%",
            height: "20rem",
          }}
          onViewportEnter={() => setAnimateImage(true)}
        >
          <motion.div
            className={style.imageContainer}
            variants={animation}
            animate={animateImage ? "animate" : "hidden"}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}
