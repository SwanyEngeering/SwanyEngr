// // import style from "../../style/homepage/Project.module.css";
// // import React, { useState } from "react";

// // export default function Projects() {
// //   const [isFlipped, setFlipped] = useState(false);

// //   const handleCardClick = () => {
// //     setFlipped(!isFlipped);
// //   };
// //   return (
// //     <div className={style.container}>
// //       <div className={style.heading}>Our Projects</div>
// //       <div className={style.heading2}>
// //         Our Professional have lasting impression
// //       </div>
// //       <div className={style.cardContainer}>
// //         <div
// //           className={`card ${isFlipped ? "flipped" : ""}`}
// //           onClick={handleCardClick}
// //         >
// //           <div className="card-inner">
// //             <div className="card-front">
// //               <img
// //                 src="/copernico-p_kICQCOM4s-unsplash.jpg"
// //                 alt="Card Front"
// //                 className={style.img}
// //               />
// //             </div>
// //             <div className="card-back">
// //               <div className={style.cardBackText}>
// //                 <div className={style.cardHead}>Project Name: Lorem</div>
// //                 <div className={style.loc}>Location: Lorem</div>
// //                 <div className={style.scope}>
// //                   Scope : Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet{" "}
// //                 </div>
// //                 <a href="#" className={style.link}>
// //                   Read More
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div
// //           className={`card ${isFlipped ? "flipped" : ""}`}
// //           onClick={handleCardClick}
// //         >
// //           <div className="card-inner">
// //             <div className="card-front">
// //               <img
// //                 src="/copernico-p_kICQCOM4s-unsplash.jpg"
// //                 alt="Card Front"
// //                 className={style.img}
// //               />
// //             </div>
// //             <div className="card-back">
// //               <div className={style.cardBackText}>
// //                 <div className={style.cardHead}>Project Name: Lorem</div>
// //                 <div className={style.loc}>Location: Lorem</div>
// //                 <div className={style.scope}>
// //                   Scope : Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet{" "}
// //                 </div>
// //                 <a href="#" className={style.link}>
// //                   Read More
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div
// //           className={`card ${isFlipped ? "flipped" : ""}`}
// //           onClick={handleCardClick}
// //         >
// //           <div className="card-inner">
// //             <div className="card-front">
// //               <img
// //                 src="/copernico-p_kICQCOM4s-unsplash.jpg"
// //                 alt="Card Front"
// //                 className={style.img}
// //               />
// //             </div>
// //             <div className="card-back">
// //               <div className={style.cardBackText}>
// //                 <div className={style.cardHead}>Project Name: Lorem</div>
// //                 <div className={style.loc}>Location: Lorem</div>
// //                 <div className={style.scope}>
// //                   Scope : Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet{" "}
// //                 </div>
// //                 <a href="#" className={style.link}>
// //                   Read More
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div
// //           className={`card ${isFlipped ? "flipped" : ""}`}
// //           onClick={handleCardClick}
// //         >
// //           <div className="card-inner">
// //             <div className="card-front">
// //               <img
// //                 src="/copernico-p_kICQCOM4s-unsplash.jpg"
// //                 alt="Card Front"
// //                 className={style.img}
// //               />
// //             </div>
// //             <div className="card-back">
// //               <div className={style.cardBackText}>
// //                 <div className={style.cardHead}>Project Name: Lorem</div>
// //                 <div className={style.loc}>Location: Lorem</div>
// //                 <div className={style.scope}>
// //                   Scope : Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet{" "}
// //                 </div>
// //                 <a href="#" className={style.link}>
// //                   Read More
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import style from "../../style/homepage/Project.module.css";

// const Projects = () => {
//   const projectData = [
//     {
//       id: 1,
//       name: "Project 1",
//       location: "Location 1",
//       scope: "Scope 1",
//       image: "/andrade-YI_9SivVt_s-unsplash.jpg",
//     },
//     {
//       id: 2,
//       name: "Project 2",
//       location: "Location 2",
//       scope: "Scope 2",
//       image: "/copernico-p_kICQCOM4s-unsplash.jpg",
//     },
//     {
//       id: 3,
//       name: "Project 3",
//       location: "Location 3",
//       scope: "Scope 3",
//       image: "/copernico-p_kICQCOM4s-unsplash.jpg",
//     },
//     {
//       id: 4,
//       name: "Project 4",
//       location: "Location 4",
//       scope: "Scope 4",
//       image: "/copernico-p_kICQCOM4s-unsplash.jpg",
//     },
//     // Add more projects as needed
//   ];

//   const [flippedCards, setFlippedCards] = useState([]);

//   const handleCardClick = (id) => {
//     if (flippedCards.includes(id)) {
//       setFlippedCards(flippedCards.filter((cardId) => cardId !== id));
//     } else {
//       setFlippedCards([...flippedCards, id]);
//     }
//   };

//   return (
//     <div className={style.container}>
//       <div className={style.heading}>Our Projects</div>
//       <div className={style.heading2}>
//         Our Professionals Leave a Lasting Impression
//       </div>
//       <div className={style.cardContainer}>
//         {projectData.map((project) => (
//           <div
//             key={project.id}
//             className={`card ${
//               flippedCards.includes(project.id) ? "flipped" : ""
//             }`}
//             onClick={() => handleCardClick(project.id)}
//           >
//             <div className="card-inner">
//               <div className="card-front">
//                 <img
//                   src={project.image}
//                   alt={`Card Front - ${project.name}`}
//                   className={style.img}
//                 />
//               </div>
//               <div className="card-back">
//                 <div className={style.cardBackText}>
//                   <div className={style.cardHead}>
//                     Project Name: {project.name}
//                   </div>
//                   <div className={style.loc}>Location: {project.location}</div>
//                   <div className={style.scope}>Scope: {project.scope}</div>
//                   <a href="#" className={style.link}>
//                     Read More
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useState, useEffect, useRef } from "react";
// import style from "../../style/homepage/Project.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const Projects = () => {
//   const projectData = [
//     // Your project data
//     {
//       id: 1,
//       name: "Project 1",
//       location: "Location 1",
//       scope: "Scope 1",
//       image: "/andrade-YI_9SivVt_s-unsplash.jpg",
//     },
//     {
//       id: 2,
//       name: "Project 2",
//       location: "Location 2",
//       scope: "Scope 2",
//       image: "/copernico-p_kICQCOM4s-unsplash.jpg",
//     },
//     {
//       id: 3,
//       name: "Project 3",
//       location: "Location 3",
//       scope: "Scope 3",
//       image: "/copernico-p_kICQCOM4s-unsplash.jpg",
//     },
//     {
//       id: 4,
//       name: "Project 4",
//       location: "Location 4",
//       scope: "Scope 4",
//       image: "/copernico-p_kICQCOM4s-unsplash.jpg",
//     },
//   ];

//   const [flippedCards, setFlippedCards] = useState([]);
//   const cardsContainerRef = useRef(null);

//   const handleCardClick = (id) => {
//     if (flippedCards.includes(id)) {
//       setFlippedCards(flippedCards.filter((cardId) => cardId !== id));
//     } else {
//       setFlippedCards([...flippedCards, id]);
//     }
//   };

//   const handleClickOutsideCards = (event) => {
//     if (
//       cardsContainerRef.current &&
//       !cardsContainerRef.current.contains(event.target)
//     ) {
//       // Clicked outside of cards container, reset flippedCards
//       setFlippedCards([]);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClickOutsideCards);
//     return () => {
//       document.removeEventListener("click", handleClickOutsideCards);
//     };
//   }, []); // Add flippedCards to dependencies if needed

//   return (
//     <div className={style.container}>
//       <div className={style.heading}>Our Projects</div>
//       <div className={style.heading2}>
//         Our Professionals Leave a Lasting Impression
//       </div>
//       <div className={style.cardContainer} ref={cardsContainerRef}>
//         <Swiper
//           breakpoints={{
//             600: {
//               slidesPerView: 1,
//               spaceBetween: 20,
//             },
//             601: {
//               slidesPerView: 2,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//             1101: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//           }}
//           grabCursor={true}
//           loop={true}
//           modules={[Autoplay]}
//           className={`mySwiper`}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: true,
//           }}
//           rewind={true}
//         >
//           {projectData.map((project) => {
//             return (
//               <SwiperSlide key={project._id}>
//                 <div
//                   key={project.id}
//                   className={`card ${
//                     flippedCards.includes(project.id) ? "flipped" : ""
//                   }`}
//                   onClick={() => handleCardClick(project.id)}
//                 >
//                   <div className="card-inner">
//                     <div className="card-front">
//                       <img
//                         src={project.image}
//                         alt={`Card Front - ${project.name}`}
//                         className={style.img}
//                       />
//                     </div>
//                     <div className="card-back">
//                       <div className={style.cardBackText}>
//                         <div className={style.cardHead}>
//                           Project Name: {project.name}
//                         </div>
//                         <div className={style.loc}>
//                           Location: {project.location}
//                         </div>
//                         <div className={style.scope}>
//                           Scope: {project.scope}
//                         </div>
//                         <a href="#" className={style.link}>
//                           Read More
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useState, useRef } from "react";
import style from "../../style/homepage/Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Projects = () => {
  const projectData = [
    // Your project data
    {
      id: 1,
      name: "Project 1",
      location: "Location 1",
      scope: "Scope 1",
      image: "/andrade-YI_9SivVt_s-unsplash.jpg",
    },
    {
      id: 2,
      name: "Project 2",
      location: "Location 2",
      scope: "Scope 2",
      image: "/copernico-p_kICQCOM4s-unsplash.jpg",
    },
    {
      id: 3,
      name: "Project 3",
      location: "Location 3",
      scope: "Scope 3",
      image: "/copernico-p_kICQCOM4s-unsplash.jpg",
    },
    {
      id: 4,
      name: "Project 4",
      location: "Location 4",
      scope: "Scope 4",
      image: "/copernico-p_kICQCOM4s-unsplash.jpg",
    },
  ];

  const [flippedCards, setFlippedCards] = useState([]);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true); // State to control autoplay
  const cardsContainerRef = useRef(null);

  const handleCardClick = (id) => {
    setAutoplayEnabled(false); // Disable autoplay when a card is clicked

    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter((cardId) => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  const handleClickOutsideCards = (event) => {
    if (
      cardsContainerRef.current &&
      !cardsContainerRef.current.contains(event.target)
    ) {
      // Clicked outside of cards container, reset flippedCards and enable autoplay
      setFlippedCards([]);
      setAutoplayEnabled(true);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutsideCards);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutsideCards);
  //   };
  // }, []);

  return (
    <div className={style.container}>
      <div className={style.heading}>Our Projects</div>
      <div className={style.projectContainer} ref={cardsContainerRef}>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            601: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          grabCursor={false}
          loop={true}
          modules={[Autoplay]}
          className={`mySwiper`}
          autoplay={
            autoplayEnabled
              ? {
                  delay: 2500,
                  disableOnInteraction: true,
                }
              : false
          }
          rewind={true}
        >
          {projectData.map((project) => {
            return (
              <SwiperSlide
                key={project._id}
                onMouseLeave={() => setAutoplayEnabled(true)}
              >
                <div
                  key={project.id}
                  className={`card`}
                  onMouseEnter={() => setAutoplayEnabled(false)}
                >
                  <div className="card-inner">
                    <div className="card-front">
                      <img
                        src={project.image}
                        alt={`Card Front - ${project.name}`}
                        className={style.img}
                      />
                    </div>
                    <div
                      className={`cardTextContainer`}
                      onMouseEnter={() => setAutoplayEnabled(false)}
                    >
                      <a href="/" className={style.cardLink}>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <a href="/project" className={style.linkButton}>
        <button className={style.btn}>
          View All <span className={style.arrow}> &rarr;</span>
        </button>
      </a>
    </div>
  );
};

export default Projects;
