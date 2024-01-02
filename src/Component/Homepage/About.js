import style from "../../style/homepage/About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <div className={style.textContainer}>
          <div className={style.heading}>Welcome To Swany</div>
          <div className={style.text}>
            Welcome to Swany Engineering, where innovation meets precision in
            the realm of architectural design. At Swany Engineering, we
            specialize in crafting dynamic and visually stunning 2D and 3D
            designs for buildings that transcend the boundaries of conventional
            architecture. With a passionate team of skilled professionals, we
            seamlessly blend creativity and technical expertise to bring your
            architectural visions to life.
          </div>
          <div className={style.linkContainer}>
            <a href="/contact" className={style.link}>
              Learn More About Us
            </a>
          </div>
        </div>
        <div className={style.imgContainer}>
          <img
            src="/copernico-p_kICQCOM4s-unsplash.jpg"
            alt=""
            className={style.img}
          />
        </div>
      </div>
    </div>
  );
}
