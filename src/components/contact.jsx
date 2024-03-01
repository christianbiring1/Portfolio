import { useState } from "react";
import Joi from "joi-browser";
import { useTranslation } from "react-i18next";
import PropsTypes from "prop-types";
import { BsFillSendFill } from "react-icons/bs";



const Contact = (props) => {
  const {active} = props;

  const { t } = useTranslation();
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

  const handleSubmit = (e) => {
    const errors = validate();
    setAllErrors(errors)
    if (errors) e.preventDefault();
  }


  const { name, email, message } = visitor;
  const styles = active ? {color: "#fff"} : {};

  const FORMSPREE_ID = process.env.VITE_FORMSPREE_ID || import.meta.env.VITE_FORMSPREE_ID;

  return (
    <div className="contact_container" id="contact">
      <div className="interest">
          <h2 style={styles}>{t('contact')}</h2>
          <p style={styles}>{t('contactCta')}</p>
        </div>
        <form
          action={`https://formspree.io/f/${FORMSPREE_ID}`}
          id="form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="input-container">
            <input
              type="text"
              name="name"
              value={name}
              id="name"
              className="form-control"
              placeholder={t('name')}
              onChange={handleChange}
            />
            {allErrors?.name && <small className="text-danger fw-light">{allErrors?.name}</small> }
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              id="email"
              placeholder={t('email')}
              onChange={handleChange}
            />
            {/* <div id="emailHelp" className="form-text">Your Email will never be shared with anyone else.</div> */}
            {allErrors?.email && <small className="text-danger fw-light">{allErrors?.email}</small> }
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
            {allErrors?.message && <small className="text-danger fw-light">{allErrors?.message}</small> }
          </div>
          <button type="submit" className="btn btn-primary">
            <BsFillSendFill  size={30}/>
          </button>
        </form>
    </div>
  );
}

Contact.propTypes = {
  active: PropsTypes.bool.isRequired
}
 
export default Contact;