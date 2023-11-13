import React from "react";  //eslint-disable-line

import { IoLocationSharp } from "react-icons/io5";

const Experience = () => {
  const exp = [
    {
      id: 1,
      url: 'https://ai.thinchealth.co',
      company: 'ThincHealth',
      location: 'Australia, Remote',
      position: 'Software Developer',
      period: 'August 2023 - Present',
      description: `Work alongside the Engineering team to develop software for digital health and AI adoption.`,
      stacks: ['React','NextJs', 'React Native', 'Supabase', 'Firebase', 'scss','SEO', 'Google Search Console']
    },
    {
      id: 2,
      url: 'https://www.microverse.org',
      company: 'Microverse',
      location: 'USA, Remote',
      position: 'TS Engineer',
      period: 'September - August 2023',
      description: `Ensuring the quality of source code and conducting code and UI reviews.
      Proposed improvements to code organization to improve code quality`,
      stacks: ['HTML5','CSS3', 'JavaScript', 'React', 'Ruby', 'Ruby on rails', 'PostgreSQL']
    },
    {
      id: 3,
      url: 'https://www.microverse.org',
      company: 'Microverse',
      location: 'USA, Remote',
      position: 'Student Mentor',
      period: 'April - October 2022',
      description: `Mentored junior web developers, providing technical support through code reviews.
      Provided advice and tips on how to maintain motivation and longevity in the program`,
      stacks: ['HTML5','CSS3', 'JavaScript', 'React', 'Git', 'Github']
    }
  ];

  return (
    <>
      {exp.map(item => (
        <a href={item.url} target="_blank" className="company experience" key={item.id} rel="noreferrer">
          <div className="period">
            <span className="date" >{item.period}</span>
            <span>
              <IoLocationSharp />
              {item.location}
            </span>
          </div>
          <div className="work__details">
            <div className="title">
              <h4 className="">
                <span className="position">{item.position}</span>
                <span>.</span>
                <span className="company_name">{item.company}</span>
                <span className="arrow">--{">"}</span>
              </h4>
            </div>
            <div className="description">
              {item.description}
            </div>
            <div className="stack_list">
              {item.stacks.map(stack => (
                  <span className="stack_name"key={stack} >{stack}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
 
export default Experience;