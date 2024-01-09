import style from "../../style/aboutpage/Values.module.css";

export default function Values() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.head}>Our Values</div>
        <div className={style.boxContainer}>
          <div className={style.card}>
            <div className={style.cardText}>We Put People First</div>
          </div>
          <div className={style.card}>
            <div className={style.cardText}>We Are Better Together</div>
          </div>
          <div className={style.card}>
            <div className={style.cardText}>We Are Driven To Acheive</div>
          </div>
          <div className={style.card}>
            <div className={style.cardText}>We Love To Build</div>
          </div>
        </div>
      </div>
    </div>
  );
}
