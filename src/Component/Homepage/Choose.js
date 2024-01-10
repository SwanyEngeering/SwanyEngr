import style from "../../style/homepage/Choose.module.css";

export default function Choose() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <div className={style.logoCont}>
          <img src="/aboutbg.jpg" alt="" className={style.logo} />
        </div>
      </div>
      <div className={style.headContainer}>
        <div className={style.heading}>Why You Choose Us?</div>
      </div>
      <div className={style.cardContainer}>
        <div className={`${style.card}`}>
          <div className={style.cardHead}>FLEXIBLE PROJECT TIMELINES</div>
          <div className={style.text}>
            Flexible project timelines represent a contemporary approach to
            project management that acknowledges the inherent uncertainties and
            complexities in various industries. Unlike rigid, fixed schedules,
            flexible timelines recognize the need for adaptability in the face
            of unforeseen challenges, changes in requirements, or unexpected
            opportunities.
          </div>
        </div>
        <div className={`${style.card} ${style.solution}`}>
          <div className={style.cardHead}>
            TAILORED SOLUTIONS FOR EVERY CLIENT
          </div>
          <div className={style.text}>
            Offering tailored solutions for every client is the hallmark of a
            customer-centric approach that recognizes the unique needs and
            preferences of individuals or businesses.
          </div>
        </div>
        <div className={`${style.card} ${style.effort}`}>
          <div className={style.cardHead}>EFFORTLESS ONBOARDING PROCESS</div>
          <div className={style.text}>
            An effortless onboarding process is a cornerstone of a positive
            employee experience, setting the tone for a smooth integration into
            a new work environment. Such a process is characterized by its
            simplicity, clarity, and efficiency, minimizing stress and
            maximizing engagement.
          </div>
        </div>
        <div className={`${style.card} ${style.time}`}>
          <div className={style.cardHead}>
            TIMELY AND RESPONSIVE CUSTOMER SUPPORT
          </div>
          <div className={style.text}>
            Timely and responsive customer support stands as the cornerstone of
            a positive and enduring customer experience. In a fast-paced and
            interconnected world, businesses that prioritize prompt and
            effective customer service distinguish themselves in the
            marketplace.
          </div>
        </div>
      </div>
    </div>
  );
}
