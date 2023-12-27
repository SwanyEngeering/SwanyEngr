import { useState } from "react";
import style from "../../style/homepage/About.module.css";
import { motion } from "framer-motion";

export default function Contact() {
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
            <h1 className={style.heading}>Contact Us</h1>
            <h3 className={style.para}>
              At Swany Engineering, we prioritize client satisfaction and
              effective communication. Your project is unique, and we understand
              the importance of tailoring our services to meet your specific
              needs. Our commitment to excellence extends to our contact
              process, where we welcome your inquiries, feedback, and
              collaboration. Feel free to reach out to us via the contact form
              below, and our responsive team will promptly assist you. We look
              forward to the opportunity to collaborate on your upcoming project
              and contribute to the realization of your architectural dreams.
              Trust Swany Engineering for exceptional 2D and 3D design solutions
              that exceed your expectations.
            </h3>
            <a href="/contact" className={style.link}>
              <button className={style.btn}>
                Contact Us <span className={style.arrow}>&gt;</span>{" "}
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
            className={`${style.imageContainer} ${style.contact}`}
            variants={animation}
            animate={animateImage ? "animate" : "hidden"}
            style={{
              marginTop: "1rem",
            }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
}
