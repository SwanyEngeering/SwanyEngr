import style from "../../style/aboutpage/ceo.module.css";
import { motion } from "framer-motion";

import { useState } from "react";

export default function MD() {
  const [img, setImg] = useState(false);
  const [text, setText] = useState(false);
  return (
    <div className={style.container}>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setText(true)}
      >
        <motion.div
          className={style.heading}
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
          <h1 className={`${style.msg} ${style.mdhead}`}>MANAGING DIRECTOR</h1>
        </motion.div>
        <motion.div
          className={style.textContainer}
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
          }}
        >
          <p className={style.para}>
            I extend a warm welcome to all our valued clients, collaborators,
            and partners. As the Managing Director of Swany, I am privileged to
            lead a team that is deeply committed to engineering excellence. At
            Swany, we see every project as an opportunity to create, innovate,
            and exceed expectations. Our team of seasoned professionals is
            driven by a passion for perfection, attention to detail, and a
            relentless pursuit of excellence. We take pride in our ability to
            seamlessly integrate innovation with precision, turning ideas into
            tangible results. Together, we are shaping a future where Swany is
            synonymous with transformative engineering solutions.
          </p>
          <div className={style.textHead}>
            "Unleashing Innovation, One Blueprint at a Time: Join Swany, where
            every project is a canvas for engineering brilliance, and success is
            a shared masterpiece."
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className={style.imgContainer}
        onViewportEnter={() => setImg(true)}
      >
        <motion.img
          src="/verne-ho-0LAJfSNa-xQ.jpg"
          alt=""
          className={style.img}
          animate={
            img
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "100vw",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`${style.name} ${style.md}`}
          animate={
            img
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "100vw",
                  opacity: 0,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            Sawaiz Waqar Chaudhry
          </div>{" "}
          Head of Business Development <br /> Swany Engineering Solutions
        </motion.div>
      </motion.div>
    </div>
  );
}
