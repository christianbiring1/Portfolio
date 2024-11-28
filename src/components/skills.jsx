import  React, { useState } from "react"; //eslint-disable-line
import PropsTypes from "prop-types";
import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiRuby, SiRubyonrails, SiMongodb, SiPostgresql, SiFigma, SiMui, SiAntdesign, SiCadillac } from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";
import {IoDesktop } from "react-icons/io5";

const Skills = (props) => {
  const { active } = props;

  const frontend = [
    {
      id: 1,
      label: 'JavaScript',
      icon: <RiJavascriptFill color="yellow"  size={30}/>,
    },
    {
      id: 2,
      label: 'React',
      icon: <FaReact color='#00acee' size={30}/>,
    },
    {
      id: 3,
      label: 'NextJS',
      icon: <TbBrandNextjs size={30}/>,
    },
    {
      id: 4,
      label: 'Material UI',
      icon: <SiMui size={25}/>
    },
    {
      id: 5,
      label: 'Ant design',
      icon: <SiAntdesign size={25}/>
    },
    {
      id: 6,
      label: 'Chadcn.ui',
      icon: < SiCadillac size={25}/>
    }
  ];
  const backend = [
    {
      id: 1,
      label: 'NodeJS',
      icon: <FaNodeJs size={30} color="green" />
    },
    {
      id: 2,
      label: 'Express',
      icon: <SiExpress size={30} />
    },
    {
      id: 3,
      label: 'Ruby',
      icon: <SiRuby size={30} color="red" />
    },
    {
      id: 4,
      label: 'Rails',
      icon: <SiRubyonrails size={30} color="red" />
    }
  ];

  const tools = [
    {
      id: 1,
      label: 'MongoDB',
      icon: <SiMongodb  size={30} color="green" />
    },
    {
      id: 2,
      label: 'PostgreSQL',
      icon: <SiPostgresql  size={30} color="#1b0760" />
    },
    {
      id: 3,
      label: 'Figma',
      icon: <SiFigma  size={30} color="#ae4dff" />
    },
  ];
  const styles = active ? {color: "#d9d9d9"} : {};
  return (
    <div className="skills_container">
      <div className="front-end">
        <h3 style={styles}><IoDesktop color = {active ? "#d9d9d9" : "#333"} size={20}/> Front-End</h3>
        <div className="front-end-skills">
          {frontend.map(item => (
            <div key={item.id} className="skill_item" >
              <span> {item.icon}</span>
              <span style={{ fontFamily: 'Raleway', fontSize: '1.3rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="back-end">
        <h3 style={styles}> <BsDatabaseFillGear color={active ? "#d9d9d9" : "blue"}/> Backend</h3>
        <div className="front-end-skills">
          {backend.map(item => (
            <div key={item.id} className="skill_item" >
              <span> {item.icon}</span>
              <span style={{ fontFamily: 'Raleway', fontSize: '1.3rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="back-end">
        <h3 style={styles}> <FaTools color={active ? "#d9d9d9" : "#333"} /> Tools</h3>
        <div className="front-end-skills">
          {tools.map(item => (
            <div key={item.id} className="skill_item" >
              <span> {item.icon}</span>
              <span style={{ fontFamily: 'Raleway', fontSize: '1.3rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  active: PropsTypes.bool.isRequired
}
 
export default Skills;