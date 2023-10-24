import { PiSuitcaseSimple } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";

const About = () => {
  const exp = [
    {
      id: 1,
      company: 'ThincHealth',
      location: 'Australia, Remote',
      position: 'Software Developer',
      period: 'August 2023 - Present',
      description: `Work alongside the Engineering team to develop software for digital health and AI adoption.`,
      stacks: ['React','NextJs', 'React Native', 'scss','SEO', 'Google Search Console']
    },
    {
      id: 2,
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
      company: 'Microverse',
      location: 'USA, Remote',
      position: 'Student Mentor',
      period: 'April - October 2022',
      description: `Mentored junior web developers, providing technical support through code reviews.
      Provided advice and tips on how to maintain motivation and longevity in the program`,
      stacks: ['HTML5','CSS3', 'JavaScript', 'React', 'Git', 'Github']
    }
  ]
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
          {exp.map(item => (
            <div className="company" key={item.id}>
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
                    <span className="company_name" >{item.company}</span>
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
            </div>
          ))}
        </div>
      </div>
      <div className="skills">
        <h3>Skills</h3>
      </div>
      <div className="education">
        <h3>Education</h3>
      </div>
    </div>
  );
}
 
export default About;