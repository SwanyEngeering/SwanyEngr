import style from "../style/About.module.css";

export default function ceo() {
  return (
    <div className={style.container}>
      <div className={style.boxContainer}>
        <div className={style.heading}>
          <h1 className={style.msg}>Message from CEO</h1>
        </div>
        <div className={style.textContainer}>
          <div className={style.textHead}>
            "Revolutionizing Engineering with Passion and Precision: <br />{" "}
            Energize your projects, elevate your visions – welcome to the
            dynamic world of Swany!"
          </div>
          <p className={style.para}>
            At Swany, we believe in the transformative power of engineering to
            shape a better tomorrow. We lead a team of dedicated professionals
            who are not just architects of structures but creators of
            possibilities. Our commitment goes beyond delivering exceptional
            services; it's about crafting experiences, fostering innovation, and
            building lasting relationships. Swany is not just a company; it's a
            testament to the passion, precision, and unwavering dedication we
            bring to every project. Join us in this journey of innovation and
            let's build a future where engineering knows no bounds.
          </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.boxContainer}>
          <div className={style.heading}>
            <h1 className={style.msg}>MANAGING DIRECTOR</h1>
          </div>
          <div className={style.textContainer}>
            <div className={style.textHead}>
              "Unleashing Innovation, One Blueprint at a Time: <br /> Join
              Swany, where every project is a canvas for engineering brilliance,
              and success is a shared masterpiece."
            </div>
            <p className={style.para}>
              I extend a warm welcome to all our valued clients, collaborators,
              and partners. As the Managing Director of Swany, I am privileged
              to lead a team that is deeply committed to engineering excellence.
              At Swany, we see every project as an opportunity to create,
              innovate, and exceed expectations. Our team of seasoned
              professionals is driven by a passion for perfection, attention to
              detail, and a relentless pursuit of excellence. We take pride in
              our ability to seamlessly integrate innovation with precision,
              turning ideas into tangible results. Together, we are shaping a
              future where Swany is synonymous with transformative engineering
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
