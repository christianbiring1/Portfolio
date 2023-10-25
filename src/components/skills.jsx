import { useState } from "react";
import { FaReact, FaNodeJs, FaTools } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiRuby, SiRubyonrails, SiFirebase, SiMongodb, SiPostgresql, SiMysql, SiSupabase } from "react-icons/si";
import { BsFillSendFill, BsDatabaseFillGear, BsCheckCircleFill } from "react-icons/bs";
import { IoMail, IoLocationSharp, IoDesktop } from "react-icons/io5";

const Skills = () => {
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
      icon: <SiMongodb  size={30}color="green" />
    },
    {
      id: 1,
      label: 'PostgreSQL',
      icon: <SiPostgresql  size={30}color="#1b0760" />
    },
    {
      id: 1,
      label: 'MySQL',
      icon: <SiMysql  size={30}/>
    },
    {
      id: 1,
      label: 'Firebase',
      icon: <SiFirebase  size={30}color="yellow" />
    },
    {
      id: 1,
      label: 'Supabase',
      icon: <SiSupabase  size={30}color="green" />
    },
  ]
  return (
    <div className="skills_container">
      <div className="front-end">
        <h3><IoDesktop color="#333" size={20}/> Front-End</h3>
        <div className="front-end-skills">
          {frontend.map(item => (
            <div key={item.id} className="skill_item" >
              <span> {item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="back-end">
        <h3> <BsDatabaseFillGear color="blue"/> Backend</h3>
        <div className="front-end-skills">
          {backend.map(item => (
            <div key={item.id} className="skill_item" >
              <span> {item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="back-end">
        <h3> <FaTools color="#333" /> Tools</h3>
        <div className="front-end-skills">
          {tools.map(item => (
            <div key={item.id} className="skill_item" >
              <span> {item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Skills;