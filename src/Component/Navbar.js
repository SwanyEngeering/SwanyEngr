import style from "../style/Navbar.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

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

  const [isOpen, setIsOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleNavHoverEnter = () => {
    setIsNavHovered(true);
  };

  const handleNavHoverLeave = () => {
    setIsNavHovered(false);
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.logoContainer}>
          <div className={style.topLogo}>SW</div>
          <div className={style.locationContainer}>
            <img src="/pin.png" alt="" className={style.whatsapp} />
            <div className={style.address}>Florida United States</div>
          </div>
          <div className={style.contact}>
            <a
              href="https://wa.me/+923334463813"
              className={style.contactContainer}
            >
              <img src="/telephone.png" alt="" className={style.whatsapp} />
              <div className={style.number}>+92-333-4463813</div>
            </a>
          </div>
        </div>
      </div>
      <motion.ul
        className={`nav justify-content-center ${
          isNavHovered ? style.navHovered : ""
        }`}
        variants={parentNav}
        animate={"animate"}
        initial="initial"
        onMouseEnter={handleNavHoverEnter}
        onMouseLeave={handleNavHoverLeave}
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
        <motion.li
          className={`nav-item ${style.listLi}`}
          variants={childNav}
          onMouseEnter={handleMouseLeave}
        >
          <a className="nav-link" aria-current="page" href="/">
            Home
          </a>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={childNav}
          onMouseEnter={handleMouseEnter}
        >
          <a aria-current="page" href="/about" className="nav-link">
            About
          </a>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={childNav}
          onMouseEnter={handleMouseLeave}
        >
          <a className="nav-link" href="/service">
            Services
          </a>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={childNav}
          onMouseEnter={handleMouseLeave}
        >
          <a className="nav-link" href="/project">
            Projects
          </a>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={childNav}
          onMouseEnter={handleMouseLeave}
        >
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
      {isOpen && (
        <div
          className={`${style.dropdownContent} drop`}
          onMouseEnter={handleNavHoverEnter}
          onMouseLeave={() => {
            handleMouseLeave();
            handleNavHoverLeave();
          }}
        >
          <div className={style.imgContainer}>
            <div className={style.imgText}>
              <div className={style.imgHead}>About Swany</div>
              <div className={style.imgContent}>
                <div
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  We shape your vision through Design. Bringing idea to life
                </div>
                <a href="/about" className={style.aboutLink}>
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
          <div className={style.textContainer}>
            <div className={style.firstColumn}>
              <a href="/about/profile" className={style.dropLink}>
                <div className={style.text}>Company Profile</div>
              </a>
              <a href="/about/leadership" className={style.dropLink}>
                <div className={style.text}>Our Leadearship</div>
              </a>
              <a href="/about/mission" className={style.dropLink}>
                <div className={style.text}>Our Mission</div>
              </a>
            </div>
            <div className={style.firstColumn}>
              <a href="/about/vision" className={style.dropLink}>
                <div className={style.text}>Our Vision</div>
              </a>
              <a href="/about/value" className={style.dropLink}>
                <div className={style.text}>Company Goals</div>
              </a>
              <a href="/about/about" className={style.dropLink}>
                <div className={style.text}>How it Works</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
