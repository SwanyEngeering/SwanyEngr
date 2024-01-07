import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Component/Aboutpage/header";
import MD from "../Component/Aboutpage/md";
import Vision from "../Component/Aboutpage/Vision";
import { useState } from "react";
import ceoStyle from "../style/aboutpage/ceo.module.css";

import { motion } from "framer-motion";
import Value from "../Component/Aboutpage/values";
import Team2 from "../Component/Aboutpage/Team2";
import About from "../Component/Aboutpage/About";
import Profile from "../Component/Aboutpage/Profile";

export default function Aboutpage() {
  const { section } = useParams();
  useEffect(() => {
    const element = document.getElementById(`${section}`);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      console.log(elementPosition);

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, [section]);
  const [img, setImg] = useState(false);
  const [ceoText, setCeoText] = useState(false);
  return (
    <div>
      <Header bg={"about"} head={"about"} />

      <Profile />
      {/* CEO CODE */}

      <div className={ceoStyle.container} id="leadership">
        <motion.div
          className={ceoStyle.boxContainer}
          onViewportEnter={() => setCeoText(true)}
        >
          <motion.div
            className={ceoStyle.heading}
            animate={
              ceoText
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
            <h1 className={ceoStyle.msg}>Message from CEO</h1>
          </motion.div>
          <motion.div
            className={ceoStyle.mobImgContainer}
            onViewportEnter={() => setImg(true)}
          >
            <motion.img
              src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
              alt=""
              className={ceoStyle.img}
              animate={
                img
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: "-100vh",
                      opacity: 0,
                    }
              }
              transition={{
                type: "tween",
                duration: 1,
              }}
            />
            <motion.div
              className={ceoStyle.name}
              animate={
                img
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: "-100vh",
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
                M. Hamiz Waqar
              </div>
              <span>
                Founder SWANY <br /> Engineering Solutions
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className={ceoStyle.textContainer}
            animate={
              ceoText
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
            <div className={ceoStyle.textHead}>
              "Revolutionizing Engineering with Passion and Precision: <br />{" "}
              Energize your projects, elevate your visions – welcome to the
              dynamic world of Swany!"
            </div>
            <p className={ceoStyle.para}>
              At Swany, we believe in the transformative power of engineering to
              shape a better tomorrow. We lead a team of dedicated professionals
              who are not just architects of structures but creators of
              possibilities. Our commitment goes beyond delivering exceptional
              services; it's about crafting experiences, fostering innovation,
              and building lasting relationships. Swany is not just a company;
              it's a testament to the passion, precision, and unwavering
              dedication we bring to every project. Join us in this journey of
              innovation and let's build a future where engineering knows no
              bounds.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className={ceoStyle.imgContainer}
          onViewportEnter={() => setImg(true)}
        >
          <motion.img
            src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
            alt=""
            className={ceoStyle.img}
            animate={
              img
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: "-100vh",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1,
            }}
          />
          <motion.div
            className={ceoStyle.name}
            animate={
              img
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: "-100vh",
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
              M. Hamiz Waqar
            </div>
            <span>
              Founder SWANY <br /> Engineering Solutions
            </span>
          </motion.div>
        </motion.div>
      </div>
      <MD />
      <Team2 />
      <Value />
      <About />
      <Vision id="vision" />
    </div>
  );
}
