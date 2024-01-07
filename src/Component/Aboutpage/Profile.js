import { motion } from "framer-motion";
import style from "../../style/aboutpage/Profile.module.css";

import { useState } from "react";

export default function CEO() {
  const [img, setImg] = useState(false);
  const [text, setText] = useState(false);
  return (
    <div className={`${style.container}`}>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setText(true)}
      >
        <div className={style.textContainer}>
          <motion.div className={`${style.heading}`}>
            <h1 className={style.msg}>About Swany</h1>
          </motion.div>
          <div className={style.text}>
            <p className={style.para}>
              Welcome to Swany Engineering Works, your trusted partner in
              creating precision-engineered 2D and 3D models of buildings.
              Established with a commitment to excellence and innovation, Swany
              Engineering Works combines technical expertise with creative
              vision to bring architectural concepts to life. At Swany
              Engineering Works, our vision is to be a leading force in the
              realm of architectural modeling, providing our clients with
              cutting-edge solutions that transcend traditional boundaries. We
              aspire to set new standards in the industry through our commitment
              to quality, accuracy, and client satisfaction.
            </p>
          </div>
        </div>
        {/* <motion.div
          className={`${style.heading}`}
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
          <h1 className={style.msg}>About Swany</h1>
        </motion.div>
        
       */}
      </motion.div>
      {/* <div className={style.imgbg}></div>
      <motion.div
        className={style.mobheading}
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
        <h1 className={style.msg}>About Swany</h1>
      </motion.div> */}
    </div>
  );
}
