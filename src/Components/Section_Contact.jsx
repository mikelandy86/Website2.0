import { Fade, Slide } from "react-awesome-reveal";
import { FaHeadset } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

  const form = useRef();
  
const SendEmailDone = "Your message has been successfully sent, I will contact you soon!"
  const sendEmail = (e) => {
    console.log("Sending Email!")
    
    e.preventDefault();
    
    emailjs.sendForm('service_dzjv7y5', 'template_q9uorg8j', form.current, 'YSGh0FPCtRosLE2Wp')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showResult(true);
      setTimeout(() => {
        showResult(false);
      }, 5000);
    };
    
    const [result, showResult] = useState(false);
    
    
  return (
    <div id="contact" className="contact-section">

        <img src="https://raw.githubusercontent.com/mikelandy86/website2.0/main/src/assets/public/images/Avatar-onlyhead.png"></img>

      <div className="section-bio-title">
        <h1>Contact me</h1>
        <h3>
          Be free to contact me using the form or <a href = "mailto:mike.landy@gmail.com?subject = Feedback&body = Message">Email me.</a>
        </h3>
      </div>
      <div className="section-contact-title">
        {/* <h1>Kontakt</h1> */}
        <div className="contact-flex-section">
          <div className="contact-input-container">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-outline">
                <input type="text" placeholder="Name" name="fullName" class="form-control" />
              </div>

              <div className="form-outline">
                <input type="text" placeholder="Subject" name="subject" class="form-control" />
              </div>

              <div className="form-outline">
                <input
                  type="email"
                  id="form4Example2"
                  placeholder="Email address"
                  className="form-control"
                  name="email"
                />
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control-message"
                  placeholder="Message"
                  rows="4"
                  name="message"
                ></textarea>
              </div>

              <button type="submit"  className="contact-btn">
                Submit
              </button>
              <div className="rowUnderSubmit">{result ? SendEmailDone : null}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
