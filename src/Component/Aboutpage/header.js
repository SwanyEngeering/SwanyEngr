// import { useState } from "react";
// import style from "../../style/homepage/Header.module.css";
// import { motion } from "framer-motion";

// export default function Header(props) {
//   const [flag, setFlag] = useState(false);
//   const animation = {
//     hidden: {
//       x: "-100vw",
//       opacity: 0,
//     },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "tween",
//         duration: 1,
//       },
//     },
//   };
//   return (
//     <>
//       <motion.div
//         className={`${style.container} ${props.bg}`}
//         onViewportEnter={() => setFlag(true)}
//       >
//         <motion.div
//           className={style.heading}
//           variants={animation}
//           animate={flag ? "animate" : "hidden"}
//         >
//           Introduction Swany
//         </motion.div>
//         <motion.div
//           className={style.linkContainer}
//           variants={animation}
//           animate={flag ? "animate" : "hidden"}
//         >
//           <div className={style.textContainer}>
//             B U I L D I N G F O R T O M O R R O W C O N S T R U C T I N G T O D
//             A Y ; <br /> Y O U R C O M P L E T E E N G I N E E R I N G S O L U T
//             I O N
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// }width="640" height="360"
import style from "../../style/homepage/Header.module.css";
import React, { useRef, useEffect } from "react";
export default function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        className={style.hiddenControls}
        autoPlay
        controls
        width="100%"
        height="80%"
      >
        <source src="/Swany Engineering.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
