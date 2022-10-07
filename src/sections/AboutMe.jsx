import React from "react";
import styled from "styled-components";

import AboutMeImg from "../assets/img/imgComun/Startup_Monochromatic.png";

const AboutMe = ({ className }) => {
  return (
    <section className={`seccion aboutme ${className}`} id="aboutme">
      <div id="aboutme-card " className="aboutme-card">
        <div className="aboutme-img home__img">
          {/* <img src={AboutMeImg} className="" alt="aboutme image" /> */}
        </div>
        <div className="aboutme-text" aria-level="1" aria-label="about me section">
          <h2 aria-label="Hello, My name is Julio Santacruz">
            Hello, My name is Julio Santacruz,
            <br />
            I'm a web developer
          </h2>
          <p>Let me help you with your project</p>
          <a
            href="https://drive.google.com/file/d/1_0pH7I-cwbRuUnTKyiZj5WlF4kowtXkP/view?usp=sharing"
            target="_blank"
            className=" project-card-btn"
            aria-label="You can download my resume here"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default styled(AboutMe)`
 height: 100vh;
 width: 100%;
  margin: auto;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 242, 242);
.aboutme {
  background-color: rgba(255, 255, 255, 0);
  margin: 0 auto;
}
.aboutme-card {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 auto;

   
}

.aboutme-img {
  width: 40%;
}
.aboutme-img img {
  width: 100%;
}
.aboutme-text {
  width: 70%;
  margin-left: 20px;
}

.aboutme-text p {
  line-height: 38px;
  margin-bottom: 40px;
  color: #494949;
  font-size: 20px;
}

.home__img {
  background-image: url(${AboutMeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 9px rgb(0, 0, 0);
  order: 1;
  justify-self: center;
  width: 400px;
  height: 400px;
  animation: profile__animate 8s ease-in-out infinite 1s;
}

@keyframes profile__animate {
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
}
`;
