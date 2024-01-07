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
                  x: 0,
                }
              : {
                  opacity: 0,
                  x: "-100vw",
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quidem architecto asperiores totam magnam aspernatur
                  eum,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque blanditiis, porro cupiditate sint quibusdam sed quam,
                  expedita similique sequi illum harum ullam quod aspernatur
                  corrupti doloribus sunt consequatur inventore omnis.{" "}
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
              className={style.card}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quidem architecto asperiores totam magnam aspernatur
                  eum,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rem, adipisci optio? Aliquid, maiores officia aut suscipit,
                  dolores nisi hic odio similique, quas repellendus esse totam
                  porro? Harum consequatur quaerat consequuntur?{" "}
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
              className={style.card}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quidem architecto asperiores totam magnam aspernatur
                  eum,Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Id, aliquam dolorem libero blanditiis, perferendis quos totam
                  qui vel facilis mollitia modi et sit? Repudiandae esse
                  officiis id deleniti, quia vitae!{" "}
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
              className={style.card}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quidem architecto asperiores totam magnam aspernatur
                  eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur, eaque! Labore voluptatem autem aliquam eius
                  repellat maiores. Tenetur saepe error numquam impedit aperiam
                  deserunt atque eos. Quia delectus nostrum esse.{" "}
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
              className={style.card}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quidem architecto asperiores totam magnam aspernatur
                  eum,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque culpa doloremque vitae similique temporibus iste,
                  accusamus iure dicta id incidunt delectus, odio assumenda
                  doloribus, corrupti nostrum minus natus suscipit quos?{" "}
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
              className={style.card}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore, quidem architecto asperiores totam magnam aspernatur
                  eum,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Amet, sit non laboriosam, beatae odio magnam neque hic
                  voluptate harum dicta iste exercitationem quasi impedit
                  deserunt rerum quas ad eius minus.{" "}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
