import React from "react";
import styled from "styled-components";

const DevToCard = (post, { className }) => {
  return (
    <article className={`${className} project`} >
      <div className="project-card project-card-shadow">
        <div className="project-card-content">
          <a href={post.url} className="" target="_blank" id="profile-link">
            <div className="project-card-img center-img">
              <img
                src={post.imgProject}
                alt="discounts city project"
                className=""
              />
            </div>
          </a>
          <h3 className="project-tile">{post.title}</h3>
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
        <div className="project-card-footer">
          <p>
            <b> {post.lenguage} </b>
          </p>
          <a
            href={post.url}
            className="project-card-btn"
            target="_blank"
            id="profile-link"
          >
            View Live
          </a>
        </div>
      </div>
    </article>
  );
};

export default styled(DevToCard)``;
