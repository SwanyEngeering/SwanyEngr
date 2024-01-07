import style from "../../style/aboutpage/Team.module.css";

export default function Team() {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Meet Our Professional</h1>
      <div className={style.boxContainer}>
        <div className={style.textContainer}>
          <div className={style.card}>
            <div className={style.img}>
              <img
                src="/andrade-YI_9SivVt_s-unsplash.jpg"
                alt=""
                className={style.cardImg}
              />
            </div>
            <div className={style.txtContainer}>
              <div className={style.head}>Name</div>
              <div className={style.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                exercitationem, ad amet officiis ipsa reprehenderit dolorum
                suscipit nobis voluptas ducimus aut! Excepturi voluptatibus
                consectetur illum adipisci, debitis repellendus cum nesciunt!
              </div>
            </div>
          </div>
          <div className={style.card} style={{ marginTop: "2rem" }}>
            <div className={style.txtContainer}>
              <div className={`${style.head} ${style.head2}`}>Name</div>
              <div className={style.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                exercitationem, ad amet officiis ipsa reprehenderit dolorum
                suscipit nobis voluptas ducimus aut! Excepturi voluptatibus
                consectetur illum adipisci, debitis repellendus cum nesciunt!
              </div>
            </div>
            <div className={style.img}>
              <img
                src="/andrade-YI_9SivVt_s-unsplash.jpg"
                alt=""
                className={style.cardImg}
              />
            </div>
          </div>
          <div className={style.card}>
            <div className={style.img}>
              <img
                src="/andrade-YI_9SivVt_s-unsplash.jpg"
                alt=""
                className={style.cardImg}
              />
            </div>
            <div className={style.txtContainer}>
              <div className={style.head}>Name</div>
              <div className={style.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                exercitationem, ad amet officiis ipsa reprehenderit dolorum
                suscipit nobis voluptas ducimus aut! Excepturi voluptatibus
                consectetur illum adipisci, debitis repellendus cum nesciunt!
              </div>
            </div>
          </div>
          <div className={style.card} style={{ marginTop: "2rem" }}>
            <div className={style.txtContainer}>
              <div className={`${style.head} ${style.head2}`}>Name</div>
              <div className={style.text}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                exercitationem, ad amet officiis ipsa reprehenderit dolorum
                suscipit nobis voluptas ducimus aut! Excepturi voluptatibus
                consectetur illum adipisci, debitis repellendus cum nesciunt!
              </div>
            </div>
            <div className={style.img}>
              <img
                src="/andrade-YI_9SivVt_s-unsplash.jpg"
                alt=""
                className={style.cardImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
