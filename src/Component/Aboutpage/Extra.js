{
  /* About Code */
}
{
  /* <motion.div
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
      </motion.div> */
}

{
  /* Value Code */
}
{
  /* <motion.div
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
      </motion.div> */
}

{
  /* Team Code */
}
{
  /* <div className={teamStyle.container} id="team">
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
      </div> */
}
// Values Code
import { useState } from "react";

// import { motion } from "framer-motion";

// import style from "../../style/aboutpage/Believe.module.css";

// export default function Values() {
//   const [head, setHead] = useState(false);
//   const [text, setText] = useState(false);
//   return (
//     <motion.div
//       className={style.container}
//       onViewportEnter={() => setHead(true)}
//     >
//       <motion.h1
//         className={style.boxHeading}
//         animate={
//           head
//             ? {
//                 x: 0,
//                 opacity: 1,
//               }
//             : {
//                 x: "100vw",
//                 opacity: 0,
//               }
//         }
//         transition={{
//           type: "tween",
//           duration: 1.5,
//           ease: "easeInOut",
//         }}
//       >
//         Our Values
//       </motion.h1>
//       <motion.div
//         className={style.boxContainer}
//         onViewportEnter={() => setText(true)}
//       >
//         <motion.div
//           className={style.value1}
//           animate={
//             text
//               ? {
//                   transform: "rotateY(0deg)",
//                   opacity: 1,
//                 }
//               : {
//                   transform: "rotateY(90deg)",
//                   opacity: 0,
//                 }
//           }
//           transition={{
//             type: "tween",
//             duration: 1.5,
//             ease: "easeInOut",
//           }}
//         >
//           <div className={style.heading}>Integrity</div>
//           <p className={style.para}>
//             Integrity is at the core of our interactions. We conduct our
//             business with honesty, transparency, and a commitment to ethical
//             practices.
//           </p>
//         </motion.div>
//         <motion.div
//           className={`${style.value2} ${style.value1}`}
//           animate={
//             text
//               ? {
//                   transform: "rotateY(0deg)",
//                   opacity: 1,
//                 }
//               : {
//                   transform: "rotateY(180deg)",
//                   opacity: 0,
//                 }
//           }
//           transition={{
//             type: "tween",
//             duration: 1.5,
//             ease: "easeInOut",
//             delay: 0.2,
//           }}
//         >
//           <div className={style.heading}>Accountability</div>
//           <p className={style.para}>
//             We take responsibility for our actions and decisions. Accountability
//             is integral to maintaining trust with our clients, team members, and
//             stakeholders.
//           </p>
//         </motion.div>
//         <motion.div
//           className={`${style.value2} ${style.value1}`}
//           animate={
//             text
//               ? {
//                   transform: "rotateY(0deg)",
//                   opacity: 1,
//                 }
//               : {
//                   transform: "rotateY(180deg)",
//                   opacity: 0,
//                 }
//           }
//           transition={{
//             type: "tween",
//             duration: 1.5,
//             ease: "easeInOut",
//             delay: 0.4,
//           }}
//         >
//           <div className={style.heading}>Teamwork</div>
//           <p className={style.para}>
//             Teamwork is the foundation of our achievements. We foster a
//             collaborative and supportive environment, recognizing the collective
//             strength of our team.
//           </p>
//         </motion.div>
//         <motion.div
//           className={style.value1}
//           animate={
//             text
//               ? {
//                   transform: "rotateY(0deg)",
//                   opacity: 1,
//                 }
//               : {
//                   transform: "rotateY(90deg)",
//                   opacity: 0,
//                 }
//           }
//           transition={{
//             type: "tween",
//             duration: 1.5,
//             ease: "easeInOut",
//             delay: 0.6,
//           }}
//         >
//           <div className={style.heading}>Sustainability</div>
//           <p className={style.para}>
//             We recognize the importance of environmental responsibility and
//             integrate sustainable practices into our projects, contributing to a
//             more resilient and eco-friendly future.
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }
