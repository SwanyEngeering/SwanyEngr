import style from "../../style/servicepage/Experties.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Collab() {
  const [cardhead, setCardHead] = useState(false);
  const [cardflag, setCardFlag] = useState(false);
  const cardParent = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.2,
        repeat: 0,
      },
    },
  };

  const cardChild = {
    hidden: {
      opacity: 0,
      y: "5rem",
    },
    animate: {
      opacity: 1,
      y: "0rem",
      transition: {
        type: "spring",
        stiffness: 150,
        duration: 0.15,
        damping: 13,
        repeat: 0,
      },
    },
  };
  return (
    <motion.div
      className={style.bodyContainer}
      onViewportEnter={() => {
        setCardFlag(true);
      }}
      variants={cardParent}
      initial={"hidden"}
      animate={cardflag ? "animate" : "hidden"}
      whileInView={{
        repeatCount: 0,
      }}
    >
      <motion.div
        className={style.heading}
        onViewportEnter={() => setCardHead(true)}
        initial={{
          opacity: cardhead ? 1 : 0,
          y: cardhead ? "0rem" : "5rem",
        }}
        whileInView={{
          y: "0rem",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: 0.2,
          stiffness: 100,
          damping: 11,
        }}
      >
        <div className={style.msg}>Collaborations</div>
        <hr className={style.line} />
      </motion.div>
      <motion.div
        className={style.container}
        onViewportEnter={() => {
          setCardFlag(true);
        }}
      >
        <motion.div className={style.card} variants={cardChild}>
          <div className={style.cardHeading}>
            HRP WorkForce iAS 10g, Oracle 10g
          </div>
          <div className={style.cardBody}>
            HRP WorkForce iAS 10g, Oracle 10g Oracons' HRP is a leading software
            for managing all enterprise HR and Payroll needs of Small, Medium
            and Large Organizations. Our solution is Flexible, Comprehensive,
            Fast Performing, Reliable, & Stable, incorporating Recruitment,
            Personnel, Appraisal Management, Allowances & Deductions, Medical,
            TAX, Payroll, Reports, KPI's, Ratio's, Loans, Advances, Succession
            Planning, Training and Development, Benefits. It can be fully
            integrated with Discoverer for charts and graphs.
          </div>
        </motion.div>
        <motion.div className={style.card} variants={cardChild}>
          <div className={style.cardHeading}>
            HRP WorkForce iAS 10g, Oracle 10g
          </div>
          <div className={style.cardBody}>
            HRP WorkForce iAS 10g, Oracle 10g Oracons' HRP is a leading software
            for managing all enterprise HR and Payroll needs of Small, Medium
            and Large Organizations. Our solution is Flexible, Comprehensive,
            Fast Performing, Reliable, & Stable, incorporating Recruitment,
            Personnel, Appraisal Management, Allowances & Deductions, Medical,
            TAX, Payroll, Reports, KPI's, Ratio's, Loans, Advances, Succession
            Planning, Training and Development, Benefits. It can be fully
            integrated with Discoverer for charts and graphs.
          </div>
        </motion.div>
        <motion.div className={style.card} variants={cardChild}>
          <div className={style.cardHeading}>
            HRP WorkForce iAS 10g, Oracle 10g
          </div>
          <div className={style.cardBody}>
            HRP WorkForce iAS 10g, Oracle 10g Oracons' HRP is a leading software
            for managing all enterprise HR and Payroll needs of Small, Medium
            and Large Organizations. Our solution is Flexible, Comprehensive,
            Fast Performing, Reliable, & Stable, incorporating Recruitment,
            Personnel, Appraisal Management, Allowances & Deductions, Medical,
            TAX, Payroll, Reports, KPI's, Ratio's, Loans, Advances, Succession
            Planning, Training and Development, Benefits. It can be fully
            integrated with Discoverer for charts and graphs.
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
