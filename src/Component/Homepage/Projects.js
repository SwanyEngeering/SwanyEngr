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

import React, { useState, useEffect, useRef } from "react";
import style from "../../style/homepage/Project.module.css";

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
  const cardsContainerRef = useRef(null);

  const handleCardClick = (id) => {
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
      // Clicked outside of cards container, reset flippedCards
      setFlippedCards([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideCards);
    return () => {
      document.removeEventListener("click", handleClickOutsideCards);
    };
  }, []); // Add flippedCards to dependencies if needed

  return (
    <div className={style.container}>
      <div className={style.heading}>Our Projects</div>
      <div className={style.heading2}>
        Our Professionals Leave a Lasting Impression
      </div>
      <div className={style.cardContainer} ref={cardsContainerRef}>
        {projectData.map((project) => (
          <div
            key={project.id}
            className={`card ${
              flippedCards.includes(project.id) ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(project.id)}
          >
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={project.image}
                  alt={`Card Front - ${project.name}`}
                  className={style.img}
                />
              </div>
              <div className="card-back">
                <div className={style.cardBackText}>
                  <div className={style.cardHead}>
                    Project Name: {project.name}
                  </div>
                  <div className={style.loc}>Location: {project.location}</div>
                  <div className={style.scope}>Scope: {project.scope}</div>
                  <a href="#" className={style.link}>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
