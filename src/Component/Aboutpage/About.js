// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   const [head, setHead] = useState(false);
//   const [text, setText] = useState(false);
//   return (
//     <motion.div
//       className={style.container}
//       onViewportEnter={() => setHead(true)}
//     >
//       <motion.h1
//         className={style.heading}
//         animate={
//           head
//             ? {
//                 y: 0,
//                 opacity: 1,
//               }
//             : {
//                 y: "100vh",
//                 opacity: 0,
//               }
//         }
//         transition={{
//           type: "tween",
//           duration: 1,
//           ease: "easeInOut",
//         }}
//       >
//         What Do You Know About Us?
//       </motion.h1>
//       <motion.div
//         className={style.boxContainer}
//         onViewportEnter={() => setText(true)}
//       >
//         <div className={style.textContainer}>
//           <motion.h1
//             className={style.textHead}
//             animate={
//               text
//                 ? {
//                     y: 0,
//                     opacity: 1,
//                   }
//                 : {
//                     y: "100vh",
//                     opacity: 0,
//                   }
//             }
//             transition={{
//               type: "tween",
//               duration: 1,
//               ease: "easeInOut",
//             }}
//           >
//             Welcome to Swany - Shaping Tomorrow, Engineering Today
//           </motion.h1>
//           <motion.p
//             className={style.para1}
//             animate={
//               text
//                 ? {
//                     y: 0,
//                     opacity: 1,
//                   }
//                 : {
//                     y: "100vh",
//                     opacity: 0,
//                   }
//             }
//             transition={{
//               type: "tween",
//               duration: 1,
//               ease: "easeInOut",
//               delay: 0.2,
//             }}
//           >
//             At Swany, we stand at the forefront of groundbreaking engineering
//             solutions, seamlessly blending innovation, precision, and unwavering
//             dedication. Our comprehensive services encompass the entire spectrum
//             of project management, meticulous planning, precise scheduling, and
//             cutting-edge 2D drafting and 3D BIM modeling. We specialize in
//             structural design mastery and expert bid and proposal writing. More
//             than service providers, we are your strategic partners committed to
//             exceeding expectations, forging lasting relationships, and setting
//             new industry benchmarks. Under the visionary leadership of our CEO,
//             our professional team brings together diverse skills and
//             experiences, ensuring each project is a masterpiece.
//           </motion.p>
//           <motion.p
//             className={style.para1}
//             animate={
//               text
//                 ? {
//                     y: 0,
//                     opacity: 1,
//                   }
//                 : {
//                     y: "100vh",
//                     opacity: 0,
//                   }
//             }
//             transition={{
//               type: "tween",
//               duration: 1,
//               ease: "easeInOut",
//               delay: 0.4,
//             }}
//           >
//             Let's collaborate to turn ideas into reality, redefine standards,
//             and build a future shaped by engineering excellence. Join us in
//             shaping tomorrow—choose Swany as your trusted partner for
//             transformative and unparalleled engineering solutions.
//           </motion.p>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

import style from "../../style/aboutpage/About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={style.head}>
          <div className={style.heading}>What Do You Know About Us?</div>
          <div className={style.mainContainer}>
            <div className={style.textContainer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iste qui placeat esse doloribus tenetur fugiat
              voluptatum quia corporis laudantium, sit animi error eveniet
              reprehenderit eligendi facilis alias molestiae mollitia! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste
              qui placeat esse doloribus tenetur fugiat voluptatum quia corporis
              laudantium, sit animi error eveniet reprehenderit eligendi facilis
              alias molestiae mollitia! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem iste qui placeat esse doloribus
              tenetur fugiat voluptatum quia corporis laudantium, sit animi
              error eveniet reprehenderit eligendi facilis alias molestiae
              mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iste qui placeat esse doloribus tenetur fugiat
              voluptatum quia corporis laudantium, sit animi error eveniet
              reprehenderit eligendi facilis alias molestiae mollitia! mollitia!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem iste qui placeat esse doloribus tenetur fugiat
              voluptatum quia corporis laudantium, sit animi error eveniet
              reprehenderit eligendi facilis alias molestiae mollitia!
            </div>
            <div className={style.imgContainer}>
              <img
                src="/phil-desforges-ow1mML1sOi0-unsplash.jpg"
                alt=""
                className={style.img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
