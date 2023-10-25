import React from "react"; //eslint-disable-line
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { BsFillSendFill, BsCheckCircleFill } from "react-icons/bs";



const Contact = () => {
  return (
    <div className="contact_container">
      <div className="interest">
          <h2>Contact me</h2>
          <p>
            If you have an application you are intersted in developing, a
            feature that you need built or a project that needs coding. I&apos,d love
            to help with it.
          </p>
        </div>
        <form
          action="https://formspree.io/f/mzbovqko"
          id="form"
          method="POST"
        >
          <input
            type="text"
            id="name"
            name="name"
            maxLength="30"
            placeholder="Enter your name"
          /><br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter you email"
          /><br />
          <textarea
            name="message"
            id="message"
            maxLength="500"
            placeholder="Write your message here"
          /><br />
          <button type="submit">Get in touch</button>
        </form>
    </div>
  );
}
 
export default Contact;