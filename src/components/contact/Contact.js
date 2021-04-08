import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <p>Feel free to contact me using form below</p>
      <form action="https://formsubmit.co/evoworld1@gmail.com" method="POST">
        <div className="form-group">
          <label for="inputEmailAdress">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmailAdress"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label for="inputSubject">Subject</label>
          <input
            type="subject"
            className="form-control"
            id="inputSubject"
            name="subject"
            required
          />
        </div>
        <div class="form-group">
          <label for="formTextarea">Message</label>
          <textarea
            class="form-control"
            name="message"
            id="formTextarea"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
