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
        <div className={style.card}>
          <div className={style.cardHead}>FLEXIBLE PROJECT TIMELINES</div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ipsa ea fugit aperiam sapiente, deserunt facere sit harum repellat,
            doloribus quis voluptatem dicta dignissimos, est porro. Maiores
            facere rerum odio.
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardHead}>
            TAILORED SOLUTIONS FOR EVERY CLIENT
          </div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ipsa ea fugit aperiam sapiente, deserunt facere sit harum repellat,
            doloribus quis voluptatem dicta dignissimos, est porro. Maiores
            facere rerum odio.
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardHead}>EFFORTLESS ONBOARDING PROCESS</div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ipsa ea fugit aperiam sapiente, deserunt facere sit harum repellat,
            doloribus quis voluptatem dicta dignissimos, est porro. Maiores
            facere rerum odio.
          </div>
        </div>
        <div className={style.card}>
          <div className={style.cardHead}>
            TIMELY AND RESPONSIVE CUSTOMER SUPPORT
          </div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ipsa ea fugit aperiam sapiente, deserunt facere sit harum repellat,
            doloribus quis voluptatem dicta dignissimos, est porro. Maiores
            facere rerum odio.
          </div>
        </div>
      </div>
    </div>
  );
}
