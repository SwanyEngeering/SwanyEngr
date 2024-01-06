import style from "../../style/aboutpage/Believe.module.css";

export default function Values() {
  return (
    <div className={style.container}>
      <h1 className={style.boxHeading}>What You Believe We Can Do</h1>
      <div className={style.boxContainer}>
        <div className={style.value1}>
          <div className={style.heading}>Integrity</div>
          <p className={style.para}>
            Integrity is at the core of our interactions. We conduct our
            business with honesty, transparency, and a commitment to ethical
            practices.
          </p>
        </div>
        <div className={`${style.value2} ${style.value1}`}>
          <div className={style.heading}>Accountability</div>
          <p className={style.para}>
            We take responsibility for our actions and decisions. Accountability
            is integral to maintaining trust with our clients, team members, and
            stakeholders.
          </p>
        </div>
        <div className={`${style.value2} ${style.value1}`}>
          <div className={style.heading}>Teamwork</div>
          <p className={style.para}>
            Teamwork is the foundation of our achievements. We foster a
            collaborative and supportive environment, recognizing the collective
            strength of our team.
          </p>
        </div>
        <div className={style.value1}>
          <div className={style.heading}>Sustainability</div>
          <p className={style.para}>
            We recognize the importance of environmental responsibility and
            integrate sustainable practices into our projects, contributing to a
            more resilient and eco-friendly future.
          </p>
        </div>
      </div>
    </div>
  );
}
