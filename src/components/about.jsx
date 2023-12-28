import React from "react"; //eslint-disable-line;
import { useTranslation } from "react-i18next";
import { PiSuitcaseSimple, PiLampLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { IoMail, IoLocationSharp } from "react-icons/io5";  //eslint-disable-line

import Experience from "./experience";
import Skills from "./skills";
import Education from "./education";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="about_container" id="about" >
      <div className="details" data-aos="fade-up" data-aos-duration="2500">
        <h3>{t('aboutTitle')}</h3>
        <p>{t('about')}</p>

        {/* <div className="details-contact">
          <div className="">
            <span>
              <IoLocationSharp />
            </span>
            <span>Kigali, KG 762 St</span>
          </div>
          <div className="">
            <span>
            </span>
            <span>
              <a href="christianbiringanine22@gmail.com">
              <IoMail />
              </a>
            </span>
          </div>
        </div> */}
      </div>
      <div className="experience">
        <h3 className="title">
          <span><PiSuitcaseSimple  size={30}/></span>
          <span>{t('experience')}</span>
        </h3>
        <div className="experience_item">
          <Experience />
          <a className="see-more" href="https://drive.google.com/file/d/1eH10d0YoTQ-rZH4NUfNUJEVVHFlDAsuI/view?usp=sharing" target="_blank" rel="noreferer noreferrer">View Full Résumé</a>
        </div>
      </div>
      <div className="skills" data-aos="fade-up" data-aos-duration="3000">
        <h3 className="title" >
          <span><PiLampLight /></span>
          <span>{t('skills')}</span>
        </h3>
          <div className="skills-wrapper">
            <Skills />
          </div>
      </div>
      <div className="education" data-aos="fade-up" data-aos-duration="3000">
        <h3 className="title">
          <span><IoBookOutline  size={30}/></span>
          <span>{t('education')}</span>
        </h3>
        <div className="education_wrapper">
          <Education />
        </div>
      </div>
    </div>
  );
}
 
export default About;