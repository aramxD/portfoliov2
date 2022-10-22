import React from "react";
import styled from "styled-components";
import projects from "../mock/ProjectsMocks";
import ProjectCard from "../components/ProjectCard";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const projectsProfesional = projects.filter(
  (project) => project.type === "profesional"
);
const projectsSamples = projects.filter(
  (project) => project.type === "samples"
);
const projectsReact = projects.filter((project) => project.type === "react");

const Projects = ({ className }) => {
  return (
    <section className={className} id="projects">
      <div className="projectGroup">
        <div className="projectsTitle">
          <h2>
            Latest projects...<span>&#160;</span>
          </h2>
        </div>
        <div className="project-list">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 1,
              },
              // // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 1.5,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
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
      </div>
      <div className="projectGroup">
        <div className="projectsTitle">
          <h2>
            Samples / Demos...<span>&#160;</span>
          </h2>
        </div>
        <div className="project-list">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 1,
              },
              // // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 1.5,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
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
      </div>
      <div className="projectGroup">
        <div className="projectsTitle">
          <h2>
            React projects...<span>&#160;</span>
          </h2>
        </div>
        <div className="project-list">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 1,
              },
              // // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 1.5,
              },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
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
      </div>
    </section>
  );
};

export default styled(Projects)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  margin: 50px auto;
  width: 100%;

  .projectGroup{
    margin: 10px auto;
  }
  
  .projectsTitle {
    width: 100%;
    margin:0;
  }
  .project-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-around;
    align-items: center;
    margin: 20px 0;
    width: 100%;
  }
  
  article {
    margin: 10px 0 30px 0;
  }
  h2 {
    text-align: left;
    margin-left: 20px;
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

`;