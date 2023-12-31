import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import React, { useState, useEffect, useRef } from "react";

import cstyle from "../style/Card.module.css";
import style from "../style/homepage/Project.module.css";

const Cards = () => {
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
  }, []);
  return (
    <>
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1101: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${cstyle.container}`}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        rewind={true}
      >
        {projectData.map((project) => {
          return (
            <SwiperSlide className={cstyle.item} key={project._id}>
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
                      <div className={style.loc}>
                        Location: {project.location}
                      </div>
                      <div className={style.scope}>Scope: {project.scope}</div>
                      <a href="#" className={style.link}>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Cards;
