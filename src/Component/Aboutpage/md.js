import style from "../../style/aboutpage/ceo.module.css";

export default function ceo() {
  return (
    <div className={style.container}>
      <div className={style.boxContainer}>
        <div className={style.heading}>
          <h1 className={style.msg}>MANAGING DIRECTOR</h1>
        </div>
        <div className={style.textContainer}>
          <p className={style.para}>
            I extend a warm welcome to all our valued clients, collaborators,
            and partners. As the Managing Director of Swany, I am privileged to
            lead a team that is deeply committed to engineering excellence. At
            Swany, we see every project as an opportunity to create, innovate,
            and exceed expectations. Our team of seasoned professionals is
            driven by a passion for perfection, attention to detail, and a
            relentless pursuit of excellence. We take pride in our ability to
            seamlessly integrate innovation with precision, turning ideas into
            tangible results. Together, we are shaping a future where Swany is
            synonymous with transformative engineering solutions.
          </p>
          <div className={style.textHead}>
            "Unleashing Innovation, One Blueprint at a Time: Join Swany, where
            every project is a canvas for engineering brilliance, and success is
            a shared masterpiece."
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <img src="/verne-ho-0LAJfSNa-xQ.jpg" alt="" className={style.img} />
        <div className={`${style.name} ${style.md}`}>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            Sawaiz Waqar Chaudhry
          </div>{" "}
          Head of Business Development <br /> Swany Engineering Solutions
        </div>
      </div>
    </div>
  );
}
