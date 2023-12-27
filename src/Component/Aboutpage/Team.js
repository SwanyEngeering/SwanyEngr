import style from "../../style/aboutpage/Team.module.css";

export default function Team() {
  return (
    <div className={style.container}>
      <div className={style.boxContainer}>
        <h1 className={style.heading}>Meet Our Team</h1>
        <div className={style.textContainer}>
          <div className={style.card}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>M.Hamiz Waqar</div>
            <div className={style.intro}>Head Planning and Management</div>
          </div>
          <div className={style.card}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>Hammad Bashir</div>
            <div className={style.intro}>Head Civil Engineering and Design</div>
          </div>
          <div className={style.card}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>M. Ahsan Javed</div>
            <div className={style.intro}>Head Architecture and Design</div>
          </div>
          <div className={style.card}>
            <img src="/mubariz.png" alt="" className={style.img} />
            <div className={style.name}>Sawaiz Waqar</div>
            <div className={style.intro}>
              Project Coordinator and Technical Writer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
