import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Component/Aboutpage/header";
import MD from "../Component/Aboutpage/md";
import Vision from "../Component/Aboutpage/Vision";
import { useState } from "react";
import ceoStyle from "../style/aboutpage/ceo.module.css";

import { motion } from "framer-motion";

import profileStyle from "../style/aboutpage/ceo.module.css";
import mobstyle from "../style/aboutpage/Profile.module.css";
import Team from "../Component/Aboutpage/Team";
import Value from "../Component/Aboutpage/values";
import Team2 from "../Component/Aboutpage/Team2";
import About from "../Component/Aboutpage/About";
import Stand from "../Component/Aboutpage/Stand";
import Mission from "../Component/Aboutpage/Mission";
import Believe from "../Component/Aboutpage/Believe";
import Worth from "../Component/Aboutpage/Worth";

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
  const [profimg, setProfImg] = useState(false);
  const [proftext, setProfText] = useState(false);
  return (
    <div>
      <Header bg={"about"} head={"about"} />
      {/* Profile Code */}
      <div
        className={`${profileStyle.container} ${mobstyle.container}`}
        id="profile"
      >
        <motion.div
          className={profileStyle.boxContainer}
          onViewportEnter={() => setProfText(true)}
        >
          <motion.div
            className={`${profileStyle.heading} ${mobstyle.head}`}
            animate={
              proftext
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
            <h1 className={profileStyle.msg}>Company Profile</h1>
          </motion.div>
          <div className={profileStyle.textContainer}>
            <motion.p
              className={profileStyle.para}
              animate={
                proftext
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
              Welcome to Swany Engineering Works, your trusted partner in
              creating precision-engineered 2D and 3D models of buildings.
              Established with a commitment to excellence and innovation, Swany
              Engineering Works combines technical expertise with creative
              vision to bring architectural concepts to life. At Swany
              Engineering Works, our vision is to be a leading force in the
              realm of architectural modeling, providing our clients with
              cutting-edge solutions that transcend traditional boundaries. We
              aspire to set new standards in the industry through our commitment
              to quality, accuracy, and client satisfaction. Swany Engineering
              Works aims to be the catalyst for transformative designs, ensuring
              that every structure is brought to life in the virtual space
              before breaking ground in the physical world. Our expert team
              specializes in creating detailed and accurate 2D models, laying
              the foundation for comprehensive project visualization and
              planning. Harness the power of three-dimensional representation
              with our advanced 3D modeling services. Experience your project in
              a virtual environment, enabling better decision-making and
              stakeholder communication.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className={`${profileStyle.videoContainer} ${profileStyle.video}`}
          onViewportEnter={() => setProfImg(true)}
        >
          {/* <motion.div className={profileStyle.img}>
          <motion.video src="/realestate.mp4" loop className={`video`} />
          <div className={Styles.videoTextContainer}>
            <div
              className={Styles.play}
              onClick={() => {
                videoControl();
              }}
            >
              <img
                src="/button.png"
                alt="About1"
                className={`${Styles.pausebutton} play`}
              />
              <img
                src="/pause.png"
                alt="About1"
                className={`${Styles.playbutton} pause`}
              />
            </div>
          </div>
        </motion.div> */}
          <motion.img
            src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
            alt=""
            className={profileStyle.img}
            animate={
              profimg
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
            proftext
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
          <h1 className={profileStyle.msg}>Company Profile</h1>
        </motion.div>
      </div>

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
      <Team />
      <Team2 />
      <Value />
      <About />
      <Stand />
      <Mission />
      <Believe />
      <Worth />
      <Vision id="vision" />
    </div>
  );
}
