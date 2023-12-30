import React from "react"; //eslint-disable-line
import PropTypes from "prop-types";

import { IoLocationSharp } from "react-icons/io5";

const Education = (props) => {

  const { active } = props;

  const school = [
    {
      id: 1,
      company: 'Microverse',
      location: 'USA, Remote',
      position: 'Software Development',
      period: '2022',
      description: ``,
    },
    {
      id: 2,
      company: 'Kigali Independent University',
      location: 'Rwanda, Kigali',
      position: 'Electrical Engineering',
      period: '2018 - 2021',
      description: ``,
    }
  ];

  const styles = active ? {color: "#d9d9d9"} : {};

  return (
    <>
      {school.map(item => (
        <div className="company" key={item.id}>
          <div className="period">
            <span className="date" style={styles} >{item.period}</span>
            <span style={styles}>
              <IoLocationSharp />
              {item.location}
            </span>
          </div>
          <div className="work__details">
            <div className="title">
              <h4 className="" style={styles}>
                <span className="position" style={styles}>{item.position}</span>
                <span>.</span>
                <span className="company_name" >{item.company}</span>
              </h4>
            </div>
            <div className="description">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Education.propTypes = {
  active: PropTypes.bool.isRequired
}
 
export default Education;