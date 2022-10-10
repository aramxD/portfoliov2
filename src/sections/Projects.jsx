import React from "react";
import styled from "styled-components";


const projects =[
    {   
        type:'profesional',
        title:'Quimikal Academy',
        url:'https://quimikal.com/',
        stack:['HTML','CSS','JS','React'],
        lenguage:'Español / Spanish'
    }
]

const Projects = ({ className }) => {
  return (
    <section className={` gallery ${className}`} id="projects">
      <div className=" ">
        <h2>
          Latest projects...<span>&#160;</span>
        </h2>
      </div>
      <div className="project-list">
        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://quimikal.com/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_quimikal.jpg"
                    alt="discounts city project"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">Quimikal Academy</h3>
              <ul>
                <li><i className="bx bxl-html5"></i> HTML</li>
                <li><i className="bx bxl-css3"></i> CSS</li>
                <li><i className="bx bxl-javascript"></i> JS</li>
                <li><i className="bx bxl-react"></i> React</li>
              </ul>
            </div>
            <div className="project-card-footer">
              <p>
                <b> Español / Spanish </b>
              </p>
              <a
                href="https://quimikal.com/"
                className="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>




        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://discountscitydemo.herokuapp.com/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_discountscitys.png"
                    alt="discounts city project"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">Discounts Citys Subscription</h3>
              <ul>
                <li>
                  <i className="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i className="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i className="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i className="bx bxl-django"></i> Django
                </li>
              </ul>
            </div>
            <div className="project-card-footer">
              <p>
                <b> Ingles / English </b>
              </p>
              <a
                href="https://discountscitydemo.herokuapp.com/"
                className="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>
        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://bimcapacitacion.herokuapp.com/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_bimcapacitacion.png"
                    alt="bim capacitacion blog live"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">BIMCapacitacion</h3>

              <ul>
                <li>
                  <i className="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i className="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i className="bx bxl-javascript"></i>JS
                </li>
                <li>
                  <i className="bx bxl-django"></i> Django
                </li>
              </ul>
            </div>
            <div className="project-card-footer">
              <p>
                <b>Spanish / Español </b>
              </p>
              <a
                href="http://www.bimcapacitacion.com"
                className="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className=" ">
        <h2>
          Samples / Demos...<span>&#160;</span>
        </h2>
      </div>
      <div className="project-list">
        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://juliosantacruz.dev/sample_form/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_sample_form.png"
                    alt="sample office contact form"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">Responsive Contact Form</h3>
              <ul>
                <li>
                  <i className="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i className="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i className="bx bxl-javascript"></i> JS
                </li>
              </ul>
            </div>
            <div className="project-card-footer">
              <p>
                <b>Spanish / Español </b>
              </p>
              <a
                href="https://juliosantacruz.dev/sample_form/"
                className="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://a-coworking.herokuapp.com/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_office_registration.png"
                    alt="office register project"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">Office Register</h3>
              <ul>
                <li>
                  <i className="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i className="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i className="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i className="bx bxl-django"></i> Django
                </li>
              </ul>
            </div>
            <div className="project-card-footer">
              <p>
                <b>Spanish / Español </b>
              </p>
              <a
                href="https://a-coworking.herokuapp.com/"
                className="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://hogar-agneslester.herokuapp.com/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_casa_hogar.png"
                    alt="casa hogar image"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">Agnes Donation Web</h3>
              <ul>
                <li>
                  <i className="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i className="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i className="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i className="bx bxl-django"></i> Django
                </li>
              </ul>
            </div>
            <div className="project-card-footer">
              <p>
                <b> Spanish / Español </b>
              </p>
              <a
                href="https://hogar-agneslester.herokuapp.com/"
                className="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className=" ">
        <h2>
          React projects...<span>&#160;</span>
        </h2>
      </div>
      <div className="project-list">
        <article className="project">
          <div className="project-card project-card-shadow">
            <div className="project-card-content">
              <a
                href="https://aramxd.github.io/react-budget-app/"
                className=""
                target="_blank"
                id="profile-link"
              >
                <div className="project-card-img center-img">
                  <img
                    src="img/p_budget_app.png"
                    alt="budget app project"
                    className=""
                  />
                </div>
              </a>
              <h3 className="project-tile">Budget App</h3>

              <ul>
                <li>
                  <i className="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i className="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i className="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i className="bx bxl-react"></i> React
                </li>
              </ul>
            </div>
            <div class="project-card-footer">
              <p>
                <b> English / Ingles</b>
              </p>
              <a
                href="https://aramxd.github.io/react-budget-app/"
                class="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article class="project">
          <div class="project-card project-card-shadow">
            <div class="project-card-content">
              <a
                href="https://aramxd.github.io/TicTacToe/"
                class=""
                target="_blank"
                id="profile-link"
              >
                <div class="project-card-img center-img">
                  <img src="img/p_tic_tac_toe.png" alt="budget app" class="" />
                </div>
              </a>
              <h3 class="project-tile">Tic Tac Toe App</h3>
              <ul>
                <li>
                  <i class="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i class="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i class="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i class="bx bxl-react"></i> React
                </li>
              </ul>
            </div>
            <div class="project-card-footer">
              <p>
                <b> English / Ingles</b>
              </p>
              <a
                href="https://aramxd.github.io/TicTacToe/"
                class="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article class="project">
          <div class="project-card project-card-shadow">
            <div class="project-card-content">
              <a
                href="https://aramxd.github.io/weather-page/"
                class=""
                target="_blank"
                id="profile-link"
              >
                <div class="project-card-img center-img">
                  <img src="img/p_weather_app.png" alt="weather app" class="" />
                </div>
              </a>
              <h3 class="project-tile">Wheater App</h3>
              <ul>
                <li>
                  <i class="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i class="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i class="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i class="bx bxl-react"></i> React
                </li>
              </ul>
            </div>
            <div class="project-card-footer">
              <p>
                <b> English / Ingles</b>
              </p>
              <a
                href="https://aramxd.github.io/weather-page/"
                class="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article class="project">
          <div class="project-card project-card-shadow">
            <div class="project-card-content">
              <a
                href="https://aramxd.github.io/search_Gif/"
                class=""
                target="_blank"
                id="profile-link"
              >
                <div class="project-card-img center-img">
                  <img src="img/p_SearchGif.png" alt="Search GIF" class="" />
                </div>
              </a>
              <h3 class="project-tile">Search GIF! App</h3>
              <ul>
                <li>
                  <i class="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i class="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i class="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i class="bx bxl-react"></i> React
                </li>
              </ul>
            </div>
            <div class="project-card-footer">
              <p>
                <b> Spanish / Español</b>
              </p>
              <a
                href="https://aramxd.github.io/search_Gif/"
                class="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article class="project">
          <div class="project-card project-card-shadow">
            <div class="project-card-content">
              <a
                href="https://aramxd.github.io/api-movies/"
                class=""
                target="_blank"
                id="profile-link"
              >
                <div class="project-card-img center-img">
                  <img
                    src="img/p_apimovies.png"
                    alt="movie database app"
                    class=""
                  />
                </div>
              </a>
              <h3 class="project-tile">API Movies</h3>
              <ul>
                <li>
                  <i class="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i class="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i class="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i class="bx bxl-react"></i> React
                </li>
              </ul>
            </div>
            <div class="project-card-footer">
              <p>
                <b> English / Ingles</b>
              </p>
              <a
                href="https://aramxd.github.io/api-movies/"
                class="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>

        <article class="project">
          <div class="project-card project-card-shadow">
            <div class="project-card-content">
              <a
                href="https://aramxd.github.io/react-fetch-exercise/"
                class=""
                target="_blank"
                id="profile-link"
              >
                <div class="project-card-img center-img">
                  <img
                    src="img/p_presentation.png"
                    alt="presentation page app"
                    class=""
                  />
                </div>
              </a>
              <h3 class="project-tile">Presentation Page</h3>
              <ul>
                <li>
                  <i class="bx bxl-html5"></i> HTML
                </li>
                <li>
                  <i class="bx bxl-css3"></i> CSS
                </li>
                <li>
                  <i class="bx bxl-javascript"></i> JS
                </li>
                <li>
                  <i class="bx bxl-react"></i> React
                </li>
              </ul>
            </div>
            <div class="project-card-footer">
              <p>
                <b> Spanish / Español</b>
              </p>
              <a
                href="https://aramxd.github.io/react-fetch-exercise/"
                class="project-card-btn"
                target="_blank"
                id="profile-link"
              >
                View Live
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default styled(Projects)`
   
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

  .project {
    width: 30%;
    margin: 0.5rem 0;
  }

  .project-card {
    background: white;
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, 0.514);
    border-radius: 1rem;
    /* height: 100%; */
  }

  .project-card-img {
    height: 100px;
    overflow: hidden;
    cursor: pointer;
  }

  .center-img {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .project-card-img > img {
    align-items: center;
  }

  .project-card h3 {
    font-size: 1.2rem;
    font-weight: 200;
    padding: 10px 0;
  }

  .project p {
    margin: 20px 0;
    color: #494949;
    font-size: 1rem;
  }

  .project-card ul {
    display: flex;
    font-weight: 600;
    font-size: 0.75rem;
    justify-content: space-around;
  }

  .project-card li {
    padding: 0.25rem;
    display: flex;
    width: 20%;
    justify-content: space-evenly;
  }

  .project-card i {
    font-size: 1rem;
  }

  .project-card-footer {
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .project-card-footer p {
    margin: 0;
    font-size: 0.6rem;
  }

  .project-card-btn {
    background: #4e66f8;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    cursor: pointer;
  }

  .project-card-btn:hover,
  .project-card-btn:focus {
    background: #505ebb;
  }

  .project-card.project-card-shadow {
    border: none;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  }

`;
