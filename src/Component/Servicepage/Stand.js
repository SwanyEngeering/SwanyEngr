import style from "../../style/aboutpage/Stand.module.css";

export default function Stand() {
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.heading}>What Make Us Stand Out</div>
      </div>
      <div className={style.mainContainer}>
        <div className={style.imgContainer}>
          <img src="/aboutbg.jpg" alt="" className={style.img} />
        </div>
        <div className={style.textContainer}>
          <div className={style.textHeading}>
            Build Your Worth Transform Your Future
          </div>
          <div className={style.mobImgContainer}>
            <img
              src="/nastuh-abootalebi-ZtC4_rPCRXA.jpg"
              alt=""
              className={style.img}
            />
          </div>
          <div className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum impedit
            alias deserunt ipsa eius, iure a repudiandae exercitationem
            consequatur, reiciendis, assumenda obcaecati! Cum aspernatur magni
            illum modi error beatae placeat. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Enim modi laborum explicabo provident
            similique? Earum omnis dolore, quibusdam quos sint debitis
            temporibus nemo illum error, facilis dolorum dolores optio enim!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={style.noteContainer}>
            <div className={style.star}>*</div>
            <div className={style.note}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className={style.noteContainer}>
            <div className={style.star}>*</div>
            <div className={style.note}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
