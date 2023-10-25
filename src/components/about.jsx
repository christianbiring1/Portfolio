import { PiSuitcaseSimple, PiLampLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";

import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";

const About = () => {
  
  return (
    <div className="about_container">
      <div className="details">
        <h3>About</h3>
        <p>
          Software Developer, coming from an Electrical technology background with a first-class 
          honor degree; I’m familiar with the sort of fast-paced, intense environment found in a lot
          of Software industries, problem-solving skills, effective communication, and more I now use
          every day as a developer and professional. with alove for clean code and accessible design.
          I am addicted to programming and remote work and capable of ramping up quickly and efficiently.
        </p>
      </div>
      <div className="experience">
        <h3 className="title">
          <span><PiSuitcaseSimple  size={30}/></span>
          <span>Experience</span>
        </h3>
        <div className="experience_item">
          <Experience />
        </div>
      </div>
      <div className="skills">
        <h3 className="title" >
          <span><PiLampLight /></span>
          <span>Skills</span>
        </h3>
          <div className="skills-wrapper">
            <Skills />
          </div>
      </div>
      <div className="education">
        <h3 className="title">
          <span><IoBookOutline  size={30}/></span>
          <span>Education</span>
        </h3>
        <div className="education_wrapper">
          <Education />
        </div>
      </div>
    </div>
  );
}
 
export default About;