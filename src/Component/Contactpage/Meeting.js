import style from "../../style/contactpage/contact.module.css";
import Form from "./Form";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contactpage() {
  const [head, setHead] = useState(false);
  const [animate, setAnimate] = useState(false);

  const parent = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const child = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const [text, setText] = useState(false);
  return (
    <motion.div
      className={style.container}
      onViewportEnter={() => setHead(true)}
    >
      <motion.div
        className={style.headContainer}
        animate={
          head
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                x: "-100vw",
                opacity: 0,
              }
        }
        transition={{
          type: "tween",
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <h1 className={style.heading}>Contact Us</h1>
      </motion.div>
      <div className={style.boxContainer}>
        <motion.div
          className={style.textContainer}
          onViewportEnter={() => setText(true)}
        >
          <motion.div
            className={style.textHead}
            animate={
              text
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {
                    x: "-100vw",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            }}
          >
            Unlock the potential of your projects with our expert insights
          </motion.div>
          <motion.div
            className={style.contactContainer}
            onViewportEnter={() => setAnimate(true)}
            variants={parent}
            animate={animate ? "animate" : "hidden"}
          >
            <motion.div variants={child}>
              WhatsApp:
              <a className={style.link} href="https://wa.me/+923334463813">
                +92-333-4463813
              </a>
            </motion.div>
            <motion.div variants={child}>
              Phone:
              <a href="tel:++92-333-4463813" className={style.link}>
                +92-333-4463813
              </a>
            </motion.div>
            <motion.div variants={child}>
              Website:
              <a href="http://www.swanyengineering.com" className={style.link}>
                www.swanyengineering.com
              </a>
            </motion.div>
            <motion.div variants={child}>
              Email:
              <a
                href="mailto:swanyengineering@gmail.com"
                className={style.link}
              >
                swanyengineering@gmail.com
              </a>
            </motion.div>
            <motion.div className={style.textFoot} variants={child}>
              SCHEDULE YOUR COMPLIMENTARY CONSULTATION TODAY, AND LET'S EMBARK
              ON A JOURNEY TO REDEFINE EXCELLENCE TOGETHER.
            </motion.div>
          </motion.div>
        </motion.div>
        <Form />
      </div>
    </motion.div>
  );
}
