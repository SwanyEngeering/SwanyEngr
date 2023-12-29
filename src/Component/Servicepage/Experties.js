import style from "../../style/aboutpage/Experties.module.css";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Experties() {
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
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };
  const [animate, setAnimate] = useState(false);
  const [head, setHead] = useState(false);
  return (
    <motion.div
      className={`${style.container} ${style.serviceContainer}`}
      onViewportEnter={() => setHead(true)}
    >
      <div
        className={`${style.headingContainer} ${style.serviceHeadingContainer}`}
      >
        <motion.div
          className={`${style.heading} ${style.serviceHeading}`}
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
        >
          Our Experties
        </motion.div>
      </div>
      <motion.div
        className={style.boxContainer}
        onViewportEnter={() => setAnimate(true)}
      >
        <motion.div
          className={style.textContainer}
          variants={parent}
          animate={animate ? "animate" : "hidden"}
        >
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box3}`}>01.</div>
            <div>
              <div className={style.cardHead}>Quantity & Cost Estimation</div>
              <div className={style.cardText}>
                This includes estimation for Site Preparation, Earthwork,
                Concrete, Masonry, Structural Steel, Roofing, Interior
                Finishing, Exterior Finishing, HVAC, Electrical, Plumbing, Fire
                Protection System, Foundation, Sewer and Water Line, Demolition,
                Renovation, High-rise Buildings, Residential, Commercial,
                Industrial Construction.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box3}`}>02.</div>
            <div>
              <div className={style.cardHead}>Project Management Services</div>
              <div className={style.cardText}>
                Our Project Management Services are tailored to meet the unique
                demands of each project. With a focus on collaboration,
                efficiency, and client satisfaction, we navigate complexities to
                deliver successful outcomes.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box2}`}>03.</div>
            <div>
              <div className={style.cardHead} style={{ color: "whitesmoke" }}>
                2D CAD Drafting
              </div>
              <div className={style.cardText}>
                With our expertise in 2D CAD Drafting, we play a crucial role in
                transforming design concepts into detailed, tangible plans for a
                wide range of industries.Our services encompass a wide range of
                applications, ensuring clarity, precision, and seamless
                communication of design intent.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box2}`}>04.</div>
            <div>
              <div className={style.cardHead} style={{ color: "whitesmoke" }}>
                3D BIM Modeling
              </div>
              <div className={style.cardText}>
                we specialize in cutting-edge 3D Building Information Modeling
                (BIM) services, elevating design, intelligent 3D modeling with
                comprehensive data to provide a holistic view of a construction
                project. Our skilled team of professionals excels in delivering
                the Architectural and Structural 3D Modelling.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box3}`}>05.</div>
            <div>
              <div className={style.cardHead}>
                Interior & Exterior Designing
              </div>
              <div className={style.cardText}>
                We redefine the art of Interior and Exterior Designing,
                seamlessly blending creativity, functionality, and innovation to
                transform spaces into immersive experiences. Our comprehensive
                design services cater to both the interior and exterior facets
                of a project, ensuring a harmonious and captivating aesthetic.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box3}`}>06.</div>
            <div>
              <div className={style.cardHead}>Structure Design & Analysis</div>
              <div className={style.cardText}>
                Our seasoned team of structural engineers is dedicated to
                crafting resilient and efficient structures, ensuring safety and
                performance. We conceptualise innovative structures or analyzing
                complex frameworks, our team ensures excellence in every
                engineering detail.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box2}`}>07.</div>
            <div>
              <div className={style.cardHead} style={{ color: "whitesmoke" }}>
                Walkthroughs & Rendering
              </div>
              <div className={style.cardText}>
                Immerse your clients in captivating visualizations that bring
                architectural and interior concepts to life. Our Walkthroughs &
                Rendering services go beyond visualization – they create an
                emotional connection between design concepts and reality.
              </div>
            </div>
          </motion.div>
          <motion.div className={style.card} variants={child}>
            <div className={`${style.box} ${style.box2}`}>08.</div>
            <div>
              <div className={style.cardHead} style={{ color: "whitesmoke" }}>
                Proposal & Report Writing
              </div>
              <div className={style.cardText}>
                We understand the power of words in shaping successful projects
                and initiatives. Our Proposal & Report Writing services are
                designed to articulate your ideas with clarity, persuasiveness,
                and professionalism
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
