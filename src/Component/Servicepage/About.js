import style from "../../style/aboutpage/About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <h1 className={`${style.heading} ${style.aboutHead}`}>
        What Do You Know About Us?
      </h1>
      <div className={`${style.boxContainer} ${style.aboutBox}`}>
        <div className={style.textContainer}>
          <h1 className={`${style.textHead} ${style.about}`}>
            Welcome to Swany - Shaping Tomorrow, Engineering Today
          </h1>
          <p className={style.para1}>
            At Swany, we stand at the forefront of groundbreaking engineering
            solutions, seamlessly blending innovation, precision, and unwavering
            dedication. Our comprehensive services encompass the entire spectrum
            of project management, meticulous planning, precise scheduling, and
            cutting-edge 2D drafting and 3D BIM modeling. We specialize in
            structural design mastery and expert bid and proposal writing. More
            than service providers, we are your strategic partners committed to
            exceeding expectations, forging lasting relationships, and setting
            new industry benchmarks. Under the visionary leadership of our CEO,
            our professional team brings together diverse skills and
            experiences, ensuring each project is a masterpiece.
          </p>
          <p className={style.para1}>
            Let's collaborate to turn ideas into reality, redefine standards,
            and build a future shaped by engineering excellence. Join us in
            shaping tomorrow—choose Swany as your trusted partner for
            transformative and unparalleled engineering solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
