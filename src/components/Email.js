import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Email = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g21pr8h",
        "template_4m4a8ys",
        form.current,
        "WEnSV56Aows6oYiBB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="email-wrapper">
      <div className="email-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" className="email-form-textarea" />
          <input type="submit" value="Send" className="email-form-btn" />
          {done && "Thank you. Message was sent."}
        </form>
      </div>
    </div>
  );
};
