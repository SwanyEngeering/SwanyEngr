import style from "../../style/aboutpage/ceo.module.css";
import { motion } from "framer-motion";
import mobstyle from "../../style/aboutpage/Profile.module.css";

import { useState } from "react";

export default function CEO() {
  const [img, setImg] = useState(false);
  const [text, setText] = useState(false);
  return (
    <div className={`${style.container} ${mobstyle.container}`}>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setText(true)}
      >
        <motion.div
          className={`${style.heading} ${mobstyle.head}`}
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
          <h1 className={style.msg}>Company Profile</h1>
        </motion.div>
        <div className={style.textContainer}>
          <motion.p
            className={style.para}
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
            Welcome to Swany Engineering Works, your trusted partner in creating
            precision-engineered 2D and 3D models of buildings. Established with
            a commitment to excellence and innovation, Swany Engineering Works
            combines technical expertise with creative vision to bring
            architectural concepts to life. At Swany Engineering Works, our
            vision is to be a leading force in the realm of architectural
            modeling, providing our clients with cutting-edge solutions that
            transcend traditional boundaries. We aspire to set new standards in
            the industry through our commitment to quality, accuracy, and client
            satisfaction. Swany Engineering Works aims to be the catalyst for
            transformative designs, ensuring that every structure is brought to
            life in the virtual space before breaking ground in the physical
            world. Our expert team specializes in creating detailed and accurate
            2D models, laying the foundation for comprehensive project
            visualization and planning. Harness the power of three-dimensional
            representation with our advanced 3D modeling services. Experience
            your project in a virtual environment, enabling better
            decision-making and stakeholder communication.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        className={`${style.videoContainer} ${style.video}`}
        onViewportEnter={() => setImg(true)}
      >
        <motion.img
          src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
          alt=""
          className={style.img}
          animate={
            img
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
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.div
        className={mobstyle.heading}
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
        <h1 className={style.msg}>Company Profile</h1>
      </motion.div>
    </div>
  );
}
