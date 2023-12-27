import { useState } from "react";
import style from "../../style/servicepage/About.module.css";
import { motion } from "framer-motion";

export default function Choose() {
  const [heading, setHeading] = useState(false);
  const [para, setPara] = useState(false);
  return (
    <div className={style.container}>
      <motion.div
        className={style.heading}
        onViewportEnter={() => setHeading(true)}
      >
        <motion.div
          animate={
            heading
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
          className={style.chooseMsg}
        >
          Why Choose Us?
        </motion.div>
        <motion.hr
          className={style.line}
          animate={
            heading
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
        />
      </motion.div>
      <motion.div onViewportEnter={() => setPara(true)}>
        <motion.p
          className={style.message}
          animate={
            para
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
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Every contractor wants an estimator on staff. It makes it easy. You
          find the job, the estimator takes the information and comes up with a
          price. You don’t have to look at costs or worry about margins.Here’s
          the problem? If they aren’t doing their job well, you’re not making
          nearly as much money as you could. The worst part is that most
          contractors never know they’re losing money.With Estimation Pros,
          you’re guaranteed the best quotes and the best margins. Why? Because
          this is all we do. We’ve gathered a team of experienced contractors,
          estimators, and engineers from the industry. They review your quote
          and make sure that you’re not leaving any money on the table.
        </motion.p>
      </motion.div>
    </div>
  );
}
