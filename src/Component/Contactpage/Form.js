import style from "../../style/contactpage/form.module.css";
import { motion } from "framer-motion";

import axios from "axios";
import { useState } from "react";

export default function Form() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [flag, setFlag] = useState("Email");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailRegex.test(user.email)) {
      setFlag("Email");
      axios
        .post("http://localhost:3001/contact", user)
        .then(({ data }) => {
          console.log(data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFlag("Enter Valid Email");
    }
  };

  return (
    <div
      style={{
        width: "50%",
      }}
      className={style.container}
    >
      <div className={style.contactform}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.inputContainer}>
            <div className={style.inputbox}>
              <input
                type="text"
                name="firstName"
                required="required"
                className="input"
                onChange={handleChange}
                require
              />
              <span className={style.label}>First Name</span>
            </div>

            <div className={style.inputbox}>
              <input
                type="text"
                name="lastName"
                required="required"
                className="input"
                onChange={handleChange}
                value={user.lastName}
                require
              />
              <span className={style.label}>Last Name</span>
            </div>

            <div className={style.inputbox}>
              <input
                type="email"
                name="email"
                required="required"
                className="input"
                onChange={handleChange}
                require
              />
              <span className={style.label}>{flag}</span>
            </div>

            <div className={style.inputbox}>
              <input
                type="text"
                name="contact"
                required="required"
                className="input"
                onChange={handleChange}
                maxLength={13}
                require
              />
              <span className={style.label}>Contact No</span>
            </div>

            <div className={style.inputbox}>
              <textarea
                required="required"
                name="message"
                onChange={handleChange}
                require
              />
              <span className={`${style.label} ${style.message}`}>Message</span>
            </div>

            <div className={style.inputbox}>
              <motion.button
                className={style.btn}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "tween",
                  duration: 0.1,
                  ease: "easeInOut",
                }}
              >
                Send
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
