import { useState } from "react";
import style from "../../style/homepage/Experties.module.css";

import { motion } from "framer-motion";

export default function Experties() {
  const [head, setHead] = useState(false);
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [cardThree, setCardThree] = useState();
  const [cardFour, setCardFour] = useState();
  const [cardFive, setCardFive] = useState();
  const [cardSix, setCardSix] = useState();
  return (
    <div className={style.container}>
      <motion.div
        className={style.headContainer}
        onViewportEnter={() => setHead(true)}
      >
        <motion.h1
          className={style.head}
          animate={
            head
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: "100vh",
                }
          }
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          Our Experties
        </motion.h1>
      </motion.div>
      <div className={style.mainContainer}>
        <div className={style.expertiContainer}>
          <motion.div
            className={style.cardContainer}
            onViewportEnter={() => setCardOne(true)}
          >
            <motion.div
              className={style.card}
              animate={
                cardOne
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: "200vh",
                    }
              }
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              <div className={style.btn}>
                <div className={style.cardHead}>Engineering & Design</div>
                <div className={style.cardText}>
                  In the realm of building construction, the symbiotic
                  relationship between engineering and design plays a pivotal
                  role in shaping the skylines of our cities and the
                  functionality of our living spaces. Engineers bring their
                  expertise to the table, applying principles of structural
                  integrity, materials science, and construction methodologies
                  to ensure buildings stand tall and resilient against various
                  forces.
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={style.cardContainer}
            onViewportEnter={() => {
              setCardTwo(true);
            }}
          >
            <motion.div
              className={`${style.card} ${style.architect}`}
              animate={
                cardTwo
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: "200vh",
                    }
              }
              transition={{
                type: "tween",
                duration: 0.9,
                ease: "easeInOut",
              }}
            >
              <div className={style.btn}>
                <div className={style.cardHead}>Architecture</div>
                <div className={style.cardText}>
                  Architecture in building construction is the art and science
                  of designing structures that not only fulfill functional needs
                  but also inspire awe through their form and aesthetics.
                  Architects play a pivotal role in shaping the physical
                  environment we inhabit, blending creativity with practicality
                  to create spaces that are both visually striking and highly
                  functional.
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={style.cardContainer}
            onViewportEnter={() => {
              setCardThree(true);
            }}
          >
            <motion.div
              className={`${style.card} ${style.construct}`}
              animate={
                cardThree
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: "200vh",
                    }
              }
              transition={{
                type: "tween",
                duration: 1.1,
                ease: "easeInOut",
              }}
            >
              <div className={style.btn}>
                <div className={style.cardHead}>Construction</div>
                <div className={style.cardText}>
                  Construction in building construction is a multifaceted
                  process that involves the systematic assembly of materials,
                  labor, and technology to bring architectural visions to life.
                  It encompasses a wide range of activities, from excavation and
                  foundation work to the installation of intricate mechanical
                  and electrical systems. The construction phase is where the
                  meticulous plans devised by architects and engineers become a
                  tangible reality, with skilled laborers and specialized
                  machinery working in harmony.
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={style.cardContainer}
            onViewportEnter={() => {
              setCardFour(true);
            }}
          >
            <motion.div
              className={`${style.card} ${style.interior}`}
              animate={
                cardFour
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: "200vh",
                    }
              }
              transition={{
                type: "tween",
                duration: 1.3,
                ease: "easeInOut",
              }}
            >
              <div className={style.btn}>
                <div className={style.cardHead}>Interior & Design</div>
                <div className={style.cardText}>
                  Interior design in building construction plays a pivotal role
                  in shaping spaces that harmonize functionality with
                  aesthetics. Beyond the structural elements of a building,
                  interior design focuses on creating environments that cater to
                  the needs and preferences of occupants. Interior designers
                  consider factors such as space utilization, lighting, color
                  schemes, and furniture placement to enhance the overall
                  ambiance and functionality of a space.
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={style.cardContainer}
            onViewportEnter={() => {
              setCardFive(true);
            }}
          >
            <motion.div
              className={`${style.card} ${style.modeling}`}
              animate={
                cardFive
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: "200vh",
                    }
              }
              transition={{
                type: "tween",
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <div className={style.btn}>
                <div className={style.cardHead}>3D Modeling</div>
                <div className={style.cardText}>
                  3D modeling has revolutionized the landscape of building
                  construction, offering architects, engineers, and stakeholders
                  a powerful tool to visualize, plan, and execute construction
                  projects with unprecedented precision. Through sophisticated
                  computer-aided design (CAD) software, professionals can create
                  detailed three-dimensional representations of structures,
                  allowing for a comprehensive understanding of spatial
                  relationships and design elements.
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className={style.cardContainer}
            onViewportEnter={() => {
              setCardSix(true);
            }}
          >
            <motion.div
              className={`${style.card} ${style.project}`}
              animate={
                cardSix
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: "200vh",
                    }
              }
              transition={{
                type: "tween",
                duration: 1.7,
                ease: "easeInOut",
              }}
            >
              <div className={style.btn}>
                <div className={style.cardHead}>Project Management</div>
                <div className={style.cardText}>
                  Project management plays a pivotal role in the successful
                  execution of building construction projects, serving as the
                  linchpin that aligns diverse stakeholders and ensures
                  efficient progress from conception to completion. In the
                  dynamic realm of construction, project managers are entrusted
                  with coordinating multifaceted tasks, managing resources, and
                  navigating challenges to deliver projects within scope, on
                  time, and within budget.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
