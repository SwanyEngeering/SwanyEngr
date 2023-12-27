import style from "../../style/contactpage/contact.module.css";
import Form from "./Form";

export default function Contactpage() {
  return (
    <div className={style.container}>
      <div className={style.headContainer}>
        <h1 className={style.heading}>Contact Us</h1>
      </div>
      <div className={style.boxContainer}>
        <div className={style.textContainer}>
          <div className={style.textHead}>
            Unlock the potential of your projects with our expert insights
          </div>
          <div className={style.contactContainer}>
            <div>
              WhatsApp:
              <a className={style.link} href="https://wa.me/+923334463813">
                +92-333-4463813
              </a>
            </div>
            <div>
              Phone:
              <a href="tel:++92-333-4463813" className={style.link}>
                +92-333-4463813
              </a>
            </div>
            <div>
              Website:
              <a href="http://www.swanyengineering.com" className={style.link}>
                www.swanyengineering.com
              </a>
            </div>
            <div>
              Email:
              <a
                href="mailto:swanyengineering@gmail.com"
                className={style.link}
              >
                swanyengineering@gmail.com
              </a>
            </div>
            <div className={style.textFoot}>
              SCHEDULE YOUR COMPLIMENTARY CONSULTATION TODAY, AND LET'S EMBARK
              ON A JOURNEY TO REDEFINE EXCELLENCE TOGETHER.
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}
