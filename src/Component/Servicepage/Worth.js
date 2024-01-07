import style from "../../style/aboutpage/Worth.module.css";

export default function Worth() {
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div className={style.imgContainer}></div>
        <div className={style.textContainer}>
          <div className={style.head}>
            <div className={style.heading}>Build Your Worth</div>
          </div>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <div className={style.cardHead}>CLIENT CENTRIC APPROCH</div>
              <div className={style.cardText}>
                Ensuring that projects align with clients’ goals, needs, and
                vision
              </div>
            </div>
            <div className={style.card}>
              <div className={style.cardHead}>ADVANCE TECHNOLOGY</div>
              <div className={style.cardTextSmall}>
                Using advance software to contribute to efficiency, accuracy,
                and overall project success. Immerse yourself in realistic
                visualization, fostering better decision making and design
                validation.
              </div>
            </div>
          </div>
          <div className={style.cardContainer}>
            <div className={style.card}>
              <div className={style.cardHead}>TRANSPARENT COMMUNICATION</div>
              <div className={style.cardTextSmall}>
                We adapt to your communication preferences, weather it’s email,
                calls, virtual meetings, or any other mode that ensures
                effective and convenient dialogue. We prioritize clear dialogue,
                keeping you informed at every step.
              </div>
            </div>
            <div className={style.card}>
              <div
                className={style.cardHead}
                style={{
                  width: "20rem",
                }}
              >
                CUSTOMER CENTRIC WARRANTY & SUPPORT
              </div>
              <div className={style.cardTextSmall}>
                We stand by our work, offering post-project support and
                addressing any concerns promptly, ensuring your long-term
                satisfaction. Showcasing flexibility in accommodating clients’
                evolving needs.
              </div>
            </div>
          </div>
          <div className={style.footContainer}>
            <div className={style.footCard}>
              <div className={style.textCard}>
                <div className={style.footimg}></div>
                <div className={style.footText}>
                  <div className={style.footHead}>
                    COST EFFICIENCY & BUDGET ADHERENCE
                  </div>
                  <div className={style.text}>
                    Cost-effective solutions and adhere to budget constraints
                    without compromising on quality. We work with you to create
                    arrangements that suit your preferences, fostering a
                    collaborative spirit that values your unique business
                    requirements.
                  </div>
                </div>
              </div>
            </div>
            <div className={style.footCard}>
              <div className={style.textCard}>
                <div className={style.footimg}></div>
                <div className={style.footText}>
                  <div className={style.footHead}>
                    PROACTIVE PROBLEM RESOLUTION
                  </div>
                  <div className={style.text}>
                    Count on our proactive approach to identify and address
                    potential challenges before they escalate. Our problem
                    solving mindset ensures a smooth project flow and minimize
                    disruptions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.lastHead}>
        CHOOSE YOUR MANAGER; CHOOSE THE RIGHT DIRECTION
      </div>
    </div>
  );
}
