import style from "../../style/homepage/Connect.module.css";

export default function Connect() {
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div className={style.headingContainer}>
          <div className={style.heading}>We're better together</div>
        </div>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.cardHead}>Become a Client</div>
            <div className={style.text}>
              Immerse yourself in captivating visuals that blend creativity with
              functionality. Our thoughtfully crafted designs harmonize
              aesthetics and user experience, delivering a visually stunning
              journey through innovation.
            </div>
            <div className={style.linkContainer}>
              <a href="/contact" className={style.link}>
                Contact Us <span className={style.arrow}> &rarr;</span>
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardHead}>Ready to Connect</div>
            <div className={style.text}>
              Unlock a world of possibilities with our complimentary
              consultation! Experience personalized advice tailored to your
              needs. Your journey to success begins with a conversation. Book
              your free consultation now!
            </div>
            <div className={style.linkContainer}>
              <a href="/contact" className={style.link}>
                Hire Us <span className={style.arrow}> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
