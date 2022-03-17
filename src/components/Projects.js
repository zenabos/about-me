import React from "react";
import aos from "aos";
import dozema from "../images/dozema.png";
import meetive from "../images/meetive.png";

export default function Projects() {
  return (
    <div id="projects" className="section" data-aos="fade-up">
      <h1>Projects</h1>
      <hr className="devider" />

      <div className="projectsbox">
        <div className="projectcard">
          <a href="https://meetive.netlify.app/">
            <img src={meetive} alt="dozema" />
          </a>
          <h3>meetive app</h3>
          <p>
            Mobile focused web application to schedule meetings, choose topics
            and invite colleagues.
          </p>
        </div>

        <div className="projectcard">
          <a href="https://dozema-coffee.herokuapp.com/">
            <img src={dozema} alt="dozema" />
          </a>
          <h3>dozema-coffee</h3>
          <p>
            Web application where you can find a nice spot to work or just drink
            a coffee.
          </p>
        </div>
      </div>
    </div>
  );
}
