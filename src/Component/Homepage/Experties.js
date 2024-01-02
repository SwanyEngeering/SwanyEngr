import style from "../../style/homepage/Experties.module.css";

export default function Experties() {
  return (
    <div className={style.container}>
      <div className={style.headContainer}>
        <h1 className={style.head}>Our Experties</h1>
      </div>
      <div className={style.mainContainer}>
        <div className={style.textContainer}>
          <div className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            natus cupiditate non nostrum. Quibusdam magni distinctio sit vitae
            aspernatur voluptas? Esse nesciunt amet perferendis, quia harum ut
            odio quae molestias?
          </div>
        </div>
        <div className={style.expertiContainer}>
          <div className={style.card}>
            <div className={style.cardHead}>Engineering & Design</div>
            <div className={style.cardText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quidem architecto asperiores totam magnam aspernatur eum,{" "}
            </div>
            <div className={style.btn}>
              {" "}
              <a className={style.link} href="/about">
                Read More &gt;&gt;
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardHead}>Architecture</div>
            <div className={style.cardText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quidem architecto asperiores totam magnam aspernatur eum,{" "}
            </div>
            <div className={style.btn}>
              {" "}
              <a className={style.link} href="/about">
                Read More &gt;&gt;
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardHead}>Construction</div>
            <div className={style.cardText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quidem architecto asperiores totam magnam aspernatur eum,{" "}
            </div>
            <div className={style.btn}>
              {" "}
              <a className={style.link} href="/about">
                Read More &gt;&gt;
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardHead}>Interior & Design</div>
            <div className={style.cardText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quidem architecto asperiores totam magnam aspernatur eum,{" "}
            </div>
            <div className={style.btn}>
              {" "}
              <a className={style.link} href="/about">
                Read More &gt;&gt;
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardHead}>3D Modeling</div>
            <div className={style.cardText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quidem architecto asperiores totam magnam aspernatur eum,{" "}
            </div>
            <div className={style.btn}>
              {" "}
              <a className={style.link} href="/about">
                Read More &gt;&gt;
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.cardHead}>Project Management</div>
            <div className={style.cardText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
              quidem architecto asperiores totam magnam aspernatur eum,{" "}
            </div>
            <div className={style.btn}>
              {" "}
              <a className={style.link} href="/about">
                Read More &gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
