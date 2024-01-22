import style from "../../style/homepage/Insight.module.css";

export default function Insight() {
  return (
    <div className={style.container}>
      <div className={style.headerContainer}>
        <div className={style.heading}>Insights</div>
        <a href="/blog" className={style.linkButton}>
          <button className={style.btn}>
            View All <span className={style.arrow}> &rarr;</span>
          </button>
        </a>
      </div>
      <div className={style.box}>
        <div className={style.card1}>
          <img src="/choose.jpg" alt="" className={style.cardimg} />
          <div className={style.cardHead}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className={style.cardText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            similique voluptatibus molestiae maiores, a, quis laboriosam, alias
            officia explicabo non voluptate. Nihil aspernatur consectetur totam
            laudantium aliquid. Consequuntur, repellendus totam?
          </div>
          <div className={style.linkContainer}>
            <a href="/insight" className={style.link}>
              Read More <span className={style.arrow}> &rarr;</span>
            </a>
          </div>
        </div>
        <div className={style.card}>
          <img src="/fomstock.jpg" alt="" className={style.cardimg} />
          <div className={style.cardHead}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className={style.cardText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            similique voluptatibus molestiae maiores, a, quis laboriosam, alias
            officia explicabo non voluptate. Nihil aspernatur consectetur totam
            laudantium aliquid. Consequuntur, repellendus totam?
          </div>
          <div className={style.linkContainer}>
            <a href="/insight" className={style.link}>
              Read More <span className={style.arrow}> &rarr;</span>
            </a>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
            alt=""
            className={style.cardimg}
          />
          <div className={style.cardHead}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className={style.cardText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            similique voluptatibus molestiae maiores, a, quis laboriosam, alias
            officia explicabo non voluptate. Nihil aspernatur consectetur totam
            laudantium aliquid. Consequuntur, repellendus totam?
          </div>
          <div className={style.linkContainer}>
            <a href="/insight" className={style.link}>
              Read More <span className={style.arrow}> &rarr;</span>
            </a>
          </div>
        </div>
        <div className={`${style.card} ${style.cardLast}`}>
          <img
            src="/patrick-tomasso-gMes5dNykus-unsplash.jpg"
            alt=""
            className={style.cardimg}
          />
          <div className={style.cardHead}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className={style.cardText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            similique voluptatibus molestiae maiores, a, quis laboriosam, alias
            officia explicabo non voluptate. Nihil aspernatur consectetur totam
            laudantium aliquid. Consequuntur, repellendus totam?
          </div>
          <div className={style.linkContainer}>
            <a href="/insight" className={style.link}>
              Read More <span className={style.arrow}> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
