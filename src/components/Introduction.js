import React from "react";
import aos from "aos";
import { SocialIcon } from "react-social-icons";
import arrow from "../images/arrow-icon.png";

export default function Introduction() {
  return (
    <div id="introduction" className="section">
      <img
        id="profilepicture"
        src="https://www.meetive.nl/wp-content/uploads/2020/09/profile3-300x300.png"
        alt="profile"
      />
      <h1>Hi! My name is Zena Bos</h1>
      <h4>I'm a Full-stack Web Developer</h4>
      <div className="socials">
        <SocialIcon
          className="socialIcon"
          url="mailto:zta.bos@gmail.com"
          label="contact me"
        />
        <SocialIcon
          className="socialIcon"
          url="https://linkedin.com/in/zenabos"
        />
        <SocialIcon className="socialIcon" url="https://github.com/zenabos" />
      </div>
      <p id="scroll">Scroll down to see more!</p>
      <img id="arrow" src={arrow} alt="arrow" />
    </div>
  );
}
