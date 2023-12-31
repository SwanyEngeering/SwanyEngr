import style from "../../style/aboutpage/Vision.module.css";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Vision() {
  const [img, setImg] = useState(false);
  const [head, setHead] = useState(false);
  const [text, setText] = useState(false);
  return (
    <motion.div
      className={style.container}
      onViewportEnter={() => setImg(true)}
      id="vision"
    >
      <motion.img
        src="/shea-rouda-Vtl6cOhO87Y.jpg"
        alt="nothing"
        className={style.img}
        animate={
          img
            ? {
                x: 0,
                opacity: 1,
              }
            : {
                x: "-100vw",
                opacity: 1,
              }
        }
        transition={{
          type: "tween",
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={style.visionContainer}
        onViewportEnter={() => setHead(true)}
      >
        <motion.h1
          className={style.heading}
          animate={
            head
              ? {
                  x: 0,
                  opacity: 1,
                }
              : {
                  x: "100vw",
                  opacity: 1,
                }
          }
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Vision & Mission
        </motion.h1>
        <motion.div
          className={style.textContainer}
          onViewportEnter={() => setText(true)}
        >
          <motion.div
            className={style.textHead}
            animate={
              text
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: "100vh",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 0.7,
              ease: "easeInOut",
            }}
          >
            01. Our Vision
          </motion.div>
          <motion.p
            className={style.para}
            animate={
              text
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: "100vh",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 0.9,
              ease: "easeInOut",
            }}
          >
            Our vision is to be the unrivaled leader in engineering solutions,
            inspiring innovation, and setting a new paradigm where Swany is
            synonymous with excellence. We aim to reshape the landscape of the
            industry, driving transformative solutions that leave a lasting
            impact.Swany is not just a name; it embodies a spirit of ingenuity,
            reliability, and a relentless pursuit of perfection that
            distinguishes us as a trailblazer in the world of engineering. As we
            navigate the future, we remain steadfast in our mission to leave an
            indelible mark on the industry, elevating Swany to unparalleled
            heights of success and distinction.
          </motion.p>
          <motion.div
            className={`${style.textHead} ${style.mission}`}
            animate={
              text
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: "100vh",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1.1,
              ease: "easeInOut",
            }}
          >
            02. Our Mission
          </motion.div>
          <motion.p
            className={style.para}
            animate={
              text
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: "100vh",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1.3,
              ease: "easeInOut",
            }}
          >
            With an unwavering commitment to cutting-edge technology and
            sustainable practices, we strive to surpass industry standards and
            redefine the possibilities within our field. At Swany, our mission
            is to deliver unparalleled engineering solutions, driven by fresh
            perspectives, unwavering dedication, and a commitment to exceeding
            expectations. We aim to redefine industry standards, building not
            just structures but lasting relationships with our clients as
            trusted partners in success. Our dedicated team of experts works
            synergistically, pushing the boundaries of conventional thinking to
            pioneer groundbreaking solutions. By fostering a culture of
            creativity, adaptability, and continuous improvement, we aim not
            only to meet but exceed the evolving needs of our clients and
            stakeholders. At Swany, we don't just build structures; we construct
            legacies that endure and contribute to a brighter, more sustainable
            future.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
