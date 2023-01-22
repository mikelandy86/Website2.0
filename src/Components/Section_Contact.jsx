import { Fade, Slide } from "react-awesome-reveal";
import { FaHeadset } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

  const form = useRef();
  
const SendEmailDone = "Ditt meddelande har skickats, Jag kontaktar dig snart!"
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
      <div className="section-bio-title">
        <h1>
          <FaHeadset size={35} /> Hör av <h1>Dig</h1>
        </h1>
      </div>
      <div className="section-contact-title">
        {/* <h1>Kontakt</h1> */}
        <div className="contact-flex-section">
          <div className="contact-info-container">
            <Fade triggerOnce="true" cascade direction="up" fraction={0.8}>
              <p className="contact-title">Ta gärna kontakt!</p>
              <p className="contact-info">
                Om du har ett projekt i åtanke, varför inte ta kontakt. Låt mig
                veta om du har något intressant frilansarbete eller projekt.
                Stora eller små. Du kan kontakta mig via formuläret eller genom
                att mejla mike.landy@gmail.com.
              </p>
            </Fade>
            <img
              class="contact-image"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/bed9820de29c7a82891e8431f98d41c97fcc09ea/src/assets/public/images/undraw-contact.svg"
            />
          </div>
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
                Skicka
              </button>
              <div className="rowUnderSubmit">{result ? SendEmailDone : null}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
