import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Component/Aboutpage/header";
import MD from "../Component/Aboutpage/md";
import Experties from "../Component/Aboutpage/Experties";
import Vision from "../Component/Aboutpage/Vision";
import { useState } from "react";
import valueStyle from "../style/aboutpage/Values.module.css";
import ceoStyle from "../style/aboutpage/ceo.module.css";

import { motion } from "framer-motion";

import profileStyle from "../style/aboutpage/ceo.module.css";
import mobstyle from "../style/aboutpage/Profile.module.css";
import teamStyle from "../style/aboutpage/Team.module.css";
import aboutStyle from "../style/aboutpage/About.module.css";

export default function Aboutpage() {
  const { section } = useParams();
  useEffect(() => {
    const element = document.getElementById(`${section}`);

    if (element) {
      // Get the position of the element
      const elementPosition = element.getBoundingClientRect().top;
      console.log(elementPosition);

      // Scroll to the position of the element
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth", // Optionally, use "auto" or "instant" for different scrolling behaviors
      });
    }
  }, [section]);
  const [head, setHead] = useState(false);
  const [text, setText] = useState(false);
  const [img, setImg] = useState(false);
  const [ceoText, setCeoText] = useState(false);
  const [profimg, setProfImg] = useState(false);
  const [proftext, setProfText] = useState(false);
  const [abouthead, setAboutHead] = useState(false);
  const [abouttext, setAboutText] = useState(false);
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

      {/* Team Code */}
      <div className={teamStyle.container} id="team">
        <div className={teamStyle.boxContainer}>
          <h1 className={teamStyle.heading}>Meet Our Team</h1>
          <div className={teamStyle.textContainer}>
            <div className={teamStyle.card}>
              <img src="/mubariz.png" alt="" className={teamStyle.img} />
              <div className={teamStyle.cardText}>
                <div className={teamStyle.name}>M.Hamiz Waqar</div>
                <div className={teamStyle.intro}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis adipisci aperiam nemo libero laboriosam unde fugit ex
                  culpa numquam, aspernatur, voluptate totam quidem minima ipsum
                  cum illo alias iste dolorum.
                </div>
              </div>
            </div>
            <div className={teamStyle.card}>
              <img src="/mubariz.png" alt="" className={teamStyle.img} />
              <div className={teamStyle.cardText}>
                <div className={teamStyle.name}>M.Hamiz Waqar</div>
                <div className={teamStyle.intro}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis adipisci aperiam nemo libero laboriosam unde fugit ex
                  culpa numquam, aspernatur, voluptate totam quidem minima ipsum
                  cum illo alias iste dolorum.
                </div>
              </div>
            </div>
            <div className={teamStyle.card}>
              <img src="/mubariz.png" alt="" className={teamStyle.img} />
              <div className={teamStyle.cardText}>
                <div className={teamStyle.name}>M.Hamiz Waqar</div>
                <div className={teamStyle.intro}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis adipisci aperiam nemo libero laboriosam unde fugit ex
                  culpa numquam, aspernatur, voluptate totam quidem minima ipsum
                  cum illo alias iste dolorum.
                </div>
              </div>
            </div>
            <div className={teamStyle.card}>
              <img src="/mubariz.png" alt="" className={teamStyle.img} />
              <div className={teamStyle.cardText}>
                <div className={teamStyle.name}>M.Hamiz Waqar</div>
                <div className={teamStyle.intro}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis adipisci aperiam nemo libero laboriosam unde fugit ex
                  culpa numquam, aspernatur, voluptate totam quidem minima ipsum
                  cum illo alias iste dolorum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experties id="experties" />
      {/* Value Code */}
      <motion.div
        className={valueStyle.container}
        onViewportEnter={() => setHead(true)}
        id="value"
      >
        <motion.h1
          className={valueStyle.boxHeading}
          animate={
            head
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
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          Our Values
        </motion.h1>
        <motion.div
          className={valueStyle.boxContainer}
          onViewportEnter={() => setText(true)}
        >
          <motion.div
            className={valueStyle.value1}
            animate={
              text
                ? {
                    transform: "rotateY(0deg)",
                    opacity: 1,
                  }
                : {
                    transform: "rotateY(90deg)",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <div className={valueStyle.heading}>Integrity</div>
            <p className={valueStyle.para}>
              Integrity is at the core of our interactions. We conduct our
              business with honesty, transparency, and a commitment to ethical
              practices.
            </p>
          </motion.div>
          <motion.div
            className={`${valueStyle.value2} ${valueStyle.value1}`}
            animate={
              text
                ? {
                    transform: "rotateY(0deg)",
                    opacity: 1,
                  }
                : {
                    transform: "rotateY(180deg)",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            <div className={valueStyle.heading}>Accountability</div>
            <p className={valueStyle.para}>
              We take responsibility for our actions and decisions.
              Accountability is integral to maintaining trust with our clients,
              team members, and stakeholders.
            </p>
          </motion.div>
          <motion.div
            className={`${valueStyle.value2} ${valueStyle.value1}`}
            animate={
              text
                ? {
                    transform: "rotateY(0deg)",
                    opacity: 1,
                  }
                : {
                    transform: "rotateY(180deg)",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <div className={valueStyle.heading}>Teamwork</div>
            <p className={valueStyle.para}>
              Teamwork is the foundation of our achievements. We foster a
              collaborative and supportive environment, recognizing the
              collective strength of our team.
            </p>
          </motion.div>
          <motion.div
            className={valueStyle.value1}
            animate={
              text
                ? {
                    transform: "rotateY(0deg)",
                    opacity: 1,
                  }
                : {
                    transform: "rotateY(90deg)",
                    opacity: 0,
                  }
            }
            transition={{
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <div className={valueStyle.heading}>Sustainability</div>
            <p className={valueStyle.para}>
              We recognize the importance of environmental responsibility and
              integrate sustainable practices into our projects, contributing to
              a more resilient and eco-friendly future.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Code */}
      <motion.div
        className={aboutStyle.container}
        onViewportEnter={() => setAboutHead(true)}
        id="about"
      >
        <motion.h1
          className={aboutStyle.heading}
          animate={
            abouthead
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
        >
          What Do You Know About Us?
        </motion.h1>
        <motion.div
          className={aboutStyle.boxContainer}
          onViewportEnter={() => setAboutText(true)}
        >
          <div className={aboutStyle.textContainer}>
            <motion.h1
              className={aboutStyle.textHead}
              animate={
                abouttext
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
            >
              Welcome to Swany - Shaping Tomorrow, Engineering Today
            </motion.h1>
            <motion.p
              className={aboutStyle.para1}
              animate={
                abouttext
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
                delay: 0.2,
              }}
            >
              At Swany, we stand at the forefront of groundbreaking engineering
              solutions, seamlessly blending innovation, precision, and
              unwavering dedication. Our comprehensive services encompass the
              entire spectrum of project management, meticulous planning,
              precise scheduling, and cutting-edge 2D drafting and 3D BIM
              modeling. We specialize in structural design mastery and expert
              bid and proposal writing. More than service providers, we are your
              strategic partners committed to exceeding expectations, forging
              lasting relationships, and setting new industry benchmarks. Under
              the visionary leadership of our CEO, our professional team brings
              together diverse skills and experiences, ensuring each project is
              a masterpiece.
            </motion.p>
            <motion.p
              className={aboutStyle.para1}
              animate={
                abouttext
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
                delay: 0.4,
              }}
            >
              Let's collaborate to turn ideas into reality, redefine standards,
              and build a future shaped by engineering excellence. Join us in
              shaping tomorrow—choose Swany as your trusted partner for
              transformative and unparalleled engineering solutions.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <Vision id="vision" />
    </div>
  );
}
