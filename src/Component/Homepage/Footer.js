import style from "../../style/homepage/last.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <img src="/fomstock.jpg" alt="" className={style.logo} />
        <div className={style.textContainer}>
          <div className={style.top}>Swany</div>
          <div className={style.bottom}>Engineering Solutions</div>
        </div>
      </div>
      <div className={style.leftBox}>
        <div className={style.term}>Terms & Condition</div>
        <div className={style.policy}>Privacy Policy</div>
      </div>
    </div>
  );
}
