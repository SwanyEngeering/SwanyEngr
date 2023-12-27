import style from "../../style/servicepage/Goal.module.css";

export default function Goal() {
  return (
    <div className={style.container}>
      <h1 className={style.boxHeading}>Our Goals</h1>
      <div className={style.boxContainer}>
        <div className={style.value1}>
          <div className={style.heading}>Bid Wining Ratio</div>
          <p className={style.para}>
            Consistently secure victories in the competitive landscape, ensuring
            our clients' projects stand out and succeed.
          </p>
        </div>
        <div className={style.value2}>
          <div className={style.heading}>Excellent Services:</div>
          <p className={style.para}>
            Striving for unparalleled quality, we are committed to delivering
            engineering services that surpass industry standards, ensuring
            client satisfaction.
          </p>
        </div>
        <div className={style.value2}>
          <div className={style.heading}>Cost-Efficiency Redefined:</div>
          <p className={style.para}>
            Provide exceptional engineering solutions without compromising
            quality, maintaining costeffectiveness for the benefit of our
            clients.
          </p>
        </div>
        <div className={style.value1}>
          <div className={style.heading}>Client Satisfaction</div>
          <p className={style.para}>
            Focused on forging lasting relationships, our aim is to achieve high
            levels of client satisfaction by consistently exceeding expectations
            in every aspect of our services.
          </p>
        </div>
      </div>
    </div>
  );
}
