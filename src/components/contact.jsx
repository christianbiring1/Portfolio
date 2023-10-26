import React, { useState } from "react"; //eslint-disable-line;
import Joi from "joi-browser";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { BsFillSendFill, BsCheckCircleFill } from "react-icons/bs";



const Contact = () => {
  const [visitor, setVisitor] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [allErrors, setAllErrors] = useState({});

  const schema = {
    name: Joi.string().required().min(3).label("Name"),
    email: Joi.string().required().email().label("Email"),
    message: Joi.string().required().label("Message")
  };

  const validate = () => {
    const result = Joi.validate(visitor, schema, {abortEarly: false});
    if(!result.error) return;

    const errors = {};
    for(let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  // const errors = validate()
  //setallErrors(errors)

  const validateProperty = ({ name, value }) => {
    const obj = {[name]: value };
    const new_schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, new_schema);

    return error ? error.details[0].message : null;
  
  };

  const handleChange = (e) => {
    const errors = { ...allErrors };
    const { name, value } = e.currentTarget;

    const errorMessage = validateProperty(e.currentTarget);
    if(errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    setAllErrors(errors);

    setVisitor((prev) => {
      return {...prev, [name]: value}
    });
  }

  // const handleSubmit = () => {
  //   const errors = validate();
  //   setAllErrors(errors)
  // }


  const { name, email, message } = visitor;

  return (
    <div className="contact_container">
      <div className="interest">
          <h2>Contact Me</h2>
          <p>
            If you have an application you are intersted in developing, a
            feature that you need built or a project that needs coding. I'd love
            to help with it.
          </p>
        </div>
        <form
          action="https://formspree.io/f/mzbovqko"
          id="form"
          method="POST"
          // onSubmit={handleSubmit}
        >
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
            />
            {allErrors.name && <small className="text-danger fw-light">{allErrors.name}</small> }
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="email"
              placeholder="Enter your Email"
              onChange={handleChange}
            />
            {/* <div id="emailHelp" className="form-text">Your Email will never be shared with anyone else.</div> */}
            {allErrors.email && <small className="text-danger fw-light">{allErrors.email}</small> }
          </div>
          <div className="input-container">
            <textarea
              name="message"
              value={message}
              cols="30" rows="10"
              className="form-control"
              placeholder="Message"
              onChange={handleChange}
            />
            {allErrors.message && <small className="text-danger fw-light">{allErrors.message}</small> }
          </div>
          <button type="submit" disabled={validate()} className="btn btn-primary">
            <BsFillSendFill  size={30}/>
          </button>
        </form>
    </div>
  );
}
 
export default Contact;