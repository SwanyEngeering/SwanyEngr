import style from "../../style/aboutpage/ceo.module.css";

export default function ceo() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img
          src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
          alt=""
          className={style.img}
        />
        <div className={style.name}>
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            M. Hamiz Waqar
          </div>{" "}
          Founder SWANY <br /> Engineering Solutions
        </div>
      </div>
      <div className={style.boxContainer}>
        <div className={style.heading}>
          <h1 className={style.msg}>Message from CEO</h1>
        </div>
        <div className={style.textContainer}>
          <div className={style.textHead}>
            "Revolutionizing Engineering with Passion and Precision: Energize
            your projects, elevate your visions – welcome to the dynamic world
            of Swany!"
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
    </div>
  );
}
