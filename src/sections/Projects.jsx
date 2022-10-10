import React from "react";
import styled from "styled-components";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

//Image Projects
import p_quimikal from "../assets/img/imgProjects/p_quimikal.jpg";
import p_discounts from "../assets/img/imgProjects/p_discountscitys.jpg";
import p_bimcapacitacion from "../assets/img/imgProjects/p_bimcapacitacion.jpg";
import p_sampleForm from "../assets/img/imgProjects/p_sample_form.png";
import p_sampleOffice from "../assets/img/imgProjects/p_office_registration.png";
import p_agnesDonation from "../assets/img/imgProjects/p_casa_hogar.jpg";
import p_budgetApp from "../assets/img/imgProjects/p_budget_app.png";
import p_tiktaktoe from "../assets/img/imgProjects/p_tic_tac_toe.png";
import p_wheatherApp from "../assets/img/imgProjects/p_weather_app.png";
import p_presentation from "../assets/img/imgProjects/p_presentation.jpg";
import p_apiMovies from "../assets/img/imgProjects/p_apimovies.jpg";
import p_searchGif from "../assets/img/imgProjects/p_SearchGif.jpg";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    type: "profesional",
    title: "Quimikal Academy",
    url: "https://quimikal.com/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_quimikal,
    lenguage: "Español / Spanish",
  },
  {
    id: 2,
    type: "profesional",
    title: "BIMCapacitacion",
    url: "https://bimcapacitacion.com/",
    stack: ["HTML", "CSS", "JS", "Django"],
    imgProject: p_bimcapacitacion,
    lenguage: "Español / Spanish",
  },
  {
    id: 3,
    type: "profesional",
    title: "Discounts Citys",
    url: "https://discountscitydemo.herokuapp.com/",
    stack: ["HTML", "CSS", "JS", "Django"],
    imgProject: p_discounts,
    lenguage: "Ingles / English",
  },
  {
    id: 4,
    type: "samples",
    title: "Responsive Contact Form",
    url: "https://juliosantacruz.dev/sample_form/",
    stack: ["HTML", "CSS", "JS"],
    imgProject: p_sampleForm,
    lenguage: "Spanish / Español",
  },
  {
    id: 5,
    type: "samples",
    title: "Office Register",
    url: "https://a-coworking.herokuapp.com/",
    stack: ["HTML", "CSS", "JS", "Django"],
    imgProject: p_sampleOffice,
    lenguage: "Spanish / Español",
  },
  {
    id: 6,
    type: "samples",
    title: "Agnes Donation Web",
    url: "https://hogar-agneslester.herokuapp.com/",
    stack: ["HTML", "CSS", "JS", "Django"],
    imgProject: p_agnesDonation,
    lenguage: "Spanish / Español",
  },
  {
    id: 7,
    type: "react",
    title: "Budget App",
    url: "https://aramxd.github.io/react-budget-app/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_budgetApp,
    lenguage: "English / Ingles",
  },
  {
    id: 8,
    type: "react",
    title: "Tic Tac Toe App",
    url: "https://aramxd.github.io/TicTacToe/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_tiktaktoe,
    lenguage: "English / Ingles",
  },
  {
    id: 9,
    type: "react",
    title: "Wheater App",
    url: "https://aramxd.github.io/weather-page/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_wheatherApp,
    lenguage: "English / Ingles",
  },
  {
    id: 10,
    type: "react",
    title: "Search GIF! App",
    url: "https://aramxd.github.io/search_Gif/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_searchGif,
    lenguage: "Spanish / Español",
  },
  {
    id: 11,
    type: "react",
    title: "API Movies",
    url: "https://aramxd.github.io/api-movies/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_apiMovies,
    lenguage: "Spanish / Español",
  },
  {
    id: 12,
    type: "react",
    title: "Presentation Page",
    url: "https://aramxd.github.io/react-fetch-exercise/",
    stack: ["HTML", "CSS", "JS", "React"],
    imgProject: p_presentation,
    lenguage: "Spanish / Español",
  },
];

const projectsProfesional = projects.filter(
  (project) => project.type === "profesional"
);
const projectsSamples = projects.filter(
  (project) => project.type === "samples"
);
const projectsReact = projects.filter((project) => project.type === "react");

const Projects = ({ className }) => {
  return (
    <section className={` gallery ${className}`} id="projects">
      <div className=" ">
        <h2>
          Latest projects...<span>&#160;</span>
        </h2>
      </div>
      <div className="project-list">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            // 320: {
            //   width: 320,
            //   slidesPerView: 1,
            // },
            // // when window width is >= 640px
            // 640: {
            //   width: 640,
            //   slidesPerView: 2,
            // },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={8}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projectsProfesional.map((article) => {
            return (
              <SwiperSlide key={article.id}>
                <ProjectCard article={article} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className=" ">
        <h2>
          Samples / Demos...<span>&#160;</span>
        </h2>
      </div>
      <div className="project-list">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            // 320: {
            //   width: 320,
            //   slidesPerView: 1,
            // },
            // // when window width is >= 640px
            // 640: {
            //   width: 640,
            //   slidesPerView: 2,
            // },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={8}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projectsSamples.map((article) => {
            return (
              <SwiperSlide key={article.id}>
                <ProjectCard article={article} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className=" ">
        <h2>
          React projects...<span>&#160;</span>
        </h2>
      </div>
      <div className="project-list">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            // 320: {
            //   width: 320,
            //   slidesPerView: 1,
            // },
            // // when window width is >= 640px
            // 640: {
            //   width: 640,
            //   slidesPerView: 2,
            // },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={8}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projectsReact.map((article) => {
            return (
              <SwiperSlide key={article.id}>
                <ProjectCard article={article} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-left: 20px;
  }

  h2 {
    float: left;
    color: #000000;
    position: relative;
  }

  h2 span {
    position: absolute;
    right: 0;
    width: 0;
    background: #f2f2f2;
    border-left: 2px solid #000;
    animation: maquina 3s infinite alternate steps(30);
  }

  @keyframes maquina {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    align-items: center;
    margin-bottom: 50px;
  }

`;
