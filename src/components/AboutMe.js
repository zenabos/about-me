import React from "react";
import aos from "aos";
import Languages from "./Languages";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <div id="about" className="section" data-aos="fade-up">
      <h1>About me</h1>
      <hr className="devider"/>

      <p>
        After many years of working closely with developers as an <span><b>Project Manager</b></span>, <br/> I decided to
        become a <span><b>developer</b></span> myself. </p>

       <p> I'm very passionate about <span><b>efficiency</b></span>. I like my code clean and my files organized.</p>
       
       <p> I will never leave a problem unsolved. <br/>
       And I love to be <span><b>creative</b></span> and thinking outside the box while solving it.
      </p>

      <div className="details">
        <Skills />
        <Languages />
      </div>
    </div>
  );
}
