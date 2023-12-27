import style from "../../style/aboutpage/Vision.module.css";

export default function Vision() {
  return (
    <div className={style.container}>
      <img
        src="/shea-rouda-Vtl6cOhO87Y.jpg"
        alt="nothing"
        className={style.img}
      />
      <div className={style.visionContainer}>
        <h1 className={style.heading}>Vision & Mission</h1>
        <div className={style.textContainer}>
          <div className={style.textHead}>01. Our Vision</div>
          <p className={style.para}>
            Our vision is to be the unrivaled leader in engineering solutions,
            inspiring innovation, and setting a new paradigm where Swany is
            synonymous with excellence. We aim to reshape the landscape of the
            industry, driving transformative solutions that leave a lasting
            impact.Swany is not just a name; it embodies a spirit of ingenuity,
            reliability, and a relentless pursuit of perfection that
            distinguishes us as a trailblazer in the world of engineering. As we
            navigate the future, we remain steadfast in our mission to leave an
            indelible mark on the industry, elevating Swany to unparalleled
            heights of success and distinction.
          </p>
          <div className={`${style.textHead} ${style.mission}`}>
            02. Our Mission
          </div>
          <p className={style.para}>
            With an unwavering commitment to cutting-edge technology and
            sustainable practices, we strive to surpass industry standards and
            redefine the possibilities within our field. At Swany, our mission
            is to deliver unparalleled engineering solutions, driven by fresh
            perspectives, unwavering dedication, and a commitment to exceeding
            expectations. We aim to redefine industry standards, building not
            just structures but lasting relationships with our clients as
            trusted partners in success. Our dedicated team of experts works
            synergistically, pushing the boundaries of conventional thinking to
            pioneer groundbreaking solutions. By fostering a culture of
            creativity, adaptability, and continuous improvement, we aim not
            only to meet but exceed the evolving needs of our clients and
            stakeholders. At Swany, we don't just build structures; we construct
            legacies that endure and contribute to a brighter, more sustainable
            future.
          </p>
        </div>
      </div>
    </div>
  );
}
