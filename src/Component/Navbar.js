import style from "../style/Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar2() {
  const parentNav = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };
  const childNav = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
  };
  return (
    <div>
      <motion.ul
        className="nav nav-tabs justify-content-center"
        variants={parentNav}
        animate={"animate"}
        initial="initial"
      >
        <div className={style.logo}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
            }}
          >
            Swany
            <div className={style.wname}>Engineering Solution</div>
          </a>
        </div>
        <motion.li className={`nav-item ${style.listLi}`} variants={childNav}>
          <a className="nav-link" aria-current="page" href="/">
            Home
          </a>
        </motion.li>
        <motion.li className="nav-item" variants={childNav}>
          <a className="nav-link " aria-current="page" href="/about">
            About
          </a>
        </motion.li>
        <motion.li className="nav-item" variants={childNav}>
          <a className="nav-link" href="/service">
            Services
          </a>
        </motion.li>
        <motion.li className="nav-item" variants={childNav}>
          <a className="nav-link" href="/project">
            Projects
          </a>
        </motion.li>
        <motion.li className="nav-item" variants={childNav}>
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </motion.li>
      </motion.ul>
      <div className="drawer">
        <div className={style.logo}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
            }}
          >
            Swany
            <div className={style.wname}>Engineering Solution</div>
          </a>
        </div>

        {/* Drawer Code */}

        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <img src="/drawer.svg" alt="" />
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title"
              id="offcanvasRightLabel offcanvasDarkLabel"
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "whitesmoke",
                  position: "absolute",
                  left: "39%",
                  top: "1rem",
                }}
              >
                Swany Engr
              </a>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className={style.list}>
              <li className={style.listTile}>
                <a href="/" className={style.link}>
                  <div className={style.headHome}>Home</div>
                </a>
              </li>
              <li className={style.listTile}>
                <a href="/about" className={style.link}>
                  <div className={style.headHome}>About</div>
                </a>
              </li>
              <li className={style.listTile}>
                <a href="/service" className={style.link}>
                  <div className={`${style.headHome}`}>Services</div>
                </a>
              </li>
              <li className={style.listTile}>
                <a href="/project" className={style.link}>
                  <div className={style.headHome}>Projects</div>
                </a>
              </li>
              <li className={style.listTile}>
                <a href="/contact" className={style.link}>
                  <div className={style.headHome}>Contact Us</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
